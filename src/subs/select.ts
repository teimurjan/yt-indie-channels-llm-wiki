import type { Info, SubtitleMap, Track } from "../types.ts";

const ORIG_SUFFIX = "-orig";

const baseLang = (code: string): string => code.split("-")[0]!.toLowerCase();

const LANG_TAG = /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/;

// Named manual tracks have keys like "en-nP7-2PuUl7o"; those reduce to the base language.
export const trackLang = (key: string): string => {
  const code = key.endsWith(ORIG_SUFFIX) ? key.slice(0, -ORIG_SUFFIX.length) : key;
  return LANG_TAG.test(code) ? code : baseLang(code);
};

// yt-dlp downloads the first json3 entry for a key, so every json3 entry must be untranslated.
const isUsable = (map: SubtitleMap, key: string): boolean => {
  const json3 = (map[key] ?? []).filter((format) => format.ext === "json3");
  return json3.length > 0 && json3.every((format) => !format.url.includes("tlang="));
};

const pickManual = (subtitles: SubtitleMap, lang: string): string | undefined => {
  const rank = (key: string) => (key === lang ? 0 : key === baseLang(lang) ? 1 : 2);
  return Object.keys(subtitles)
    .filter((key) => key !== "live_chat" && baseLang(key) === baseLang(lang))
    .filter((key) => isUsable(subtitles, key))
    .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))[0];
};

// Auto-dubbed videos list one -orig track per dubbed audio language, so match the spoken language.
const pickAuto = (captions: SubtitleMap, spoken: string | null): string | undefined => {
  const usable = Object.keys(captions).filter((key) => isUsable(captions, key));
  const originals = usable.filter((key) => key.endsWith(ORIG_SUFFIX));
  if (!spoken) return originals.length === 1 ? originals[0] : undefined;
  return (
    originals.find((key) => baseLang(trackLang(key)) === spoken) ??
    usable.find((key) => !key.endsWith(ORIG_SUFFIX) && baseLang(key) === spoken)
  );
};

/** Manual subtitles in `lang` first, then auto captions in the spoken language. Never machine translations. */
export const selectTrack = (info: Info, lang: string): Track | null => {
  const manual = pickManual(info.subtitles ?? {}, lang);
  if (manual) return { kind: "manual", key: manual, lang: trackLang(manual) };

  const spoken = info.language ? baseLang(info.language) : null;
  const auto = pickAuto(info.automatic_captions ?? {}, spoken);
  return auto ? { kind: "auto", key: auto, lang: trackLang(auto) } : null;
};
