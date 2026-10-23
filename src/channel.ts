import type { ChannelTab } from "./paths.ts";
import { parseJsonAs } from "./read-json.ts";
import { ChannelListing, err, ok, VIDEO_ID, type Result } from "./types.ts";
import { commonArgs, runYtDlp, type YtDlpError, type YtDlpOptions } from "./ytdlp.ts";

export type Channel = { url: string; slug: string };

const ORIGIN = "https://www.youtube.com";
const YOUTUBE_HOST = /^(www\.|m\.)?youtube\.com$/i;
const HANDLE = /^[\p{L}\p{N}][\p{L}\p{N}._-]*$/u;
const CHANNEL_ID = /^UC[\w-]{22}$/;

const fromHandle = (handle: string): Result<Channel, string> =>
  HANDLE.test(handle)
    ? ok({ url: `${ORIGIN}/@${handle}`, slug: handle.toLowerCase() })
    : err(`invalid channel handle: @${handle}`);

const parseUrl = (input: string): URL | null => {
  try {
    return new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
  } catch {
    return null;
  }
};

const safeDecode = (segment: string): string => {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
};

/** Accepts @handle or a channel URL (/@handle, /channel/UC..., /c/..., /user/...), ignoring any tab suffix. */
export const normalizeChannel = (input: string): Result<Channel, string> => {
  const trimmed = input.trim();
  if (trimmed.startsWith("@")) return fromHandle(trimmed.slice(1));

  const url = parseUrl(trimmed);
  if (!url || !YOUTUBE_HOST.test(url.hostname)) return err(`not a YouTube channel: ${input}`);

  const [first, second] = url.pathname.split("/").filter(Boolean).map(safeDecode);
  if (first?.startsWith("@")) return fromHandle(first.slice(1));
  if (first === "channel" && second && CHANNEL_ID.test(second)) {
    return ok({ url: `${ORIGIN}/channel/${second}`, slug: second });
  }
  if ((first === "c" || first === "user") && second && HANDLE.test(second)) {
    return ok({ url: `${ORIGIN}/${first}/${second}`, slug: second.toLowerCase() });
  }
  return err(`not a YouTube channel: ${input}`);
};

export type TabListing = { raw: string; entries: { id: string; title: string }[] };

const NO_TAB = /does not have a \w+ tab/i;

export const listTab = async (
  channel: Channel,
  tab: ChannelTab,
  limit: number | undefined,
  options: YtDlpOptions,
): Promise<Result<TabListing, YtDlpError>> => {
  const args = [
    ...commonArgs(options),
    "--flat-playlist",
    "--dump-single-json",
    ...(limit ? ["--playlist-end", String(limit)] : []),
    "--",
    `${channel.url}/${tab}`,
  ];
  const result = await runYtDlp(args, `list ${tab}`);
  if (!result.ok) {
    return NO_TAB.test(result.error.message) ? ok({ raw: "", entries: [] }) : result;
  }

  const listing = parseJsonAs(result.value, ChannelListing, `the ${tab} listing`);
  if (!listing.ok) return err({ kind: "failed", message: listing.error });
  const entries = listing.value.entries
    .filter((entry) => VIDEO_ID.test(entry.id))
    .map((entry) => ({ id: entry.id, title: entry.title ?? "" }));
  return ok({ raw: result.value, entries });
};
