import { describe, expect, it } from "vitest";
import { parseJson3 } from "../src/subs/json3.ts";
import type { Json3, Segment } from "../src/types.ts";
import { json3Fixture } from "./fixtures.ts";

const event = (tStartMs: number, dDurationMs: number, ...utf8: string[]) => ({
  tStartMs,
  dDurationMs,
  segs: utf8.map((text) => ({ utf8: text })),
});

const parse = (events: Json3["events"]): Segment[] => parseJson3({ events });

const expectWellFormed = (segments: readonly Segment[]) => {
  expect(segments.length).toBeGreaterThan(0);
  for (const [index, segment] of segments.entries()) {
    expect(segment.text).toBe(segment.text.trim());
    expect(segment.text).not.toBe("");
    expect(segment.text).not.toMatch(/\s{2}|\n|\[|>>/);
    if (index > 0) expect(segment.startMs).toBeGreaterThanOrEqual(segments[index - 1]!.startMs);
  }
};

describe("parseJson3 on real captions", () => {
  it("parses manual captions, joining wrapped lines and dropping non-speech", () => {
    const segments = parseJson3(json3Fixture("manual.json3"));
    expectWellFormed(segments);
    expect(segments.map((segment) => segment.text)).toEqual([
      "All right, so here we are, in front of the elephants",
      "the cool thing about these guys is that they have really...",
      "really really long trunks",
      "and that's cool",
      "and that's pretty much all there is to say",
    ]);
  });

  it("parses word-level auto captions without window or newline events", () => {
    const doc = json3Fixture("auto.json3");
    const segments = parseJson3(doc);
    expectWellFormed(segments);
    const withText = doc.events.filter((e) => e.segs?.some((seg) => (seg.utf8 ?? "").trim() !== ""));
    expect(segments.length).toBeLessThanOrEqual(withText.length);
    expect(segments[0]!.text).toBe("This is a project that I grew alongside");
  });

  it("does not repeat text across consecutive auto segments", () => {
    const segments = parseJson3(json3Fixture("auto.json3"));
    for (const [index, segment] of segments.slice(1).entries()) {
      const previousWords = segments[index]!.text.split(" ");
      const tail = previousWords.slice(-2).join(" ");
      expect(segment.text.startsWith(`${tail} `)).toBe(false);
    }
  });
});

describe("parseJson3 quirks", () => {
  it("skips events without segs and newline-only segs", () => {
    const segments = parse([
      { tStartMs: 0, dDurationMs: 9000 },
      event(0, 2000, "Hello"),
      { ...event(1500, 500, "\n"), aAppend: 1 },
      event(2000, 1000, "world"),
    ]);
    expect(segments.map((segment) => segment.text)).toEqual(["Hello", "world"]);
  });

  it("keeps only new words from rolling, overlapping events", () => {
    const segments = parse([
      event(0, 3000, "we went to"),
      event(1000, 3000, "we went to the shop"),
      event(2000, 3000, "to the shop and bought milk"),
      event(2500, 3000, "to the shop and bought milk"),
    ]);
    expect(segments.map((segment) => segment.text).join(" ")).toBe("we went to the shop and bought milk");
  });

  it("keeps a repeated phrase when the events do not overlap in time", () => {
    const segments = parse([event(0, 1000, "No no."), event(1000, 1000, "No no.")]);
    expect(segments).toHaveLength(2);
  });

  it("decodes entities, normalizes whitespace and drops pure non-speech tags", () => {
    const segments = parse([
      event(0, 1000, "[Music]"),
      event(1000, 1000, "Tom &amp; Jerry&#39;s   ", "&#x1F600;\n show"),
      event(2000, 1000, "[Applause] ♪"),
      event(3000, 1000, "(laughs)"),
      event(4000, 1000, ">> next [music] speaker"),
    ]);
    expect(segments.map((segment) => segment.text)).toEqual(["Tom & Jerry's 😀 show", "next speaker"]);
  });

  it("marks speaker changes, also in the middle of an event", () => {
    const segments = parse([event(0, 1000, ">> Hi there."), event(1000, 1000, "Hello. &gt;&gt; How are you?")]);
    expect(segments.map(({ text, speakerChange }) => [text, speakerChange])).toEqual([
      ["Hi there.", true],
      ["Hello.", false],
      ["How are you?", true],
    ]);
  });

  it("finds the speaker changes in real auto captions", () => {
    const segments = parseJson3(json3Fixture("auto.json3"));
    expect(segments.filter((segment) => segment.speakerChange).length).toBeGreaterThan(0);
    expect(segments[0]!.speakerChange).toBe(false);
  });

  it("sorts events by start time", () => {
    const segments = parse([event(5000, 1000, "second"), event(0, 1000, "first")]);
    expect(segments.map((segment) => segment.startMs)).toEqual([0, 5000]);
  });
});
