---
type: source
title: "Master Responsive Grids (Rows & Columns) in Figma"
sources: [sybtdc4dYzE]
updated: 2026-10-26
video_id: "sybtdc4dYzE"
channel: timgabe
published_at: 2022-09-01
url: "https://www.youtube.com/watch?v=sybtdc4dYzE"
raw: data/timgabe/md/2022-09-01_sybtdc4dYzE_master-responsive-grids-rows-columns-in-figma.md
businesses: [figma, material-design]
people: [tim-gabe]
topics: [grid-systems, responsive-design, figma, ui-design, design-systems]
---

# Master Responsive Grids (Rows & Columns) in Figma

## Summary

Tim Gabe shows how to set up layout grids in Figma. Rows give vertical consistency and snapping on an 8-point grid. A 12-column grid gives horizontal structure on desktop. He then gives his responsive setup: 12 columns on desktop, 8 on tablet and 4 on mobile, the same pattern as Material Design. He uses the "stretch" type on every device for pixel accuracy, and he saves each grid as a style.

## Key facts

- Row grid settings: type top, height 8 px, gutter 8 px, count 100 (enough to cover the frame). [1:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=90s)
- A 12-column grid is the web standard. 12 divides by 2, 3, 4 and 6. [3:22](https://www.youtube.com/watch?v=sybtdc4dYzE&t=202s)
- Type "center" matches how the web works on desktop, but it cannot hit an exact container. It gives 1,144 px instead of the standard 1,140 px. [3:22](https://www.youtube.com/watch?v=sybtdc4dYzE&t=202s), [4:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=265s)
- Desktop columns: 12 columns, 20 px gutter, type stretch. In a 1,440 px frame, a 30 px margin gives a 1,140 px container, and a 120 px margin gives 960 px. [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s), [6:27](https://www.youtube.com/watch?v=sybtdc4dYzE&t=387s)
- Tablet: 8 columns, 16 px gutter, 32 px margin. Mobile: 4 columns, 12 px gutter, 12 px margin. [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s), [9:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=571s)

## Tactics

- **Use rows for vertical rhythm.** Items snap to 16, 24 and 32 px, so spacing looks deliberate and never misses by a pixel. [0:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=29s), [1:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=90s)
- **Save every grid as a style.** One style lets you change the grid across all frames at once. Name it with its settings, for example "12 col, 150 px margin, 1140 container, 1440 frame". [2:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=151s), [6:27](https://www.youtube.com/watch?v=sybtdc4dYzE&t=387s)
- **Prefer stretch in Figma.** Tim uses stretch on all devices so he can set the exact container width. [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s)
- **Set the margin from the container.** The margin, not the column count, decides the desktop container width. [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s)
- **Break the grid only on purpose.** A text block, a carousel or an image can go outside the columns by design. [7:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=449s)
- **Never span half columns.** A box over 5.5 columns makes trouble for developers. [7:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=449s)
- **Shrink spacing on smaller screens.** Lower the gutter and margin on tablet and mobile, because the content is smaller. [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s)

## Quotes

- "Columns are guides." (break them only with intent) [6:27](https://www.youtube.com/watch?v=sybtdc4dYzE&t=387s)
- "Your developers are gonna cry." (on half-column layouts) [7:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=449s)

## Links

- Businesses: [Figma](../businesses/figma.md), Material Design
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Grid systems](../topics/grid-systems.md), [Responsive design](../topics/responsive-design.md), [Figma](../topics/figma.md), [UI design](../topics/ui-design.md), [Design systems](../topics/design-systems.md)
