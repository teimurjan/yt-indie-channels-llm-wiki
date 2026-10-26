---
type: source
title: "Master Stacks, Position & Sizing (Framer For Beginners)"
sources: [GVxFxyHNy_o]
updated: 2026-10-26
video_id: "GVxFxyHNy_o"
channel: timgabe
published_at: 2023-07-27
url: "https://www.youtube.com/watch?v=GVxFxyHNy_o"
raw: data/timgabe/md/2023-07-27_GVxFxyHNy_o_master-stacks-position-sizing-framer-for-beginners.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, responsive-design, auto-layout, ui-design]
---

# Master Stacks, Position & Sizing (Framer For Beginners)

## Summary

Tim Gabe explains layout in Framer for beginners. He covers frames and stacks, five position types (pinned, fixed, relative, absolute, sticky) and sizing modes (fixed, relative, fill, fit content, viewport). His rule: use frames to explore freely, then convert to stacks once the structure is set. He ends by building a card grid that wraps and stays inside its container. The working file is free in the description.

## Key facts

- In frames, you can pin elements to any side or the center. Pinned elements follow the canvas as it resizes. [0:16](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=16s)
- Fixed position keeps an element in one place on the screen while the page scrolls. [0:43](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=43s)
- Children of a stack use relative position. The parent stack controls direction, distribution, alignment, wrap, gap and padding. Press minus to turn a stack into a frame, and plus to turn it back. [1:13](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=73s), [1:46](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=106s)
- For sticky to work, every parent container must have overflow set to visible. You can set an offset, for example 24 px from the top. [2:59](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=179s)
- Relative width is a percentage of the parent. Widths that add up to more than 100% push items out of the container. [4:16](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=256s)
- Fill is available only inside stacks. It uses fractions: 2fr takes twice the space of 1fr. [4:53](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=293s)
- Viewport height uses vh: 100 vh is the full device height. [6:11](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=371s)

## Tactics

- **Explore in frames, then convert to stacks.** Stacks are rigid. Frames let you move things freely until the structure is clear. [6:34](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=394s)
- **Use absolute position to break one item out of a stack.** The other relative items keep their layout. [2:34](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=154s)
- **Build buttons with fit content and padding.** The stack grows with the label, so you need no manual sizing. [5:30](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=330s)
- **Card grid recipe:**
  1. Wrap the image, text and button in a stack with padding, a gap of about 40 and fit-content width and height. [7:01](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=421s), [8:03](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=483s)
  2. Set the parent stack to horizontal. Set the cards, images and text fields to fill so they stay inside the parent and the text wraps. [8:03](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=483s), [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s)
  3. Turn on wrap and give each card a relative width of 33%. [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s)
  4. Set the parent height to fit content so wrapped rows stay inside. Set distribution to center. [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s), [10:06](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=606s)

## Quotes

- "The stack takes care of the spacing and the structure for us." [4:53](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=293s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Responsive design](../topics/responsive-design.md), [Auto layout](../topics/auto-layout.md), [UI design](../topics/ui-design.md)
