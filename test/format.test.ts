import { describe, expect, it } from "vitest";
import { formatTimestamp, mdFileName, titleSlug } from "../src/render/format.ts";
import { infoFixture } from "./fixtures.ts";

describe("formatTimestamp", () => {
  it.each([
    [0, false, "0:00"],
    [5_999, false, "0:05"],
    [754_000, false, "12:34"],
    [3_599_000, false, "59:59"],
    [0, true, "0:00:00"],
    [754_000, true, "0:12:34"],
    [3_723_000, true, "1:02:03"],
    [36_000_000, true, "10:00:00"],
  ])("%i ms (hours: %s) → %s", (ms, withHours, expected) => {
    expect(formatTimestamp(ms, withHours)).toBe(expected);
  });
});

describe("titleSlug", () => {
  it.each([
    ["I built an app that makes $2K PER DAY", "i-built-an-app-that-makes-2k-per-day"],
    ["How I Built It: $30K/Month Micro-SaaS", "how-i-built-it-30k-month-micro-saas"],
    ["Crème brûlée — à la carte", "creme-brulee-a-la-carte"],
    ["  --Hello__World--  ", "hello-world"],
    ["日本語のタイトル", "untitled"],
    ["", "untitled"],
  ])("%s → %s", (title, expected) => {
    expect(titleSlug(title)).toBe(expected);
  });

  it("cuts long titles at a word boundary within 60 characters", () => {
    const slug = titleSlug("word ".repeat(30));
    expect(slug.length).toBeLessThanOrEqual(60);
    expect(slug).toMatch(/^(word-)*word$/);
  });

  it("cuts a single long word at 60 characters", () => {
    expect(titleSlug("a".repeat(80))).toBe("a".repeat(60));
  });
});

describe("mdFileName", () => {
  it("combines upload date, id and title slug", () => {
    expect(mdFileName(infoFixture())).toBe("2026-10-21_RSlhgyAXsBI_how-i-built-it-30k-month-micro-saas.md");
  });

  it("marks a missing upload date", () => {
    expect(mdFileName({ ...infoFixture(), upload_date: null })).toMatch(/^unknown-date_RSlhgyAXsBI_/);
  });
});
