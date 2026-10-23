import { rm } from "node:fs/promises";
import { writeFileAtomic } from "../atomic-write.ts";
import type { ManifestStore } from "../manifest.ts";
import type { ChannelPaths } from "../paths.ts";
import { readJsonAs } from "../read-json.ts";
import { parseJson3 } from "../subs/json3.ts";
import { trackLang } from "../subs/select.ts";
import { Info, Json3, ok, type ManifestEntry, type Result, type Segment, type Track } from "../types.ts";
import { mdFileName } from "./format.ts";
import { renderMarkdown } from "./markdown.ts";

type Source = Pick<ManifestEntry, "captionKind" | "captionTrack"> & { fetchedAt: string };

const toTrack = ({ captionKind, captionTrack }: Source): Track | null =>
  captionTrack && (captionKind === "manual" || captionKind === "auto")
    ? { kind: captionKind, key: captionTrack, lang: trackLang(captionTrack) }
    : null;

const loadSegments = async (paths: ChannelPaths, id: string, track: Track | null): Promise<Result<Segment[], string>> => {
  if (!track) return ok([]);
  const doc = await readJsonAs(paths.subs(id, track.key), Json3);
  return doc.ok ? ok(parseJson3(doc.value)) : doc;
};

/** Renders one video from its raw files on disk. Returns the Markdown path relative to the channel root. */
export const writeVideoMarkdown = async (
  paths: ChannelPaths,
  id: string,
  source: Source,
): Promise<Result<string, string>> => {
  const info = await readJsonAs(paths.info(id), Info);
  if (!info.ok) return info;
  const track = toTrack(source);
  const segments = await loadSegments(paths, id, track);
  if (!segments.ok) return segments;

  const mdPath = `md/${mdFileName(info.value)}`;
  await writeFileAtomic(paths.md(mdPath), renderMarkdown(info.value, segments.value, { fetchedAt: source.fetchedAt, track }));
  return ok(mdPath);
};

export type RenderFailure = { id: string; error: string };

export const renderAll = async (
  paths: ChannelPaths,
  store: ManifestStore,
): Promise<{ rendered: number; failures: RenderFailure[] }> => {
  const failures: RenderFailure[] = [];
  let rendered = 0;
  for (const [id, entry] of Object.entries(store.get())) {
    if (entry.status === "failed" || entry.fetchedAt === null) continue;
    const result = await writeVideoMarkdown(paths, id, { ...entry, fetchedAt: entry.fetchedAt });
    if (!result.ok) {
      failures.push({ id, error: result.error });
      continue;
    }
    rendered++;
    if (entry.mdPath === result.value) continue;
    if (entry.mdPath) await rm(paths.md(entry.mdPath), { force: true });
    await store.set(id, { ...entry, mdPath: result.value, updatedAt: new Date().toISOString() });
  }
  return { rendered, failures };
};
