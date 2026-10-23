import { readFileSync } from "node:fs";
import { Info, Json3 } from "../src/types.ts";

const read = (name: string): unknown =>
  JSON.parse(readFileSync(new URL(`./fixtures/${name}`, import.meta.url), "utf8"));

export const infoFixture = (): Info => Info.parse(read("info.json"));
export const json3Fixture = (name: "manual.json3" | "auto.json3"): Json3 => Json3.parse(read(name));
