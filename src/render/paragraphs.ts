import type { Segment } from "../types.ts";

export type Chapter = { title: string; startMs: number };
export type Paragraph = { startMs: number; text: string };
export type Section = { title: string | null; paragraphs: Paragraph[] };
export type ParagraphLimits = { minMs: number; maxMs: number };

const DEFAULT_LIMITS: ParagraphLimits = { minMs: 45_000, maxMs: 60_000 };

const SENTENCE_END = /[.!?…]["'”’)\]]*$/u;

const toParagraph = (segments: readonly Segment[]): Paragraph => ({
  startMs: segments[0]!.startMs,
  text: segments.map((segment) => segment.text).join(" "),
});

/** Breaks at every speaker change, at a sentence end once a paragraph spans minMs, and before it passes maxMs. */
export const toParagraphs = (
  segments: readonly Segment[],
  limits: ParagraphLimits = DEFAULT_LIMITS,
): Paragraph[] => {
  const paragraphs: Paragraph[] = [];
  let current: Segment[] = [];
  for (const segment of segments) {
    const startMs = current[0]?.startMs;
    if (startMs !== undefined && (segment.speakerChange || segment.startMs - startMs >= limits.maxMs)) {
      paragraphs.push(toParagraph(current));
      current = [];
    }
    current.push(segment);
    const spanMs = segment.startMs + segment.durMs - current[0]!.startMs;
    if (spanMs >= limits.minMs && SENTENCE_END.test(segment.text)) {
      paragraphs.push(toParagraph(current));
      current = [];
    }
  }
  return current.length > 0 ? [...paragraphs, toParagraph(current)] : paragraphs;
};

/** One section per chapter (a segment belongs to the chapter it starts in), or one untitled section. */
export const groupSections = (
  segments: readonly Segment[],
  chapters: readonly Chapter[],
  limits: ParagraphLimits = DEFAULT_LIMITS,
): Section[] => {
  if (chapters.length === 0) return [{ title: null, paragraphs: toParagraphs(segments, limits) }];

  const sorted = chapters.toSorted((a, b) => a.startMs - b.startMs);
  const indexes = segments.map((segment) =>
    sorted.findLastIndex((chapter) => chapter.startMs <= segment.startMs),
  );
  const inChapter = (index: number) => segments.filter((_, i) => indexes[i] === index);
  const beforeFirst = inChapter(-1);
  const sections = sorted.map((chapter, index) => ({
    title: chapter.title,
    paragraphs: toParagraphs(inChapter(index), limits),
  }));
  return beforeFirst.length > 0
    ? [{ title: null, paragraphs: toParagraphs(beforeFirst, limits) }, ...sections]
    : sections;
};
