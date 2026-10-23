import pLimit from "p-limit";
import { setTimeout as sleep } from "node:timers/promises";
import { writeFileAtomic } from "./atomic-write.ts";
import { listTab, type Channel } from "./channel.ts";
import { createManifestStore, loadManifest, type ManifestStore } from "./manifest.ts";
import { channelPaths, type ChannelPaths, type ChannelTab } from "./paths.ts";
import { writeVideoMarkdown } from "./render/write.ts";
import { err, ok, type ManifestEntry, type Result } from "./types.ts";
import { fetchVideo, RETRYABLE, type VideoContext } from "./video.ts";
import type { YtDlpOptions } from "./ytdlp.ts";

export type FetchOptions = {
  channel: Channel;
  outDir: string;
  limit: number | undefined;
  /** YYYYMMDD */
  since: string | null;
  lang: string;
  includeStreams: boolean;
  concurrency: number;
  /** Minimum gap between two video starts, across all workers. */
  paceMs: number;
  force: boolean;
  ytdlp: YtDlpOptions;
};

export type VideoRecord = {
  id: string;
  title: string;
  status: ManifestEntry["status"] | "skipped";
  durationS: number;
  error: string | null;
  /** YouTube still rate limited or bot-checked the video after all retries. */
  blocked: boolean;
};

export type RunSummary = {
  counts: Record<VideoRecord["status"], number>;
  hours: number;
  failures: VideoRecord[];
  blocked: boolean;
};

export const summarize = (records: readonly VideoRecord[]): RunSummary => ({
  counts: {
    ok: records.filter((record) => record.status === "ok").length,
    no_captions: records.filter((record) => record.status === "no_captions").length,
    failed: records.filter((record) => record.status === "failed").length,
    skipped: records.filter((record) => record.status === "skipped").length,
  },
  hours: records.filter((record) => record.status !== "skipped").reduce((sum, record) => sum + record.durationS, 0) / 3600,
  failures: records.filter((record) => record.status === "failed"),
  blocked: records.some((record) => record.blocked),
});

type Pacer = () => Promise<void>;

/** Each call waits for its own start slot, so starts stay at least `gapMs` apart. */
export const createPacer = (gapMs: number): Pacer => {
  let nextStartAt = 0;
  return async () => {
    const now = Date.now();
    const startAt = Math.max(now, nextStartAt);
    nextStartAt = startAt + gapMs;
    if (startAt > now) await sleep(startAt - now);
  };
};

const isDone = (entry: ManifestEntry | undefined): boolean => entry?.status === "ok" || entry?.status === "no_captions";

const processVideo = async (
  entry: { id: string; title: string },
  ctx: VideoContext,
  store: ManifestStore,
): Promise<VideoRecord | "too_old"> => {
  const { id, title } = entry;
  const previous = store.get()[id];
  const outcome = await fetchVideo(id, ctx);
  if (outcome.status === "too_old") return "too_old";

  const now = new Date().toISOString();
  const attempts = (previous?.attempts ?? 0) + outcome.attempts;
  const markFailed = async (error: string, blocked: boolean): Promise<VideoRecord> => {
    await store.set(id, {
      status: "failed",
      captionKind: previous?.captionKind ?? null,
      captionTrack: previous?.captionTrack ?? null,
      mdPath: previous?.mdPath ?? null,
      error,
      attempts,
      fetchedAt: previous?.fetchedAt ?? null,
      updatedAt: now,
    });
    return { id, title, status: "failed", durationS: 0, error, blocked };
  };
  if (outcome.status === "failed") {
    return markFailed(outcome.error, outcome.kind !== null && RETRYABLE.has(outcome.kind));
  }

  const source = { captionKind: outcome.track?.kind ?? "none", captionTrack: outcome.track?.key ?? null, fetchedAt: now } as const;
  const md = await writeVideoMarkdown(ctx.paths, id, source);
  if (!md.ok) return markFailed(md.error, false);

  await store.set(id, { status: outcome.status, ...source, mdPath: md.value, error: null, attempts, updatedAt: now });
  return {
    id,
    title: outcome.info.title,
    status: outcome.status,
    durationS: outcome.info.duration ?? 0,
    error: null,
    blocked: false,
  };
};

const processTab = async (
  tab: ChannelTab,
  opts: FetchOptions,
  paths: ChannelPaths,
  store: ManifestStore,
  pace: Pacer,
): Promise<Result<VideoRecord[], string>> => {
  const listing = await listTab(opts.channel, tab, opts.limit, opts.ytdlp);
  if (!listing.ok) return err(`cannot list ${opts.channel.url}/${tab}: ${listing.error.message}`);
  if (listing.value.raw !== "") await writeFileAtomic(paths.listing(tab), listing.value.raw);

  const entries = listing.value.entries;
  console.log(`${tab}: ${entries.length} entries`);
  const ctx: VideoContext = { paths, ytdlp: opts.ytdlp, lang: opts.lang, since: opts.since };
  const limit = pLimit(opts.concurrency);
  // Entries are newest first, so the first video older than --since ends the tab.
  // A block ends it too: more requests would only extend the block.
  let stopped = false;

  const results = await Promise.all(
    entries.map((entry, index) =>
      limit(async (): Promise<VideoRecord | null> => {
        if (stopped) return null;
        if (!opts.force && isDone(store.get()[entry.id])) {
          return { id: entry.id, title: entry.title, status: "skipped", durationS: 0, error: null, blocked: false };
        }
        await pace();
        if (stopped) return null;
        const record = await processVideo(entry, ctx, store);
        if (record === "too_old" || record.blocked) stopped = true;
        if (record === "too_old") return null;
        console.log(`[${tab} ${index + 1}/${entries.length}] ${record.status} ${record.id} ${record.title}`);
        return record;
      }),
    ),
  );
  return ok(results.filter((record) => record !== null));
};

export const runFetch = async (opts: FetchOptions): Promise<Result<RunSummary, string>> => {
  const paths = channelPaths(opts.outDir, opts.channel.slug);
  const manifest = await loadManifest(paths.manifest);
  if (!manifest.ok) return manifest;
  const store = createManifestStore(paths.manifest, manifest.value);
  const pace = createPacer(opts.paceMs);

  const tabs: ChannelTab[] = opts.includeStreams ? ["videos", "streams"] : ["videos"];
  const records: VideoRecord[] = [];
  for (const tab of tabs) {
    const result = await processTab(tab, opts, paths, store, pace);
    if (!result.ok) return result;
    records.push(...result.value);
    if (result.value.some((record) => record.blocked)) break;
  }
  return ok(summarize(records));
};
