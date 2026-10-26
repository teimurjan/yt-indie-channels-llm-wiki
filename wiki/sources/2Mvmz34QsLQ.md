---
type: source
title: "5 Most Useful Figma Animations For UI Beginners"
sources: [2Mvmz34QsLQ]
updated: 2026-10-26
video_id: "2Mvmz34QsLQ"
channel: timgabe
published_at: 2023-01-26
url: "https://www.youtube.com/watch?v=2Mvmz34QsLQ"
raw: data/timgabe/md/2023-01-26_2Mvmz34QsLQ_5-most-useful-figma-animations-for-ui-beginners.md
businesses: [figma]
people: [tim-gabe]
topics: [prototyping, motion-design, micro-interactions, design-systems, ui-design]
---

# 5 Most Useful Figma Animations For UI Beginners

## Summary

Tim Gabe shows five Figma prototype animation techniques for beginners: click, hover, drag, delayed and overlay. Each one uses Smart Animate between frames or between variants in a component set. The main lesson is to put interactions inside component sets, such as a button with hover states. You can then nest them in other components, and the interactions still work. Tim argues that designers can now make these animations in the tool they use daily. They can then show clients and brief developers without another tool.

## Key facts

- Navigation on click: two page frames swap position inside a clipped frame. Smart Animate, 800 ms. [2:03](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=123s)
- Button hover: a component set with default and hover variants. "While hovering", Smart Animate, ease in, 300 ms. [4:53](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=293s)
- Card reveal: an image clip grows from 1 px to full card height inside a frame with clip content on. It uses a custom spring. [5:56](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=356s), [6:57](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=417s)
- Carousel: three variants (center, right, left). Drag interactions go from center to each side and back, with Smart Animate, ease out, 300 ms. [9:02](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=542s), [10:02](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=602s)
- Loading button: three dot variants loop "after delay" 1 ms, 300 ms ease out. On click the button changes to its loading state, and after a 2,000 ms delay it changes back. [13:22](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=802s), [15:26](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=926s)
- Overlays: "open overlay" with center position, close on outside click and a background dim. Dropdowns use manual position and a 150 ms dissolve. [16:29](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=989s), [18:32](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=1112s)

## Tactics

- **Animate with clipping.** Most effects come from moving or resizing layers inside a frame with clip content on. The image itself does not change. [6:57](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=417s)
- **Put interactions in component sets.** Interactions live on variants, so a hover button keeps working inside a card or a dropdown. [5:56](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=356s), [18:32](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=1112s)
- **Two-way drag needs two interactions.** The center variant needs one drag to each side. Each side needs one drag back to the center. [10:02](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=602s)
- **Absolute position inside auto layout.** Use it to slide text in and out of a button for the loading state. [15:26](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=926s)

## Quotes

- "We can wow our clients and communicate with our developers without ever leaving our design tool." [0:00](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=0s)
- "Using these component sets is a great way for you to create more complex animations inside of figma." [18:32](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=1112s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Prototyping](../topics/prototyping.md), [Motion design](../topics/motion-design.md), [Micro-interactions](../topics/micro-interactions.md), [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md)
