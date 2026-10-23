# yt-captions

This command-line tool uses [yt-dlp](https://github.com/yt-dlp/yt-dlp) to download the metadata and captions of all videos on a YouTube channel. It writes one Markdown file per video. It keeps the raw yt-dlp files on disk, so you can change the Markdown format later and render again without network access.

The tool does not use the YouTube Data API or a paid transcript service.

## Install

You need Node.js 22.12 or later, pnpm, and yt-dlp.

1. Install yt-dlp with its default extras. The extras include `yt-dlp-ejs`, the solver for YouTube's JavaScript challenges.

   ```sh
   uv tool install "yt-dlp[default]"
   ```

   Other options: download a standalone binary from the [releases page](https://github.com/yt-dlp/yt-dlp/releases/latest), which includes the solver. Or run `brew install yt-dlp`.

2. Install the project dependencies.

   ```sh
   pnpm install
   ```

YouTube needs a JavaScript runtime to solve its challenges. yt-dlp enables only Deno by default. This tool passes `--js-runtimes node` to every yt-dlp call, because Node is already installed. To use another runtime, give `--js-runtime deno` or set `YT_JS_RUNTIME=deno`. The flag wins over the environment variable.

If yt-dlp prints a warning about a missing impersonate target, install the `curl-cffi` extra: `uv tool install --force "yt-dlp[default,curl-cffi]"`.

## Usage

```sh
pnpm yt fetch <channel> [--limit N] [--since YYYY-MM-DD] [--lang en] [--include-streams]
                        [--concurrency 2] [--pace 15] [--force] [--cookies-from-browser <browser>]
                        [--js-runtime node] [--out data]
pnpm yt render <channel> [--out data]
```

`<channel>` is `@handle` or a channel URL: `/@handle`, `/channel/UC...`, `/c/name` or `/user/name`. The tool ignores a tab suffix such as `/videos` or `/shorts`.

`fetch` lists the `/videos` tab and processes each video. Shorts are not included. With `--include-streams`, it also processes the `/streams` tab after the videos.

| Option | Effect |
| --- | --- |
| `--limit N` | Process only the newest N entries of each tab. |
| `--since YYYY-MM-DD` | Stop a tab at the first video uploaded before this date. The listing has no dates, so the tool reads the date from each video's metadata. |
| `--lang en` | Language for manual subtitles. |
| `--concurrency 2` | Number of videos processed at the same time. |
| `--pace 15` | Minimum number of seconds between the starts of two videos, for all workers together. |
| `--force` | Fetch videos again that are already done. |
| `--cookies-from-browser chrome` | Pass your browser cookies to yt-dlp. |
| `--out data` | Output directory. |

`render` writes all Markdown files again from the raw files and the manifest. It makes no network requests. With the same raw files, it gives byte-identical output.

Before each command, the tool runs `yt-dlp --version` and prints the version. If yt-dlp is missing, the tool prints install instructions and stops. If the version is more than 60 days old, the tool prints a warning. The tool forwards all yt-dlp warnings and errors to stderr with a `[yt-dlp <video id>]` prefix.

At the end of `fetch`, the tool prints a summary. The summary shows the count of each status and the hours of video in this run. It also lists each failure with its reason. If a video failed, the exit code is 1.

### Run it again safely

The tool updates `manifest.json` after each video, with an atomic write (a temporary file, then a rename). You can stop a run with Ctrl+C at any time. On the next run, the tool skips videos with the status `ok` or `no_captions` and tries the `failed` videos again. Use `--force` to fetch all videos again, for example to get captions that YouTube added after the first run.

## How each video is fetched

1. yt-dlp writes `<id>.info.json` without captions.
2. The tool selects one caption track from the track lists in that file.
3. yt-dlp downloads only that track as json3, with `--load-info-json`. This step reuses the saved metadata, so it makes no second page request.

### Rate limits

YouTube limits a guest session to about 300 videos per hour for each IP address. The [yt-dlp wiki](https://github.com/yt-dlp/yt-dlp/wiki/Extractors) gives this number. More workers do not raise this limit. So the tool starts at most one video every `--pace` seconds. The default of 15 seconds gives about 240 videos per hour. Two workers let one video download while the next one waits for its start time.

The tool also sleeps between requests (`--sleep-requests 1`, `--sleep-subtitles 2`). If yt-dlp reports HTTP 429 or a bot check, the tool tries again up to 3 times. The waits are about 15, 30 and 60 seconds. If YouTube still blocks the video, the tool marks it `failed` and stops the run. More requests during a block only make the block longer. Wait about an hour, then run the same command again.

### Caption choice

The tool selects the first track that matches, in this order:

1. A manual subtitle track in `--lang`, in any regional variant (`en`, `en-US`, `en-GB`). An exact match comes first.
2. The automatic caption track in the spoken language of the video. yt-dlp lists this track as `<lang>-orig`. The tool reads the spoken language from the `language` field of info.json.
3. No captions. The video gets the status `no_captions`.

The tool never uses a machine-translated track. yt-dlp marks a translated track with `tlang=` in its URL, and the tool rejects every track key that has a translated json3 entry. This rule is necessary because YouTube auto-dubs some channels. On a Starter Story video, the automatic caption list has 177 keys. The plain `en` key holds one original entry and twenty translations from the dubbed audio tracks. The `ar-orig`, `es-orig` and other `-orig` keys are speech recognition of the dubbed audio. Only `en-orig` is the original speech.

If the `language` field is empty and only one `-orig` track exists, the tool uses that track. If the field is empty and there are several `-orig` tracks, the tool cannot know the spoken language and records `no_captions`.

The manifest records the track key in `captionTrack`. It records the track type, `manual` or `auto`, in `captionKind`.

### Caption cleanup

The json3 parser turns caption events into segments of `{ startMs, durMs, text, speakerChange }`:

- It skips events without text, such as window definitions and newline-only events.
- It joins word-level pieces of automatic captions into one line per event.
- If an event overlaps the previous event in time and repeats its text, it keeps only the new words.
- It splits an event at each `>>` mark. YouTube puts this mark where a different person starts to speak, and the tool sets `speakerChange` on that segment.
- It decodes HTML entities, removes `[music]`-style tags, and collapses whitespace.
- It drops segments that contain only non-speech tags, such as `[Music]`, `(laughs)` or `♪`.

## Output

```
data/<channel-slug>/
  manifest.json
  raw/channel.json                     yt-dlp listing of /videos
  raw/channel.streams.json             yt-dlp listing of /streams (with --include-streams)
  raw/<videoId>/<videoId>.info.json
  raw/<videoId>/<videoId>.<track>.json3
  md/<YYYY-MM-DD>_<videoId>_<title-slug>.md
```

The channel slug comes from the input alone, so `render` does not need the network. `@StarterStory` gives `starterstory`, and `/channel/UC...` gives the channel ID. Two input forms of one channel give two different folders.

The raw files contain caption URLs with your IP address. Do not publish the `data/` folder.

### Markdown format

Each file starts with YAML frontmatter:

```yaml
---
video_id: "RSlhgyAXsBI"
url: "https://www.youtube.com/watch?v=RSlhgyAXsBI"
title: "How I Built It: $30K/Month Micro-SaaS"
channel: "Starter Story"
channel_id: "UChhw6DlKKTQ9mYSpTfXUYqA"
channel_handle: "@starterstory"
published_at: "2026-10-21"
duration_s: 958
view_count: 50665
like_count: 711
caption_kind: "auto"          # manual | auto | none
caption_lang: "en"
chapters:
  - title: "zero to $30K/month"
    start_s: 0
tags: []
fetched_at: "2026-10-23T05:45:31.037Z"   # from the manifest
yt_dlp_version: "2026.10.21"             # from info.json
---
```

The body has these parts:

- `# <title>`
- `## Description`, with the description as YouTube gives it.
- `## Transcript`. Videos without captions do not have this part. A `### <chapter title>` heading starts each chapter. A paragraph contains the words of one speaker. A speaker change and a chapter boundary always start a new paragraph. A long turn is split into paragraphs of about 45 to 60 seconds. Such a paragraph ends at the first sentence end after 45 seconds. If no sentence ends, it ends before 60 seconds. Each paragraph starts with a timestamp link, such as `[12:34](https://www.youtube.com/watch?v=<id>&t=754s)`. For videos of one hour or longer, the timestamp format is `h:mm:ss`.

A segment belongs to the chapter in which it starts. Chapter times come from the creator, so a chapter can start in the middle of a sentence.

The renderer is a pure function in `src/render/markdown.ts`. To change the format, edit that file and run `pnpm yt render <channel>`.

## Known failure modes

- HTTP 429 (Too Many Requests): YouTube limits the request rate. The tool tries again 3 times and then marks the video `failed`. Run `fetch` again later, and the tool retries only the failed videos. If 429 errors continue, use `--concurrency 1`.
- "Sign in to confirm you’re not a bot": YouTube blocks requests that look automated. Give `--cookies-from-browser <browser>` (for example `chrome`, `firefox` or `safari`) to use the session of a browser where you are signed in to YouTube. Use an account that you can afford to lose, because YouTube can flag accounts that make many automated requests.
- Outdated yt-dlp: YouTube changes often, and an old yt-dlp fails to extract videos or captions. If the tool warns that yt-dlp is more than 60 days old, update it. Run `yt-dlp -U` for a standalone binary, `uv tool upgrade yt-dlp` for a uv install, or `brew upgrade yt-dlp` for Homebrew.
- Blocked datacenter IP addresses: YouTube blocks or challenges most cloud and VPN IP ranges. Run the tool on your own computer on a home network, not on a cloud server.
- Missing JavaScript runtime: yt-dlp reports that it cannot solve a challenge. Make sure that Node 22 or later is on your PATH. You can also choose another runtime with `--js-runtime`.

## Development

```sh
pnpm typecheck
pnpm test
```

The tests use no network. The fixtures in `test/fixtures` are trimmed real yt-dlp outputs: a manual json3 track, an automatic json3 track, and an info.json of an auto-dubbed video.
