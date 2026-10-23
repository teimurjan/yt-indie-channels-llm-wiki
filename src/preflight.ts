import { runYtDlp } from "./ytdlp.ts";
import { err, ok, type Result } from "./types.ts";

const STALE_AFTER_DAYS = 60;
const DAY_MS = 86_400_000;

const INSTALL_HELP = `yt-dlp is not on your PATH. Install it with one of:
  uv tool install "yt-dlp[default]"
  brew install yt-dlp
  or download a standalone binary: https://github.com/yt-dlp/yt-dlp/releases/latest
YouTube also needs a JavaScript runtime. Node 22+ works (this tool passes --js-runtimes node).`;

/** yt-dlp versions are release dates: 2026.10.21, optionally with a nightly suffix. */
export const versionDate = (version: string): Date | null => {
  const match = /^(\d{4})\.(\d{1,2})\.(\d{1,2})/.exec(version.trim());
  if (!match) return null;
  const [, year, month, day] = match.map(Number) as [number, number, number, number];
  return new Date(Date.UTC(year, month - 1, day));
};

export const isStale = (version: string, now: Date): boolean => {
  const released = versionDate(version);
  return released !== null && now.getTime() - released.getTime() > STALE_AFTER_DAYS * DAY_MS;
};

export const preflight = async (now = new Date()): Promise<Result<string, string>> => {
  const result = await runYtDlp(["--version"], "version");
  if (!result.ok) {
    return err(result.error.kind === "not_installed" ? INSTALL_HELP : result.error.message);
  }
  const version = result.value.trim();
  console.log(`yt-dlp ${version}`);
  if (isStale(version, now)) {
    console.warn(
      `warning: yt-dlp ${version} is more than ${STALE_AFTER_DAYS} days old. YouTube changes often. ` +
        "Run `yt-dlp -U`, or upgrade with the tool you installed it with (`uv tool upgrade yt-dlp`, `brew upgrade yt-dlp`).",
    );
  }
  return ok(version);
};
