import type { Json3, Segment } from "../types.ts";

const NAMED_ENTITIES: Readonly<Record<string, string>> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

const MAX_CODE_POINT = 0x10ffff;

export const decodeEntities = (text: string): string =>
  text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body: string) => {
    if (!body.startsWith("#")) return NAMED_ENTITIES[body.toLowerCase()] ?? entity;
    const codePoint = body[1]?.toLowerCase() === "x" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
    return codePoint <= MAX_CODE_POINT ? String.fromCodePoint(codePoint) : entity;
  });

// ">>" marks a speaker change; ASR puts tags like [music] between words.
export const cleanText = (raw: string): string =>
  decodeEntities(raw)
    .replace(/(^|\s)>>+/g, "$1")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");

const NON_SPEECH = /^(?:\s*(?:\[[^\]]*\]|\([^)]*\)|♪+))+\s*$/u;

export const isNonSpeech = (text: string): boolean => NON_SPEECH.test(text);

const words = (text: string): string[] => text.split(" ");

const MIN_WORD_OVERLAP = 2;

/** Number of words at the end of `previous` repeated at the start of `next`. */
const wordOverlap = (previous: string, next: string): number => {
  const prev = words(previous);
  const head = words(next);
  for (let size = Math.min(prev.length, head.length); size >= MIN_WORD_OVERLAP; size--) {
    if (prev.slice(-size).join(" ") === head.slice(0, size).join(" ")) return size;
  }
  return 0;
};

const end = (segment: Segment): number => segment.startMs + segment.durMs;

// Rolling captions repeat earlier text in a time-overlapping event; keep only the new words.
const newText = (previous: Segment, next: Segment): string | null => {
  if (next.text === previous.text) return null;
  if (next.text.startsWith(`${previous.text} `)) return next.text.slice(previous.text.length + 1);
  const overlap = wordOverlap(previous.text, next.text);
  return overlap > 0 ? words(next.text).slice(overlap).join(" ") : next.text;
};

const toCue = (event: Json3["events"][number]): Segment | null => {
  if (!event.segs) return null;
  const text = cleanText(event.segs.map((seg) => seg.utf8 ?? "").join(""));
  if (text === "" || isNonSpeech(text)) return null;
  return {
    startMs: event.tStartMs ?? 0,
    durMs: Math.max(0, event.dDurationMs ?? 0),
    text,
  };
};

export const parseJson3 = (doc: Json3): Segment[] => {
  const cues = doc.events
    .map(toCue)
    .filter((cue): cue is Segment => cue !== null)
    .toSorted((a, b) => a.startMs - b.startMs);

  const segments: Segment[] = [];
  // Compare with the previous cue as displayed, not with its deduplicated segment.
  let previousCue: Segment | undefined;
  for (const cue of cues) {
    const text = previousCue && cue.startMs < end(previousCue) ? newText(previousCue, cue) : cue.text;
    const last = segments.at(-1);
    if (text === null && last) {
      segments[segments.length - 1] = { ...last, durMs: Math.max(end(last), end(cue)) - last.startMs };
    } else if (text) {
      segments.push({ ...cue, text });
    }
    previousCue = cue;
  }
  return segments;
};
