import { describe, expect, it } from "vitest";
import { createPacer } from "../src/fetch.ts";

describe("createPacer", () => {
  it("spaces concurrent starts at least the gap apart", async () => {
    const pace = createPacer(40);
    const starts: number[] = [];
    await Promise.all([0, 1, 2].map(async () => {
      await pace();
      starts.push(Date.now());
    }));
    const sorted = starts.toSorted((a, b) => a - b);
    expect(sorted[1]! - sorted[0]!).toBeGreaterThanOrEqual(35);
    expect(sorted[2]! - sorted[1]!).toBeGreaterThanOrEqual(35);
  });
});
