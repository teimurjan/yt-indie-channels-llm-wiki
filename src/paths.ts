import { join } from "node:path";

export type ChannelTab = "videos" | "streams";

export type ChannelPaths = ReturnType<typeof channelPaths>;

// yt-dlp treats % in -o as a template field, so literal % in the directory must be doubled.
const escapeTemplate = (path: string): string => path.replaceAll("%", "%%");

export const channelPaths = (outDir: string, slug: string) => {
  const root = join(outDir, slug);
  const rawDir = join(root, "raw");
  return {
    root,
    manifest: join(root, "manifest.json"),
    listing: (tab: ChannelTab) =>
      join(rawDir, tab === "videos" ? "channel.json" : "channel.streams.json"),
    outputTemplate: (id: string) => join(escapeTemplate(rawDir), id, "%(id)s.%(ext)s"),
    info: (id: string) => join(rawDir, id, `${id}.info.json`),
    subs: (id: string, trackKey: string) => join(rawDir, id, `${id}.${trackKey}.json3`),
    md: (relativePath: string) => join(root, relativePath),
  };
};
