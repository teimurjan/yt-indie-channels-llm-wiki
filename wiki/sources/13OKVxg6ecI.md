---
type: source
title: "Framer Components for Beginners (Netflix Carousel)"
sources: [13OKVxg6ecI]
updated: 2026-10-26
video_id: "13OKVxg6ecI"
channel: timgabe
published_at: 2023-08-17
url: "https://www.youtube.com/watch?v=13OKVxg6ecI"
raw: data/timgabe/md/2023-08-17_13OKVxg6ecI_framer-components-for-beginners-netflix-carousel.md
businesses: [framer, netflix]
people: [tim-gabe]
topics: [framer, no-code, design-systems, prototyping, ui-design]
---

# Framer Components for Beginners (Netflix Carousel)

## Summary

Tim Gabe teaches Framer components by rebuilding a Netflix-style movie carousel. He builds a button component with hover and pressed states, then an icon-only variant, then variables that expose the icon and its color. Next he nests the button inside a movie card component with a hover overlay. Last, he drops 5 cards into Framer's built-in carousel. A working file is linked from his site.

## Key facts

- The tutorial covers 4 concepts in order: states, variants, variables and nested components. [0:07](https://www.youtube.com/watch?v=13OKVxg6ecI&t=7s), [3:31](https://www.youtube.com/watch?v=13OKVxg6ecI&t=211s)
- Button states: hover at 0.5 opacity and pressed at 0.25 opacity. Preview with Cmd+P (Ctrl+P on Windows). [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s), [1:46](https://www.youtube.com/watch?v=13OKVxg6ecI&t=106s)
- The icon-only variant is a fixed 56 by 56 circle with the same hover and pressed states. [2:30](https://www.youtube.com/watch?v=13OKVxg6ecI&t=150s)
- The play icon in the card variant is 32 px and black. [5:37](https://www.youtube.com/watch?v=13OKVxg6ecI&t=337s)
- The carousel holds 5 movie cards and uses "fit content" height so it does not clip. [7:02](https://www.youtube.com/watch?v=13OKVxg6ecI&t=422s)

## Tactics

- **Build a button from a stack.** Wrap text in a stack set to fit content. Add padding and a Material icon from the insert menu. Round the corners and choose "create component". [0:21](https://www.youtube.com/watch?v=13OKVxg6ecI&t=21s), [0:53](https://www.youtube.com/watch?v=13OKVxg6ecI&t=53s)
- **States change, they do not add.** A hover or pressed state can only change layers that exist in the default state. It cannot add new ones. [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s)
- **Use variants for real alternatives.** Examples are open and closed accordions or device-specific versions. Here, one variant has text and one has only an icon. [2:12](https://www.youtube.com/watch?v=13OKVxg6ecI&t=132s), [2:30](https://www.youtube.com/watch?v=13OKVxg6ecI&t=150s)
- **Expose controls with variables.** Select the icon, click plus on its name and color, and "create variable". The sidebar on the canvas then shows an icon dropdown and an icon color field. Variables can also drive show/hide toggles and images. [3:31](https://www.youtube.com/watch?v=13OKVxg6ecI&t=211s)
- **Hover overlay card.** Put an absolute-position overlay with a dark linear gradient (0% opacity at the top) over the poster. Pin the title and button to the sides and bottom. [4:35](https://www.youtube.com/watch?v=13OKVxg6ecI&t=275s)
- **Animate by moving layers out of frame.** In the default state, push the title and button below the frame. Set the overlay to 0% opacity. In the hover state, bring them back in and set the overlay to 100%. [6:02](https://www.youtube.com/watch?v=13OKVxg6ecI&t=362s)
- **Nested states still work.** The nested button keeps its own hover state inside the card. [6:02](https://www.youtube.com/watch?v=13OKVxg6ecI&t=362s), [6:56](https://www.youtube.com/watch?v=13OKVxg6ecI&t=416s)
- **Use the built-in carousel.** Insert "Carousel", pin it to the sides, and connect its slots to each card. [7:02](https://www.youtube.com/watch?v=13OKVxg6ecI&t=422s)

## Quotes

- "We cannot add new elements to this hover state, we can only alter existing ones." [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s)
- "Nested card components made into a Netflix style carousel." [8:08](https://www.youtube.com/watch?v=13OKVxg6ecI&t=488s)

## Links

- Businesses: [Framer](../businesses/framer.md), [Netflix](../businesses/netflix.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [No-code](../topics/no-code.md), [Design systems](../topics/design-systems.md), [Prototyping](../topics/prototyping.md), [UI design](../topics/ui-design.md)
