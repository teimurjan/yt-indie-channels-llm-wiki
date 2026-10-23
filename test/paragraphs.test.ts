import { describe, expect, it } from "vitest";
import { groupSections, toParagraphs } from "../src/render/paragraphs.ts";
import type { Segment } from "../src/types.ts";

/** One segment every 5 s; every `sentenceEvery`-th segment ends a sentence. */
const speech = (count: number, sentenceEvery: number, startMs = 0): Segment[] =>
  Array.from({ length: count }, (_, i) => ({
    startMs: startMs + i * 5000,
    durMs: 5000,
    text: (i + 1) % sentenceEvery === 0 ? `s${i}.` : `s${i}`,
    speakerChange: false,
  }));

describe("toParagraphs", () => {
  it("breaks at the first sentence end after 45 s", () => {
    const paragraphs = toParagraphs(speech(24, 2));
    expect(paragraphs.map((p) => p.startMs)).toEqual([0, 50_000, 100_000]);
    expect(paragraphs[0]!.text.endsWith("s9.")).toBe(true);
  });

  it("forces a break at 60 s when no sentence ends", () => {
    const paragraphs = toParagraphs(speech(30, 1000));
    expect(paragraphs.map((p) => p.startMs)).toEqual([0, 60_000, 120_000]);
  });

  it("always breaks at a speaker change", () => {
    const segments = speech(4, 1000).map((segment, i) => ({ ...segment, speakerChange: i === 2 }));
    expect(toParagraphs(segments).map((p) => p.text)).toEqual(["s0 s1", "s2 s3"]);
  });

  it("joins segment text with single spaces", () => {
    expect(toParagraphs(speech(3, 1000))[0]!.text).toBe("s0 s1 s2");
  });

  it("returns no paragraphs for no segments", () => {
    expect(toParagraphs([])).toEqual([]);
  });
});

describe("groupSections", () => {
  it("returns one untitled section without chapters", () => {
    const sections = groupSections(speech(4, 1000), []);
    expect(sections).toHaveLength(1);
    expect(sections[0]!.title).toBeNull();
  });

  it("always breaks at chapter boundaries, by segment start", () => {
    const sections = groupSections(speech(6, 1000), [
      { title: "Intro", startMs: 0 },
      { title: "Main", startMs: 12_000 },
    ]);
    expect(sections.map((s) => s.title)).toEqual(["Intro", "Main"]);
    expect(sections[0]!.paragraphs.map((p) => p.text)).toEqual(["s0 s1 s2"]);
    expect(sections[1]!.paragraphs.map((p) => p.startMs)).toEqual([15_000]);
  });

  it("puts speech before the first chapter in an untitled section", () => {
    const sections = groupSections(speech(4, 1000), [{ title: "Late", startMs: 10_000 }]);
    expect(sections.map((s) => s.title)).toEqual([null, "Late"]);
  });

  it("keeps chapters in time order even when given out of order", () => {
    const sections = groupSections(speech(4, 1000), [
      { title: "B", startMs: 10_000 },
      { title: "A", startMs: 0 },
    ]);
    expect(sections.map((s) => s.title)).toEqual(["A", "B"]);
  });
});
