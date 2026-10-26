---
type: source
title: "4 Tricks for Best Figma to Framer Export"
sources: [AJBaBScKdwI]
updated: 2026-10-26
video_id: "AJBaBScKdwI"
channel: timgabe
published_at: 2022-12-22
url: "https://www.youtube.com/watch?v=AJBaBScKdwI"
raw: data/timgabe/md/2022-12-22_AJBaBScKdwI_4-tricks-for-best-figma-to-framer-export.md
businesses: [figma, framer]
people: [tim-gabe]
topics: [framer, figma, responsive-design, ui-design, no-code]
---

# 4 Tricks for Best Figma to Framer Export

## Summary

Tim Gabe gives four tricks to move a design from Figma to Framer with no rework. Set up auto layout, define constraints and resizing, plan breakpoints in Figma, and export in small pieces with the Framer plugin. His premise: Figma auto layout, Framer stacks and CSS flexbox work the same way. So a design built like real web code exports cleanly. The video ends with a live export of a landing page.

## Key facts

- Framer stacks, Figma auto layout and CSS flexbox follow the same model. [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s)
- The Framer plugin copied 47 layers from Figma in one step. [7:19](https://www.youtube.com/watch?v=AJBaBScKdwI&t=439s), [8:21](https://www.youtube.com/watch?v=AJBaBScKdwI&t=501s)
- His designs use a 1440 px desktop width. A new Framer project starts at 1200 px, so he changes it before he pastes. [8:21](https://www.youtube.com/watch?v=AJBaBScKdwI&t=501s)
- You export one desktop frame, not separate frames for each device. Framer adds the breakpoints. [5:18](https://www.youtube.com/watch?v=AJBaBScKdwI&t=318s)

## Tactics

- **Trick 1: nest auto layouts.** Wrap the whole landing page in one auto layout that holds the other auto layouts. You can then move items and change spacing the same way in Framer. [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s), [1:28](https://www.youtube.com/watch?v=AJBaBScKdwI&t=88s)
- **Trick 2: set constraints and resizing.** The nav uses a fixed width, a center constraint, top attachment and absolute position. Text containers use "fill" so text reflows at smaller widths. A container with 24 px padding keeps the hero image 24 px from the edges as it scales. [2:38](https://www.youtube.com/watch?v=AJBaBScKdwI&t=158s), [3:40](https://www.youtube.com/watch?v=AJBaBScKdwI&t=220s), [4:42](https://www.youtube.com/watch?v=AJBaBScKdwI&t=282s)
- **Trick 3: design breakpoints in Figma first.** Draw tablet and mobile layouts in Figma as a guide. Then you do not improvise designs inside Framer. [5:18](https://www.youtube.com/watch?v=AJBaBScKdwI&t=318s)
- **Trick 4: treat sections like Lego pieces.** Export all sections at the start. Later, export only the one frame or icon that changed. [6:15](https://www.youtube.com/watch?v=AJBaBScKdwI&t=375s)
- **Use the quick menu.** Press Cmd/Ctrl + P or "/" in Figma to open the Framer plugin fast. [7:19](https://www.youtube.com/watch?v=AJBaBScKdwI&t=439s)
- **Fix the height after paste.** Set the desktop frame height from "fixed" to "fit content". It becomes a stack and behaves like the Figma auto layout. [9:23](https://www.youtube.com/watch?v=AJBaBScKdwI&t=563s)

## Quotes

- "Framer is quickly becoming the new standard for web development among designers but Figma is still the queen of pure design work." [0:00](https://www.youtube.com/watch?v=AJBaBScKdwI&t=0s)
- "Treat everything like Lego pieces." [7:19](https://www.youtube.com/watch?v=AJBaBScKdwI&t=439s)

## Links

- Businesses: [Figma](../businesses/figma.md), [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Figma](../topics/figma.md), [Responsive design](../topics/responsive-design.md), [UI design](../topics/ui-design.md), [No-code](../topics/no-code.md)
