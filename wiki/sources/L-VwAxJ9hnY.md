---
type: source
title: "Create Any Carousel in Figma (Beginner Tutorial)"
sources: [L-VwAxJ9hnY]
updated: 2026-10-26
video_id: "L-VwAxJ9hnY"
channel: timgabe
published_at: 2023-05-18
url: "https://www.youtube.com/watch?v=L-VwAxJ9hnY"
raw: data/timgabe/md/2023-05-18_L-VwAxJ9hnY_create-any-carousel-in-figma-beginner-tutorial.md
businesses: [figma]
people: [tim-gabe]
topics: [prototyping, motion-design, ui-design]
---

## Summary

Tim Gabe shows four ways to prototype a carousel in Figma: basic scroll, on drag, on click and automatic. All four start from the same base. Each item is an Auto Layout of image and text, and the carousel is an Auto Layout that holds the items. The basic version only needs overflow settings. The other three duplicate the frame for each state and link the frames with Smart Animate. They differ only in the trigger: drag, click or delay. This is his most-viewed video in this batch, at about 286K views (2026-10).

## Key facts

- The four types are basic (horizontal overflow), on drag, on click and automatic (after delay) ([0:00](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=0s)).
- Basic carousel: 56px horizontal padding. The container width is the frame width minus 56, so the last card is cut off and there is right-side spacing. Constraints are left and right ([1:40](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=100s), [2:42](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=162s)).
- On drag: each inactive card is pushed down by 56, 112 or 168px of top padding and set to 25% opacity. The active card is at 0 offset and 100% opacity ([4:48](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=288s)).
- Automatic: "After delay" of 800ms on the top-level frame ([8:52](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=532s)).
- The free working file is on timgabe.com (see the description).

## Tactics

- **Nest Auto Layouts.** Wrap each image and text pair in an Auto Layout. Then wrap all the items in a parent Auto Layout called "Carousel" ([0:24](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=24s)).
- **Basic scroll.** Align the carousel to the top left. Set the frame's overflow from "No scrolling" to "Horizontal" and add a flow starting point ([1:40](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=100s), [2:42](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=162s)).
- **Align to the top left for the lift effect.** With plain left alignment, padding on one item pulls all the items down. Top-left alignment moves only that item ([4:48](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=288s)).
- **On drag.** Turn overflow off. Duplicate the frame for each slide and shift the carousel so the next card is centered. Put the "On drag" trigger on the carousel, not the frame, and add the reverse link ([3:45](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=225s), [5:50](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=350s), [6:50](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=410s)).
- **On click.** Reuse the same frames. Remove the drag links and put "On click" on the arrow buttons. Show both buttons at full opacity after the first slide ([7:31](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=451s)).
- **Automatic.** Put "After delay" on the top-level frame and loop the last state back to the first. Check that every link uses the delay trigger ([8:52](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=532s)).

## Quotes

- "There are four different techniques that you could use to create almost any kind of Figma carousel... so that you can recreate basically any kind of carousel that you find on the web." ([0:00](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=0s))

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Prototyping](../topics/prototyping.md), [Motion design](../topics/motion-design.md), [UI design](../topics/ui-design.md)
