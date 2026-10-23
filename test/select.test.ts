import { describe, expect, it } from "vitest";
import { selectTrack } from "../src/subs/select.ts";
import type { Info } from "../src/types.ts";
import { infoFixture } from "./fixtures.ts";

const json3 = (lang: string, tlang?: string) => ({
  ext: "json3",
  url: `https://www.youtube.com/api/timedtext?lang=${lang}${tlang ? `&tlang=${tlang}` : ""}&fmt=json3`,
});

const withCaptions = (overrides: Partial<Info>): Info => ({ ...infoFixture(), ...overrides });

describe("selectTrack", () => {
  it("picks the spoken-language -orig track on an auto-dubbed video", () => {
    expect(selectTrack(infoFixture(), "en")).toEqual({ kind: "auto", key: "en-orig", lang: "en" });
  });

  it("follows the spoken language, not --lang, for auto captions", () => {
    expect(selectTrack(withCaptions({ language: "es" }), "en")).toEqual({ kind: "auto", key: "es-orig", lang: "es" });
  });

  it("never picks a key whose entries include machine translations", () => {
    const info = withCaptions({ language: "en", automatic_captions: { en: [json3("de", "en"), json3("en")] } });
    expect(selectTrack(info, "en")).toBeNull();
  });

  it("prefers manual subtitles in --lang, including regional variants", () => {
    const info = withCaptions({ subtitles: { "en-GB": [json3("en-GB")], de: [json3("de")] } });
    expect(selectTrack(info, "en")).toEqual({ kind: "manual", key: "en-GB", lang: "en-GB" });
  });

  it("prefers the exact manual language over variants and named tracks", () => {
    const info = withCaptions({
      subtitles: { "en-US": [json3("en-US")], en: [json3("en")], "en-nP7-2PuUl7o": [json3("en")] },
    });
    expect(selectTrack(info, "en")?.key).toBe("en");
  });

  it("reduces named manual tracks to their base language", () => {
    const info = withCaptions({ subtitles: { "en-nP7-2PuUl7o": [json3("en")] } });
    expect(selectTrack(info, "en")).toEqual({ kind: "manual", key: "en-nP7-2PuUl7o", lang: "en" });
  });

  it("ignores live chat and manual tracks without json3", () => {
    const info = withCaptions({
      subtitles: { live_chat: [{ ext: "json", url: "x" }], en: [{ ext: "vtt", url: "x" }] },
    });
    expect(selectTrack(info, "en")?.kind).toBe("auto");
  });

  it("uses the only -orig track when the spoken language is unknown", () => {
    const info = withCaptions({ language: null, automatic_captions: { "fr-orig": [json3("fr")] } });
    expect(selectTrack(info, "en")?.key).toBe("fr-orig");
  });

  it("returns null when the spoken language is unknown and several -orig tracks exist", () => {
    expect(selectTrack(withCaptions({ language: null }), "en")).toBeNull();
  });
});
