import type { Info } from "../types.ts";

const MAX_SLUG_LENGTH = 60;

export const watchUrl = (id: string): string => `https://www.youtube.com/watch?v=${id}`;

const pad = (value: number): string => String(value).padStart(2, "0");

export const formatTimestamp = (ms: number, withHours: boolean): string => {
  const total = Math.floor(ms / 1000);
  const seconds = total % 60;
  if (!withHours) return `${Math.floor(total / 60)}:${pad(seconds)}`;
  return `${Math.floor(total / 3600)}:${pad(Math.floor(total / 60) % 60)}:${pad(seconds)}`;
};

export const titleSlug = (title: string): string => {
  const slug = title
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (slug.length <= MAX_SLUG_LENGTH) return slug || "untitled";
  const cut = slug.slice(0, MAX_SLUG_LENGTH + 1);
  const lastDash = cut.lastIndexOf("-");
  return (lastDash > 0 ? cut.slice(0, lastDash) : slug.slice(0, MAX_SLUG_LENGTH)).replace(/-+$/, "");
};

export const isoDate = (uploadDate: string | null | undefined): string | null =>
  uploadDate ? `${uploadDate.slice(0, 4)}-${uploadDate.slice(4, 6)}-${uploadDate.slice(6, 8)}` : null;

export const mdFileName = (info: Info): string =>
  `${isoDate(info.upload_date) ?? "unknown-date"}_${info.id}_${titleSlug(info.title)}.md`;
