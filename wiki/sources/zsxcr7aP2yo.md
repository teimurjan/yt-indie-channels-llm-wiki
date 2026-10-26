---
type: source
title: "Easy Scroll Animation for Beginners (Framer Tutorial)"
sources: [zsxcr7aP2yo]
updated: 2026-10-26
video_id: "zsxcr7aP2yo"
channel: timgabe
published_at: 2023-10-12
url: "https://www.youtube.com/watch?v=zsxcr7aP2yo"
raw: data/timgabe/md/2023-10-12_zsxcr7aP2yo_easy-scroll-animation-for-beginners-framer-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, motion-design, no-code, responsive-design, ui-design]
---

# Easy Scroll Animation for Beginners (Framer Tutorial)

## Summary

Tim Gabe builds a scroll-triggered section in Framer in about 10 minutes. On scroll, the section fades in and a "banshee" image flies up and to the right. The background image zooms in. The text fades in with a slight rotation. He first sets up a flat, responsive layer structure. Then he adds four groups of animations with Framer's Scroll Transform and Scroll Animation effects. The working file is linked in the video description.

## Key facts

- The sequence has four animation groups: the section fade, the banshee flight, the background zoom and the text reveal. [0:12](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=12s)
- Text position: pinned 56 px from the right and 120 px from the top. The blur sits at -112 px and 256 px from the top. [1:54](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=114s), [2:06](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=126s)
- Banshee motion: +700 px on the x-axis and -700 px on the y-axis, plus some rotation and a spring transition. [4:45](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=285s), [5:37](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=337s)
- Background zoom: scale from 1 to 1.2. [6:25](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=385s)
- Text reveal: opacity 0 to 1, 3° rotation, 20 px rise, and delays of 0.1, 0.2 and 0.3 seconds. [8:00](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=480s), [9:07](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=547s)

## Tactics

- **Keep layers flat.** Put every element straight inside the section. An animation on a parent layer applies to every nested layer. [1:03](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=63s), [1:14](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=74s)
- **Pin for responsiveness.** Pin the background image to all four sides at 0. Pin the text stack to the right and top. Then the layout scales with the viewport. [1:28](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=88s), [2:29](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=149s)
- **Leave room to scroll.** Scroll animations need scroll space above and below the section. Without it, only half of the animation plays. Set the section width to Fill. [3:05](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=185s), [3:16](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=196s)
- **Trigger on a named scroll section.** In Scroll Transform, change the trigger from "on scroll" to "section in view". Add a scroll section in the right sidebar (Tim names it "amazing banshee") and select it. [3:34](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=214s), [4:11](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=251s)
- **Choose the viewport point.** The start point can be the top, middle or bottom of the viewport. Middle delays the banshee. Top delays it more. [5:37](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=337s), [6:25](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=385s)
- **Use Scroll Animation for the text.** Leave it on replay, so the text fades out on the way back up. [7:29](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=449s), [9:37](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=577s)
- **Copy effects, then stagger.** Right-click to copy the effect. Paste it onto the other text layers. Then add a spring delay to each. With the effect panel open, click the next element to edit its own settings. [8:00](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=480s), [9:03](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=543s)
- **Fade the whole section last.** Apply a Scroll Transform to the section, from opacity 0 to 1, triggered at the bottom of the viewport. [9:37](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=577s)

## Quotes

- "We pinned everything like real Framer role models." [2:29](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=149s)
- "Since the animations are triggered on scroll you need space that you can scroll through." [3:05](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=185s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Motion design](../topics/motion-design.md), [No-code](../topics/no-code.md), [Responsive design](../topics/responsive-design.md), [UI design](../topics/ui-design.md)
