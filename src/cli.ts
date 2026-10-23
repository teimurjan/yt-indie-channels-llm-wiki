import { Command, InvalidArgumentError } from "commander";
import { normalizeChannel, type Channel } from "./channel.ts";
import { runFetch, type RunSummary } from "./fetch.ts";
import { createManifestStore, loadManifest } from "./manifest.ts";
import { channelPaths } from "./paths.ts";
import { preflight } from "./preflight.ts";
import { renderAll } from "./render/write.ts";

const DEFAULT_JS_RUNTIME = "node";

const positiveInt = (value: string): number => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) throw new InvalidArgumentError("expected a positive integer");
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

const printSummary = ({ counts, hours, failures }: RunSummary): void => {
  console.log(
    `\nok: ${counts.ok}, no_captions: ${counts.no_captions}, failed: ${counts.failed}, skipped: ${counts.skipped}`,
  );
  console.log(`video processed: ${hours.toFixed(2)} h`);
  if (failures.length === 0) return;
  console.log("failures:");
  for (const failure of failures) console.log(`  ${failure.id} ${failure.title}: ${failure.error}`);
};

type FetchFlags = {
  limit?: number;
  since?: string;
  lang: string;
  includeStreams?: boolean;
  concurrency: number;
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
