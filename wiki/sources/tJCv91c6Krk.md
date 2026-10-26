---
type: source
title: "Responsive Design in Figma (Crash Course 2023)"
sources: [tJCv91c6Krk]
updated: 2026-10-26
video_id: "tJCv91c6Krk"
channel: timgabe
published_at: 2023-01-20
url: "https://www.youtube.com/watch?v=tJCv91c6Krk"
raw: data/timgabe/md/2023-01-20_tJCv91c6Krk_responsive-design-in-figma-crash-course-2023.md
businesses: [figma, apple, google]
people: [tim-gabe]
topics: [responsive-design, figma, ui-design, auto-layout, grid-systems]
---

## Summary

Tim Gabe shows how to make one hero section responsive in Figma across desktop, tablet and mobile. His key idea is to treat breakpoints as pixel ranges, not fixed sizes. The tutorial has three steps. First, set up auto layout, constraints and resizing. Next, define breakpoints and column grids. Last, scale text and spacing for each device. He stresses that no breakpoint or scale ratio is universally correct.

## Key facts

- Breakpoint ranges in the example: mobile 0 to 640 px, tablet 641 to 1024 px, desktop 1025 px and up. Apple and Google use different breakpoints, even page to page. [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s), [2:04](https://www.youtube.com/watch?v=tJCv91c6Krk&t=124s), [11:06](https://www.youtube.com/watch?v=tJCv91c6Krk&t=666s)
- He designs desktop on a 1440 px reference frame. The layout is the same for any width above 1025 px. [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s)
- Grids: desktop 12 columns, 64 px margin, 24 px gutter. Tablet 8 columns, 32 px margin. Mobile 4 columns, 16 px margin and 16 px gutter. [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s), [13:12](https://www.youtube.com/watch?v=tJCv91c6Krk&t=792s), [14:14](https://www.youtube.com/watch?v=tJCv91c6Krk&t=854s), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s)
- Type scale in the example: body and UI text 32 px on desktop, 28 px on tablet, 24 px on mobile. Heading 96 px, 72 px, 56 px. [17:26](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1046s), [18:26](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1106s), [19:28](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1168s)

## Tactics

- **Think in ranges.** Each device gets one look across a range of widths. Sometimes the content or layout itself must change by device. [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s)
- **Group with auto layout first.** Wrap related layers (nav links, logo plus nav, text, image plus text) in auto layout frames with clear names. [3:48](https://www.youtube.com/watch?v=tJCv91c6Krk&t=228s)
- **Use "space between" for nav spacing.** Fixed "packed" gaps do not stretch. Space between makes the gap automatic. [4:51](https://www.youtube.com/watch?v=tJCv91c6Krk&t=291s)
- **Set constraints to left and right.** Auto layout alone does not resize with the frame. The container must hold both edges. [5:54](https://www.youtube.com/watch?v=tJCv91c6Krk&t=354s), [10:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=602s)
- **Switch children to "fill container".** Left and right constraints stay unavailable while children are fixed or hug. With fill, two children take 50% each and three take 33%. [6:57](https://www.youtube.com/watch?v=tJCv91c6Krk&t=417s), [8:59](https://www.youtube.com/watch?v=tJCv91c6Krk&t=539s)
- **Snap content to the grid.** When you resize, content that maps to columns stays aligned. After you change the grid count, realign the content by hand. [13:12](https://www.youtube.com/watch?v=tJCv91c6Krk&t=792s), [14:14](https://www.youtube.com/watch?v=tJCv91c6Krk&t=854s)
- **Restack for small screens.** On tablet, change the hero auto layout from horizontal to vertical and put the image on top. On tablet and mobile, replace nav links with a "Menu +" button. [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s), [16:18](https://www.youtube.com/watch?v=tJCv91c6Krk&t=978s)
- **Scale shared sizes together.** Elements that share a text size on desktop change together on each device. Reduce spacing too. There is no golden multiplier. [17:26](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1046s)

## Quotes

- "One thing that really made responsive design click for me was to start viewing it as pixel ranges instead of static pixel values." [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s)
- "There is no one right pixel value or one right pixel range or one right break point." [2:04](https://www.youtube.com/watch?v=tJCv91c6Krk&t=124s)

## Links

- Businesses: [Figma](../businesses/figma.md), [Apple](../businesses/apple.md), Google
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Responsive design](../topics/responsive-design.md), [Figma](../topics/figma.md), [UI design](../topics/ui-design.md), [Auto layout](../topics/auto-layout.md), [Grid systems](../topics/grid-systems.md)
