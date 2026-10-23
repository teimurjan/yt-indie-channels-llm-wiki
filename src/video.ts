import { existsSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";
import type { ChannelPaths } from "./paths.ts";
import { readJsonAs } from "./read-json.ts";
import { watchUrl } from "./render/format.ts";
import { selectTrack } from "./subs/select.ts";
import { Info, type Result, type Track } from "./types.ts";
import { commonArgs, runYtDlp, type YtDlpError, type YtDlpErrorKind, type YtDlpOptions } from "./ytdlp.ts";

export type VideoContext = {
  paths: ChannelPaths;
  ytdlp: YtDlpOptions;
  lang: string;
  /** YYYYMMDD; videos uploaded before it are reported as too_old. */
  since: string | null;
};

export type VideoOutcome =
  | { status: "ok" | "no_captions"; info: Info; track: Track | null; attempts: number }
  | { status: "too_old"; attempts: number }
  | { status: "failed"; error: string; attempts: number };

const RETRIES = 3;
const BASE_DELAY_MS = 15_000;
const SLEEP_REQUESTS_S = "1";
const SLEEP_SUBTITLES_S = "2";
const RETRYABLE: ReadonlySet<YtDlpErrorKind> = new Set(["rate_limited", "bot_check"]);

type Attempted = { result: Result<string, YtDlpError>; attempts: number };

const withRetry = async (label: string, run: () => Promise<Result<string, YtDlpError>>): Promise<Attempted> => {
  for (let attempt = 1; ; attempt++) {
    const result = await run();
    if (result.ok || !RETRYABLE.has(result.error.kind) || attempt > RETRIES) return { result, attempts: attempt };
    const delayMs = BASE_DELAY_MS * 2 ** (attempt - 1) + Math.floor(Math.random() * 1000);
    console.warn(`${label}: ${result.error.kind}, retry ${attempt}/${RETRIES} in ${Math.round(delayMs / 1000)}s`);
    await sleep(delayMs);
  }
};

const escapeRegex = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const failed = (error: string, attempts: number): VideoOutcome => ({ status: "failed", error, attempts });

/** Writes <id>.info.json, picks one caption track, then downloads only that track from the saved info. */
export const fetchVideo = async (id: string, ctx: VideoContext): Promise<VideoOutcome> => {
  const base = commonArgs(ctx.ytdlp);
  const template = ctx.paths.outputTemplate(id);

  const infoRun = await withRetry(id, () =>
    runYtDlp(
      [...base, "--sleep-requests", SLEEP_REQUESTS_S, "--skip-download", "--write-info-json", "-o", template, "--", watchUrl(id)],
      id,
    ),
  );
  if (!infoRun.result.ok) return failed(infoRun.result.error.message, infoRun.attempts);

  const info = await readJsonAs(ctx.paths.info(id), Info);
  if (!info.ok) return failed(info.error, infoRun.attempts);
  if (ctx.since && info.value.upload_date && info.value.upload_date < ctx.since) {
    return { status: "too_old", attempts: infoRun.attempts };
  }

  const track = selectTrack(info.value, ctx.lang);
  if (!track) return { status: "no_captions", info: info.value, track: null, attempts: infoRun.attempts };

  const subsRun = await withRetry(id, () =>
    runYtDlp(
      [
        ...base,
        "--sleep-subtitles",
        SLEEP_SUBTITLES_S,
        "--load-info-json",
        ctx.paths.info(id),
        "--skip-download",
        track.kind === "manual" ? "--write-subs" : "--write-auto-subs",
        "--sub-langs",
        escapeRegex(track.key),
        "--sub-format",
        "json3",
        "-o",
        template,
      ],
      id,
    ),
  );
  // One try of the video plus every retry of either call.
  const attempts = infoRun.attempts + subsRun.attempts - 1;
  if (!subsRun.result.ok) return failed(subsRun.result.error.message, attempts);
  if (!existsSync(ctx.paths.subs(id, track.key))) {
    return failed(`yt-dlp did not write the ${track.key} captions`, attempts);
  }
  return { status: "ok", info: info.value, track, attempts };
};
