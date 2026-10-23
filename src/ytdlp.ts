import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { err, ok, type Result } from "./types.ts";

export type YtDlpErrorKind =
  | "not_installed"
  | "rate_limited"
  | "bot_check"
  | "unavailable"
  | "failed";

export type YtDlpError = { kind: YtDlpErrorKind; message: string };

export type YtDlpOptions = {
  jsRuntime: string;
  cookiesFromBrowser?: string | undefined;
};

const ERROR_PATTERNS: ReadonlyArray<[YtDlpErrorKind, RegExp]> = [
  ["rate_limited", /HTTP Error 429|Too Many Requests|rate-limited/i],
  ["bot_check", /Sign in to confirm you.?re not a bot/i],
  [
    "unavailable",
    /Video unavailable|Private video|members-only|has been removed|account associated with this video has been terminated|Sign in to confirm your age|Premieres in|live event will begin/i,
  ],
];

export const classifyError = (stderr: string): YtDlpErrorKind =>
  ERROR_PATTERNS.find(([, pattern]) => pattern.test(stderr))?.[0] ?? "failed";

const lastErrorLine = (lines: readonly string[]): string | undefined =>
  lines.findLast((line) => line.startsWith("ERROR:")) ?? lines.at(-1);

export const commonArgs = (options: YtDlpOptions): string[] => [
  "--quiet",
  "--no-progress",
  "--js-runtimes",
  options.jsRuntime,
  ...(options.cookiesFromBrowser
    ? ["--cookies-from-browser", options.cookiesFromBrowser]
    : []),
];

/** Runs yt-dlp with an args array (never a shell) and forwards its stderr line by line. */
export const runYtDlp = (
  args: readonly string[],
  label: string,
): Promise<Result<string, YtDlpError>> =>
  new Promise((resolve) => {
    const child = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
    const stdout: Buffer[] = [];
    const stderrLines: string[] = [];

    child.stdout.on("data", (chunk: Buffer) => stdout.push(chunk));
    createInterface({ input: child.stderr }).on("line", (line) => {
      stderrLines.push(line);
      process.stderr.write(`[yt-dlp ${label}] ${line}\n`);
    });

    child.on("error", (error: NodeJS.ErrnoException) =>
      resolve(
        err({
          kind: error.code === "ENOENT" ? "not_installed" : "failed",
          message: error.message,
        }),
      ),
    );
    child.on("close", (code, signal) => {
      if (code === 0) return resolve(ok(Buffer.concat(stdout).toString("utf8")));
      const stderr = stderrLines.join("\n");
      resolve(
        err({
          kind: classifyError(stderr),
          message:
            lastErrorLine(stderrLines) ?? `yt-dlp exited with ${signal ?? code}`,
        }),
      );
    });
  });
