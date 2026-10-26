---
type: source
title: "How To Animate Like After Effects in Figma"
sources: [nyyuyPSxqww]
updated: 2026-10-26
video_id: "nyyuyPSxqww"
channel: timgabe
published_at: 2022-11-03
url: "https://www.youtube.com/watch?v=nyyuyPSxqww"
raw: data/timgabe/md/2022-11-03_nyyuyPSxqww_how-to-animate-like-after-effects-in-figma.md
businesses: [figma, adobe-after-effects]
people: [tim-gabe]
topics: [motion-design, prototyping, figma, ui-design]
---

## Summary

Tim Gabe argues that Figma's Smart Animate can replace Adobe After Effects for most motion work by UI designers. After Effects has a steep learning curve and does not connect to Figma. He takes apart two animations frame by frame. The first is a website hero intro with a loader, built from 7 frames. The second is a looping Twitter fashion ad. Both use the same rule: an element must exist in the frame before the one where it moves.

## Key facts

- Smart Animate animates the differences in a layer between frames, such as size, color, position and opacity. [1:11](https://www.youtube.com/watch?v=nyyuyPSxqww&t=71s)
- The hero intro uses only 7 frames: a reveal, a 01 to 99 loader, an image that slides up, a nav bar, a headline, then a phone and a button. [1:40](https://www.youtube.com/watch?v=nyyuyPSxqww&t=100s)
- The second example is a fast-tempo, looping social media ad for Twitter, made fully in Figma. [5:56](https://www.youtube.com/watch?v=nyyuyPSxqww&t=356s)

## Tactics

- **Put the element in the previous frame.** An element only needs to exist in the frame just before its transition. Remove it from earlier frames to keep files simple. [2:42](https://www.youtube.com/watch?v=nyyuyPSxqww&t=162s)
- **Reveal with a covering block.** A block that hides text in frame 1 moves away in frame 2 to reveal it. [2:42](https://www.youtube.com/watch?v=nyyuyPSxqww&t=162s)
- **Number counter with clipping.** Put the numbers in an auto layout stack inside a clipped frame. Then change the stack's position so that 01 scrolls to 99. [2:42](https://www.youtube.com/watch?v=nyyuyPSxqww&t=162s), [3:43](https://www.youtube.com/watch?v=nyyuyPSxqww&t=223s)
- **Slide in from outside.** Place images or nav bars outside a clipped frame, then move them in. [3:43](https://www.youtube.com/watch?v=nyyuyPSxqww&t=223s), [4:44](https://www.youtube.com/watch?v=nyyuyPSxqww&t=284s)
- **Rise and fade.** Put text a bit lower at 0% opacity. In the next frame, move it up to 100%. [4:44](https://www.youtube.com/watch?v=nyyuyPSxqww&t=284s)
- **Stagger with offsets.** Place the arrow lower than the phone, so the phone arrives first and the arrow follows. [4:44](https://www.youtube.com/watch?v=nyyuyPSxqww&t=284s)
- **Loop cleanly.** The last frame must connect back to the first. A growing white circle covers the screen, then shrinks back into the first frame. [5:56](https://www.youtube.com/watch?v=nyyuyPSxqww&t=356s), [9:01](https://www.youtube.com/watch?v=nyyuyPSxqww&t=541s)
- **Stacked text effects.** Stack three text layers, fade them in, split them apart, squeeze them with the K (scale) tool, then grow and tilt them. [6:58](https://www.youtube.com/watch?v=nyyuyPSxqww&t=418s), [7:59](https://www.youtube.com/watch?v=nyyuyPSxqww&t=479s)
- **Swap text for a cheap fade.** Changing the text content in one layer gives a fade in and fade out. Separate layers are needed to slide text instead. [7:59](https://www.youtube.com/watch?v=nyyuyPSxqww&t=479s), [9:01](https://www.youtube.com/watch?v=nyyuyPSxqww&t=541s)

## Quotes

- "Figma has taken its place in my workflow." [0:03](https://www.youtube.com/watch?v=nyyuyPSxqww&t=3s)
- "Your creativity is really what is going to be the boundary here." [5:56](https://www.youtube.com/watch?v=nyyuyPSxqww&t=356s)

## Links

- Businesses: [Figma](../businesses/figma.md), Adobe After Effects
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Motion design](../topics/motion-design.md), [Prototyping](../topics/prototyping.md), [Figma](../topics/figma.md), [UI design](../topics/ui-design.md)
