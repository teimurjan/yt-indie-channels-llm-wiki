import { existsSync } from "node:fs";
import { writeFileAtomic } from "./atomic-write.ts";
import { readJsonAs } from "./read-json.ts";
import { Manifest, ok, type ManifestEntry, type Result } from "./types.ts";

export const loadManifest = async (path: string): Promise<Result<Manifest, string>> =>
  existsSync(path) ? readJsonAs(path, Manifest) : ok({});

export type ManifestStore = {
  get: () => Manifest;
  set: (id: string, entry: ManifestEntry) => Promise<void>;
};

/** Keeps an immutable snapshot and saves it after every change, one write at a time. */
export const createManifestStore = (path: string, initial: Manifest): ManifestStore => {
  let snapshot = initial;
  let pending: Promise<void> = Promise.resolve();
  return {
    get: () => snapshot,
    set: (id, entry) => {
      snapshot = { ...snapshot, [id]: entry };
      const content = `${JSON.stringify(snapshot, null, 2)}\n`;
      pending = pending.then(() => writeFileAtomic(path, content));
      return pending;
    },
  };
};
