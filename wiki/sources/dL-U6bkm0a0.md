---
type: source
title: "Apple's Dynamic Island Animation in Figma (Beginner Tutorial)"
sources: [dL-U6bkm0a0]
updated: 2026-10-26
video_id: "dL-U6bkm0a0"
channel: timgabe
published_at: 2022-09-09
url: "https://www.youtube.com/watch?v=dL-U6bkm0a0"
raw: data/timgabe/md/2022-09-09_dL-U6bkm0a0_apple-s-dynamic-island-animation-in-figma-beginner-tutorial.md
businesses: [figma, apple]
people: [tim-gabe]
topics: [figma, prototyping, motion-design, micro-interactions, mobile-app-design]
---

## Summary

Tim Gabe rebuilds the animation of Apple's Dynamic Island in a Figma prototype in about 10 minutes. The flow has three steps. A drag pushes a music player up and blurs it away. After a delay, the island grows into a pill with cover art and a waveform. A click expands it into a full player with text, controls and a progress bar. He reuses existing elements and focuses only on the Smart Animate settings. The Figma file is shared in the description.

## Key facts

- Three interactions: on drag, after delay, and on click. A second click returns to the pill. [0:36](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=36s), [1:26](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=86s)
- The structure is an iPhone mockup, a screen frame with clip content, the music player container and the island. [1:40](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=100s)
- Sample values: island height 48, pill width 256, layer blur 32 to 56, expanded height about 350, corner radius 24, click transition about 500 ms. [4:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=240s), [5:02](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=302s), [6:03](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=363s), [9:45](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=585s)

## Tactics

- **Dissect before you build.** Watch the target animation and list each trigger and state change before you open the prototype panel. [0:36](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=36s)
- **Clip content on the screen frame.** The player can then slide out of view during the drag and delay steps. [1:40](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=100s)
- **Scale tool (K) for start states.** Scale elements down with K, including text, so they "bubble up" to full size in the next frame. Fade them to 0% opacity too. [3:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=180s), [4:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=240s)
- **Custom spring for the drag.** Use Smart Animate with a custom spring, then tune stiffness, damping and mass. Shrink the player from the centre with Shift+Option and add a layer blur. [4:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=240s), [5:02](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=302s)
- **1 ms delay plus bounce.** An "after delay" of 1 ms fires the second step at once. Drag the curve handle to add a slight bounce. [7:37](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=457s)
- **Set opacity per element.** Put opacity on each element, not on the parent auto layout. Check every frame for matching states, or elements appear too early. [6:53](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=413s), [8:39](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=519s)

## Quotes

- "This is an amazing tool. It helps you scale everything." [3:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=180s)
- "This is something you should play around with to find the right kind of timing and the right kind of stiffness, damping, mass." [5:02](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=302s)

## Links

- Businesses: [Figma](../businesses/figma.md), [Apple](../businesses/apple.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](../topics/figma.md), [Prototyping](../topics/prototyping.md), [Motion design](../topics/motion-design.md), [Micro-interactions](../topics/micro-interactions.md), [Mobile app design](../topics/mobile-app-design.md)
