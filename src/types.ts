import { z } from "zod";

export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

export const ok = <T>(value: T): Result<T, never> => ({ ok: true, value });
export const err = <E>(error: E): Result<never, E> => ({ ok: false, error });

export const VIDEO_ID = /^[\w-]{11}$/;

const SubtitleFormat = z.looseObject({
  ext: z.string(),
  url: z.string(),
  name: z.string().optional(),
});

const SubtitleMap = z.record(z.string(), z.array(SubtitleFormat));

export type SubtitleMap = z.infer<typeof SubtitleMap>;

export const Info = z.looseObject({
  id: z.string().regex(VIDEO_ID),
  title: z.string(),
  description: z.string().nullish(),
  channel: z.string().nullish(),
  channel_id: z.string().nullish(),
  uploader_id: z.string().nullish(),
  upload_date: z.string().regex(/^\d{8}$/).nullish(),
  duration: z.number().nullish(),
  view_count: z.number().nullish(),
  like_count: z.number().nullish(),
  language: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  chapters: z
    .array(z.looseObject({ title: z.string(), start_time: z.number() }))
    .nullish(),
  subtitles: SubtitleMap.nullish(),
  automatic_captions: SubtitleMap.nullish(),
  _version: z.looseObject({ version: z.string() }).optional(),
});

export type Info = z.infer<typeof Info>;

export const ChannelListing = z.looseObject({
  entries: z
    .array(z.looseObject({ id: z.string(), title: z.string().nullish() }))
    .default([]),
});

export type ChannelListing = z.infer<typeof ChannelListing>;

export const Json3 = z.looseObject({
  events: z
    .array(
      z.looseObject({
        tStartMs: z.number().optional(),
        dDurationMs: z.number().optional(),
        segs: z.array(z.looseObject({ utf8: z.string().optional() })).optional(),
      }),
    )
    .default([]),
});

export type Json3 = z.infer<typeof Json3>;

export type Segment = { startMs: number; durMs: number; text: string };

export type CaptionKind = "manual" | "auto";

export type Track = { kind: CaptionKind; key: string; lang: string };

export const ManifestEntry = z.object({
  status: z.enum(["ok", "no_captions", "failed"]),
  captionKind: z.enum(["manual", "auto", "none"]).nullable(),
  captionTrack: z.string().nullable(),
  mdPath: z.string().nullable(),
  error: z.string().nullable(),
  attempts: z.number().int(),
  fetchedAt: z.string().nullable(),
  updatedAt: z.string(),
});

export type ManifestEntry = z.infer<typeof ManifestEntry>;

export const Manifest = z.record(z.string(), ManifestEntry);

export type Manifest = Readonly<Record<string, ManifestEntry>>;
