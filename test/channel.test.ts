import { describe, expect, it } from "vitest";
import { normalizeChannel } from "../src/channel.ts";

const ID = "UChhw6DlKKTQ9mYSpTfXUYqA";

describe("normalizeChannel", () => {
  it.each([
    ["@starterstory", "https://www.youtube.com/@starterstory", "starterstory"],
    ["@StarterStory", "https://www.youtube.com/@StarterStory", "starterstory"],
    ["https://www.youtube.com/@starterstory", "https://www.youtube.com/@starterstory", "starterstory"],
    ["https://www.youtube.com/@starterstory/videos", "https://www.youtube.com/@starterstory", "starterstory"],
    ["https://www.youtube.com/@starterstory/shorts?view=0", "https://www.youtube.com/@starterstory", "starterstory"],
    ["youtube.com/@starterstory", "https://www.youtube.com/@starterstory", "starterstory"],
    ["https://m.youtube.com/@starterstory/streams", "https://www.youtube.com/@starterstory", "starterstory"],
    ["http://youtube.com/@starterstory/", "https://www.youtube.com/@starterstory", "starterstory"],
    [`https://www.youtube.com/channel/${ID}`, `https://www.youtube.com/channel/${ID}`, ID],
    [`https://www.youtube.com/channel/${ID}/videos`, `https://www.youtube.com/channel/${ID}`, ID],
    ["https://www.youtube.com/c/StarterStory", "https://www.youtube.com/c/StarterStory", "starterstory"],
    ["https://www.youtube.com/user/starterstory/featured", "https://www.youtube.com/user/starterstory", "starterstory"],
    ["  @starterstory  ", "https://www.youtube.com/@starterstory", "starterstory"],
  ])("%s", (input, url, slug) => {
    expect(normalizeChannel(input)).toEqual({ ok: true, value: { url, slug } });
  });

  it.each([
    "starterstory",
    "@",
    "@bad/handle",
    "@--version",
    "https://www.youtube.com/watch?v=RSlhgyAXsBI",
    "https://www.youtube.com/channel/not-an-id",
    "https://www.youtube.com/c/",
    "https://evil.example.com/@starterstory",
    "https://youtube.com.evil.example/@starterstory",
    "--exec rm",
  ])("rejects %s", (input) => {
    expect(normalizeChannel(input).ok).toBe(false);
  });
});
