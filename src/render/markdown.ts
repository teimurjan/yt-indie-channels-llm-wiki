import type { Info, Segment, Track } from "../types.ts";
import { formatTimestamp, isoDate, watchUrl } from "./format.ts";
import { groupSections, type Chapter, type Section } from "./paragraphs.ts";

export type RenderMeta = { fetchedAt: string; track: Track | null };

type Scalar = string | number | null;

// JSON strings are valid YAML double-quoted scalars, except that YAML also forbids DEL, C1 controls and BOM.
const yamlScalar = (value: Scalar): string =>
  typeof value === "string"
    ? JSON.stringify(value).replace(
        /[\u007f-\u009f﻿]/g,
        (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`,
      )
    : String(value);

const yamlList = (key: string, items: readonly string[]): string =>
  items.length === 0 ? `${key}: []` : [`${key}:`, ...items].join("\n");

const toChapters = (info: Info): Chapter[] =>
  (info.chapters ?? []).map((chapter) => ({
    title: chapter.title,
    startMs: Math.floor(chapter.start_time) * 1000,
  }));

const frontmatter = (info: Info, chapters: readonly Chapter[], meta: RenderMeta): string => {
  const fields: ReadonlyArray<[string, Scalar]> = [
    ["video_id", info.id],
    ["url", watchUrl(info.id)],
    ["title", info.title],
    ["channel", info.channel ?? null],
    ["channel_id", info.channel_id ?? null],
    ["channel_handle", info.uploader_id ?? null],
    ["published_at", isoDate(info.upload_date)],
    ["duration_s", info.duration ?? null],
    ["view_count", info.view_count ?? null],
    ["like_count", info.like_count ?? null],
    ["caption_kind", meta.track?.kind ?? "none"],
    ["caption_lang", meta.track?.lang ?? null],
  ];
  const chapterItems = chapters.map(
    (chapter) => `  - title: ${yamlScalar(chapter.title)}\n    start_s: ${chapter.startMs / 1000}`,
  );
  const tagItems = (info.tags ?? []).map((tag) => `  - ${yamlScalar(tag)}`);
  return [
    "---",
    ...fields.map(([key, value]) => `${key}: ${yamlScalar(value)}`),
    yamlList("chapters", chapterItems),
    yamlList("tags", tagItems),
    `fetched_at: ${yamlScalar(meta.fetchedAt)}`,
    `yt_dlp_version: ${yamlScalar(info._version?.version ?? null)}`,
    "---",
  ].join("\n");
};

const ONE_HOUR_S = 3600;

const renderSection = (section: Section, videoId: string, withHours: boolean): string[] => [
  ...(section.title === null ? [] : [`### ${section.title}`]),
  ...section.paragraphs.map((paragraph) => {
    const seconds = Math.floor(paragraph.startMs / 1000);
    const link = `[${formatTimestamp(paragraph.startMs, withHours)}](${watchUrl(videoId)}&t=${seconds}s)`;
    return `${link} ${paragraph.text}`;
  }),
];

const transcript = (info: Info, segments: readonly Segment[], chapters: readonly Chapter[]): string[] => {
  const lastEndMs = segments.reduce((max, segment) => Math.max(max, segment.startMs + segment.durMs), 0);
  const withHours = (info.duration ?? lastEndMs / 1000) >= ONE_HOUR_S;
  return groupSections(segments, chapters).flatMap((section) => renderSection(section, info.id, withHours));
};

/** Pure: the same info, segments and meta always give the same bytes. */
export const renderMarkdown = (info: Info, segments: readonly Segment[], meta: RenderMeta): string => {
  const chapters = toChapters(info);
  const description = (info.description ?? "").trimEnd();
  const blocks = [
    frontmatter(info, chapters, meta),
    `# ${info.title}`,
    "## Description",
    ...(description === "" ? [] : [description]),
    ...(meta.track === null ? [] : ["## Transcript", ...transcript(info, segments, chapters)]),
  ];
  return `${blocks.join("\n\n")}\n`;
};
