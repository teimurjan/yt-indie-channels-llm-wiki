import { Command, InvalidArgumentError } from "commander";
import { normalizeChannel, type Channel } from "./channel.ts";
import { runFetch, type RunSummary } from "./fetch.ts";
import { createManifestStore, loadManifest } from "./manifest.ts";
import { channelPaths } from "./paths.ts";
import { preflight } from "./preflight.ts";
import { renderAll } from "./render/write.ts";

const DEFAULT_JS_RUNTIME = "node";
// YouTube allows a guest session about 300 videos per hour; 15 s keeps a run near 240.
const DEFAULT_PACE_S = 15;

const positiveInt = (value: string): number => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) throw new InvalidArgumentError("expected a positive integer");
  return parsed;
};

const nonNegativeNumber = (value: string): number => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) throw new InvalidArgumentError("expected a number of seconds");
  return parsed;
};

const isoDay = (value: string): string => {
  const date = new Date(`${value}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new InvalidArgumentError("expected YYYY-MM-DD");
  }
  return value.replaceAll("-", "");
};

// A function declaration, so TypeScript narrows after calls that never return.
function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const resolveChannel = (input: string): Channel => {
  const channel = normalizeChannel(input);
  return channel.ok ? channel.value : fail(channel.error);
};

const runPreflight = async (): Promise<void> => {
  const result = await preflight();
  if (!result.ok) fail(result.error);
};

const printSummary = ({ counts, hours, failures, blocked }: RunSummary): void => {
  console.log(
    `\nok: ${counts.ok}, no_captions: ${counts.no_captions}, failed: ${counts.failed}, skipped: ${counts.skipped}`,
  );
  console.log(`video processed: ${hours.toFixed(2)} h`);
  if (failures.length > 0) {
    console.log("failures:");
    for (const failure of failures) console.log(`  ${failure.id} ${failure.title}: ${failure.error}`);
  }
  if (blocked) {
    console.log(
      "\nstopped early: YouTube is rate limiting or bot-checking this IP address. " +
        "Wait about an hour, then run the same command again. It continues where it stopped. " +
        "If the block comes back, add --cookies-from-browser or a larger --pace.",
    );
  }
};

type FetchFlags = {
  limit?: number;
  since?: string;
  lang: string;
  includeStreams?: boolean;
  concurrency: number;
  pace: number;
  force?: boolean;
  cookiesFromBrowser?: string;
  jsRuntime?: string;
  out: string;
};

const program = new Command()
  .name("yt")
  .description("Download YouTube channel metadata and captions with yt-dlp, and write one Markdown file per video.");

program
  .command("fetch")
  .description("fetch metadata and captions, then render Markdown")
  .argument("<channel>", "@handle or channel URL")
  .option("--limit <n>", "only the newest N videos of each tab", positiveInt)
  .option("--since <YYYY-MM-DD>", "stop at the first video uploaded before this date", isoDay)
  .option("--lang <code>", "language for manual subtitles", "en")
  .option("--include-streams", "also fetch the /streams tab")
  .option("--concurrency <n>", "videos fetched in parallel", positiveInt, 2)
  .option("--pace <seconds>", "minimum seconds between two video starts, across all workers", nonNegativeNumber, DEFAULT_PACE_S)
  .option("--force", "refetch videos that are already done")
  .option("--cookies-from-browser <browser>", "pass browser cookies to yt-dlp")
  .option("--js-runtime <runtime>", `JS runtime for yt-dlp (env YT_JS_RUNTIME, default ${DEFAULT_JS_RUNTIME})`)
  .option("--out <dir>", "output directory", "data")
  .action(async (input: string, flags: FetchFlags) => {
    const channel = resolveChannel(input);
    await runPreflight();
    const result = await runFetch({
      channel,
      outDir: flags.out,
      limit: flags.limit,
      since: flags.since ?? null,
      lang: flags.lang,
      includeStreams: flags.includeStreams ?? false,
      concurrency: flags.concurrency,
      paceMs: flags.pace * 1000,
      force: flags.force ?? false,
      ytdlp: {
        jsRuntime: flags.jsRuntime ?? process.env.YT_JS_RUNTIME ?? DEFAULT_JS_RUNTIME,
        cookiesFromBrowser: flags.cookiesFromBrowser,
      },
    });
    if (!result.ok) fail(result.error);
    printSummary(result.value);
    if (result.value.counts.failed > 0) process.exitCode = 1;
  });

program
  .command("render")
  .description("regenerate all Markdown from the raw cache, without network")
  .argument("<channel>", "@handle or channel URL")
  .option("--out <dir>", "output directory", "data")
  .action(async (input: string, flags: { out: string }) => {
    const channel = resolveChannel(input);
    await runPreflight();
    const paths = channelPaths(flags.out, channel.slug);
    const manifest = await loadManifest(paths.manifest);
    if (!manifest.ok) fail(manifest.error);
    const { rendered, failures } = await renderAll(paths, createManifestStore(paths.manifest, manifest.value));
    console.log(`rendered: ${rendered}, failed: ${failures.length}`);
    for (const failure of failures) console.log(`  ${failure.id}: ${failure.error}`);
    if (failures.length > 0) process.exitCode = 1;
  });

await program.parseAsync();
