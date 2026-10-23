import { describe, expect, it } from "vitest";
import { renderMarkdown } from "../src/render/markdown.ts";
import type { Segment, Track } from "../src/types.ts";
import { infoFixture } from "./fixtures.ts";

const track: Track = { kind: "auto", key: "en-orig", lang: "en" };
const meta = { fetchedAt: "2026-10-23T00:00:00.000Z", track };
const segments: Segment[] = [
  { startMs: 1_000, durMs: 2_000, text: "Hello there." },
  { startMs: 64_000, durMs: 2_000, text: "Second chapter." },
];

describe("renderMarkdown", () => {
  it("writes frontmatter, description and chapter headings with timestamp links", () => {
    const md = renderMarkdown(infoFixture(), segments, meta);
    expect(md.startsWith('---\nvideo_id: "RSlhgyAXsBI"\n')).toBe(true);
    expect(md).toContain('caption_kind: "auto"\ncaption_lang: "en"\n');
    expect(md).toContain('  - title: "What’s your story?"\n    start_s: 63\n');
    expect(md).toContain('fetched_at: "2026-10-23T00:00:00.000Z"\nyt_dlp_version: "2026.10.21"\n---');
    expect(md).toContain("### zero to $30K/month\n\n[0:01](https://www.youtube.com/watch?v=RSlhgyAXsBI&t=1s) Hello there.");
    expect(md).toContain("### What’s your story?\n\n[1:04](https://www.youtube.com/watch?v=RSlhgyAXsBI&t=64s) Second chapter.");
    expect(md.endsWith("\n")).toBe(true);
  });

  it("uses h:mm:ss links for videos of an hour or more", () => {
    const md = renderMarkdown({ ...infoFixture(), duration: 3_600, chapters: null }, segments, meta);
    expect(md).toContain("[0:01:04](https://www.youtube.com/watch?v=RSlhgyAXsBI&t=64s)");
  });

  it("renders no transcript and caption_kind none without captions", () => {
    const md = renderMarkdown(infoFixture(), [], { ...meta, track: null });
    expect(md).toContain('caption_kind: "none"\ncaption_lang: null\n');
    expect(md).not.toContain("## Transcript");
    expect(md).toContain("## Description\n\nCharlie bootstrapped");
  });

  it("is deterministic", () => {
    expect(renderMarkdown(infoFixture(), segments, meta)).toBe(renderMarkdown(infoFixture(), segments, meta));
  });
});
