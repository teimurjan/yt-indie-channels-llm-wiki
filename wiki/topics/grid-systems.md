---
type: topic
title: "Grid systems"
sources: [ohF93_k3IMk, sybtdc4dYzE, GDjxXRLHEg4, tJCv91c6Krk, udTGvssp-h8, PGQnGEH7c-E, vBuyR8uF380, 86PGRyQjdzQ]
updated: 2026-10-26
---

Grid systems are fixed spacing scales and column layouts that make UI sizes and positions consistent. All sources here are by [Tim Gabe](../people/tim-gabe.md).

## Definition

A grid system has two parts: a spacing scale (every size divides by 4 or 8) and a column grid (12 columns on desktop, fewer on smaller screens) that content snaps to ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [0:25](https://www.youtube.com/watch?v=ohF93_k3IMk&t=25s); [sybtdc4dYzE](../sources/sybtdc4dYzE.md), [3:22](https://www.youtube.com/watch?v=sybtdc4dYzE&t=202s)).

## Repeated patterns

- **The 8-point grid.** Use 4, 8, 12, 16, 24, 32, 40, 48 and up. It stops random values like 31 or 57 px. Developers can then spot a mistake: 31 px is probably 32 ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [1:28](https://www.youtube.com/watch?v=ohF93_k3IMk&t=88s); [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md), [7:15](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=435s); [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md), [4:00](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=240s)).
- **4 for tight, 8+ for loose.** Use 4 between related parts, like a link and its icon. Use big steps, like 64, between sections ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [2:29](https://www.youtube.com/watch?v=ohF93_k3IMk&t=149s)).
- **12 / 8 / 4 columns.** 12 on desktop, 8 on tablet, 4 on mobile, as in Material Design. 12 divides by 2, 3, 4 and 6 ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [3:22](https://www.youtube.com/watch?v=sybtdc4dYzE&t=202s); [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md), [6:20](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=380s); [tJCv91c6Krk](../sources/tJCv91c6Krk.md), [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s)).
- **Start with the grid.** Add a column grid before you know the details ([GDjxXRLHEg4](../sources/GDjxXRLHEg4.md), [6:20](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=380s); [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md), [5:38](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=338s)).
- **Break the grid on purpose, and last.** Let carousels and logo sliders bleed off the edge, or arc text across the container ([PGQnGEH7c-E](../sources/PGQnGEH7c-E.md), [7:52](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=472s); [vBuyR8uF380](../sources/vBuyR8uF380.md), [13:41](https://www.youtube.com/watch?v=vBuyR8uF380&t=821s); [sybtdc4dYzE](../sources/sybtdc4dYzE.md), [7:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=449s)). Small text next to an icon may look best at 6 px, but first try to change another value ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [6:40](https://www.youtube.com/watch?v=ohF93_k3IMk&t=400s)).
- **Do not force fluid sizes.** Card widths follow columns and container heights come from padding plus content, so they can be any number ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [4:36](https://www.youtube.com/watch?v=ohF93_k3IMk&t=276s)).
- **Shrink spacing on smaller screens.** Lower gutters, margins and type together ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s); [tJCv91c6Krk](../sources/tJCv91c6Krk.md), [17:26](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1046s)). See [responsive design](../topics/responsive-design.md).

## Concrete examples

- Button and input: 40 px high, 16 px side padding, 10 px vertical padding because the height is the fixed "master". Card padding 32 px ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [3:35](https://www.youtube.com/watch?v=ohF93_k3IMk&t=215s)).
- Figma row grid: type top, height 8 px, gutter 8 px, count 100 ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [1:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=90s)).
- Desktop: in a 1,440 px frame, a 30 px margin gives a 1,140 px container and a 120 px margin gives 960 px. "Center" type gives 1,144 px, so he uses "stretch" ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [4:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=265s), [6:27](https://www.youtube.com/watch?v=sybtdc4dYzE&t=387s)).
- Landing page: text blocks no wider than 600 px, at least 160 px section padding, 960 px container split into equal chunks ([PGQnGEH7c-E](../sources/PGQnGEH7c-E.md), [4:59](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=299s), [6:40](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=400s)).
- Breakpoints as ranges: mobile 0 to 640, tablet 641 to 1024, desktop 1025 and up ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s)).
- Bento grid in [Framer](../topics/framer.md): 3 columns on desktop, 2 on tablet, 1 on phone, 24 px gap; one card spans 2 columns ([udTGvssp-h8](../sources/udTGvssp-h8.md), [2:18](https://www.youtube.com/watch?v=udTGvssp-h8&t=138s), [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)).
- Save each grid as a named style, such as "12 col, 150 px margin, 1140 container, 1440 frame". Never span half columns ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [2:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=151s), [7:29](https://www.youtube.com/watch?v=sybtdc4dYzE&t=449s)).

## Disagreements

> Conflict: [sybtdc4dYzE](../sources/sybtdc4dYzE.md) sets a 20 px desktop gutter, a 12 px mobile gutter and a 12 px mobile margin ([5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s), [9:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=571s)). [tJCv91c6Krk](../sources/tJCv91c6Krk.md) uses a 24 px desktop gutter with a 64 px margin, and 16 px for both mobile gutter and margin ([12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s)). Tim says no breakpoint or scale is universally correct.

## Related

[UI design](../topics/ui-design.md), [Figma](../topics/figma.md), [Auto layout](../topics/auto-layout.md), [Design systems](../topics/design-systems.md), [Typography](../topics/typography.md), [Landing pages](../topics/landing-pages.md).

## Sources

- [ohF93_k3IMk](../sources/ohF93_k3IMk.md): the 8pt grid in Figma (2022-08)
- [vBuyR8uF380](../sources/vBuyR8uF380.md): landing page desktop workflow (2022-08)
- [sybtdc4dYzE](../sources/sybtdc4dYzE.md): responsive rows and columns in Figma (2022-09)
- [tJCv91c6Krk](../sources/tJCv91c6Krk.md): responsive design crash course (2023-01)
- [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md): five Figma workflow tips (2023-02)
- [udTGvssp-h8](../sources/udTGvssp-h8.md): card layouts in Framer (2023-08)
- [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md): seven UI guidelines (2024-01)
- [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md): four levels of UI/UX design (2025-04)
