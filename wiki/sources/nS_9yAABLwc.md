---
type: source
title: "Master Carousels in Framer (Slideshow, Ticker & Carousel)"
sources: [nS_9yAABLwc]
updated: 2026-10-26
video_id: "nS_9yAABLwc"
channel: timgabe
published_at: 2023-06-01
url: "https://www.youtube.com/watch?v=nS_9yAABLwc"
raw: data/timgabe/md/2023-06-01_nS_9yAABLwc_master-carousels-in-framer-slideshow-ticker-carousel.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, ui-design, no-code, motion-design]
---

# Master Carousels in Framer (Slideshow, Ticker & Carousel)

## Summary

Tim Gabe explains Framer's three scrolling components: Ticker, Carousel and Slideshow. For each one, he reads Framer's documentation to show when to use it. Then he sets it up on the canvas. Ticker is for endless loops such as a wall of tweets. Carousel is CSS scroll snapping that works well on mobile. Slideshow mixes the two and adds custom effects, autoplay and looping. He calls Slideshow the best of the three.

## Key facts

- Ticker: an infinite loop of connected items such as text, a wall of tweets or a gallery. It duplicates items for you and has no controls or snapping. [0:17](https://www.youtube.com/watch?v=nS_9yAABLwc&t=17s)
- Carousel: uses CSS scroll snapping, supports swipe and drag on mobile, arrows, dots and several items per page. The browser runs the animation, so you cannot customize it. [3:19](https://www.youtube.com/watch?v=nS_9yAABLwc&t=199s)
- Slideshow: a hybrid with autoplay, infinite looping, arrows and dots. You can customize its animation and pause it on hover. [7:50](https://www.youtube.com/watch?v=nS_9yAABLwc&t=470s)

## Tactics

- **Pick the component by job.** Read the docs first and match the component to what you build. [0:00](https://www.youtube.com/watch?v=nS_9yAABLwc&t=0s)
- **Ticker setup.** Insert it, stretch it to full width, and connect it to any layers. Tune speed, direction, alignment, gap, padding, item sizing, edge fade and hover speed (for example 0.5x to slow on hover). [0:42](https://www.youtube.com/watch?v=nS_9yAABLwc&t=42s), [1:19](https://www.youtube.com/watch?v=nS_9yAABLwc&t=79s), [2:38](https://www.youtube.com/watch?v=nS_9yAABLwc&t=158s)
- **Carousel setup.** Keep snapping on so cards lock to the center. Add an edge fade with a transition, and pick a progress indicator: scroll bar or dots. [4:18](https://www.youtube.com/watch?v=nS_9yAABLwc&t=258s), [4:56](https://www.youtube.com/watch?v=nS_9yAABLwc&t=296s), [6:09](https://www.youtube.com/watch?v=nS_9yAABLwc&t=369s)
- **Fill in accessibility.** Give the carousel a label such as "image carousel". He calls this boring but very important. [6:45](https://www.youtube.com/watch?v=nS_9yAABLwc&t=405s)
- **Slideshow effects.** Show one item and style inactive slides in the effects panel. His example: 50% opacity, 0.5 scale, perspective 900, rotation 90 degrees. [8:16](https://www.youtube.com/watch?v=nS_9yAABLwc&t=496s), [8:57](https://www.youtube.com/watch?v=nS_9yAABLwc&t=537s)
- **Fix clipped 3D effects.** Change clipping from "overflow hide" to "overflow show". [8:57](https://www.youtube.com/watch?v=nS_9yAABLwc&t=537s), [10:05](https://www.youtube.com/watch?v=nS_9yAABLwc&t=605s)
- **Tune the spring.** Change stiffness, damping and mass, and set drag, autoplay and interval. [10:05](https://www.youtube.com/watch?v=nS_9yAABLwc&t=605s), [10:40](https://www.youtube.com/watch?v=nS_9yAABLwc&t=640s)

## Quotes

- "The most awesome component that Framer has is actually the slideshow component." [7:43](https://www.youtube.com/watch?v=nS_9yAABLwc&t=463s)
- "This is like your playground when it comes to slideshows." [10:05](https://www.youtube.com/watch?v=nS_9yAABLwc&t=605s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [UI design](../topics/ui-design.md), [No-code](../topics/no-code.md), [Motion design](../topics/motion-design.md)
