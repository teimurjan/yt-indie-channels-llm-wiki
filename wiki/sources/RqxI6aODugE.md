---
type: source
title: "Advanced Smart Animate in Figma (Carousel, Loader & More)"
sources: [RqxI6aODugE]
updated: 2026-10-26
video_id: "RqxI6aODugE"
channel: timgabe
published_at: 2022-07-28
url: "https://www.youtube.com/watch?v=RqxI6aODugE"
raw: data/timgabe/md/2022-07-28_RqxI6aODugE_advanced-smart-animate-in-figma-carousel-loader-more.md
businesses: [figma]
people: [tim-gabe]
topics: [prototyping, motion-design, mobile-app-design, ui-design]
---

## Summary

Tim Gabe builds a multi-step animation in Figma on an iPhone 13 Pro frame (390px wide). It is a game intro screen: a timed loading sequence with masked image reveals, a counting number and a progress bar. The bar fills the screen, a logo and title appear, the image blurs, and a card carousel that the user drags ends the sequence. Each step is a duplicated frame joined by Smart Animate transitions. The lesson covers delays, timing curves, masks and drag triggers. It ends with a common bug: layers that differ in structure between frames.

## Key facts

- The tool is Figma Smart Animate. The video builds on Tim's basic Smart Animate tutorial and his Auto Layout video ([0:00](https://www.youtube.com/watch?v=RqxI6aODugE&t=0s), [6:02](https://www.youtube.com/watch?v=RqxI6aODugE&t=362s)).
- Frame: iPhone 13 Pro. The progress bar grows from 2px to 390px, the full frame width ([2:18](https://www.youtube.com/watch?v=RqxI6aODugE&t=138s), [7:03](https://www.youtube.com/watch?v=RqxI6aODugE&t=423s)).
- Timed steps use "After delay" of 1ms for an instant start. Example settings are 200ms delay with 800ms or 1,000ms duration, and 600ms for the carousel entrance ([3:20](https://www.youtube.com/watch?v=RqxI6aODugE&t=200s), [12:15](https://www.youtube.com/watch?v=RqxI6aODugE&t=735s), [16:16](https://www.youtube.com/watch?v=RqxI6aODugE&t=976s)).
- Carousel cards change height from 370px (inactive, 50% opacity) to 410px (active, 100% opacity). The drag transition uses 1,000ms ([18:09](https://www.youtube.com/watch?v=RqxI6aODugE&t=1089s), [20:11](https://www.youtube.com/watch?v=RqxI6aODugE&t=1211s)).
- Blur: 40 on the container of the image mask, at 50% opacity ([14:12](https://www.youtube.com/watch?v=RqxI6aODugE&t=852s)).

## Tactics

- **Frames as masks.** Put the same image in several frames with "Clip content" on. Then animate each frame's width (for example to 1px) to reveal or close the image like a curtain ([1:17](https://www.youtube.com/watch?v=RqxI6aODugE&t=77s), [7:03](https://www.youtube.com/watch?v=RqxI6aODugE&t=423s)).
- **Counting numbers.** Stack the numbers in an Auto Layout column inside a clipped frame. Switch the alignment from bottom to top to scroll from 1% to 99% ([5:00](https://www.youtube.com/watch?v=RqxI6aODugE&t=300s), [6:02](https://www.youtube.com/watch?v=RqxI6aODugE&t=362s)).
- **Pre-stage the next elements.** Smart Animate only tweens layers that exist in both frames. Add the next step's items early at 0% opacity or off-canvas ([8:37](https://www.youtube.com/watch?v=RqxI6aODugE&t=517s), [13:10](https://www.youtube.com/watch?v=RqxI6aODugE&t=790s)).
- **One element, many roles.** The progress bar grows to cover the screen and turns into a linear-gradient background ([7:34](https://www.youtube.com/watch?v=RqxI6aODugE&t=454s)).
- **Spend the time on timing.** Most animation work is tuning timing and easing curves. Copy settings from a tuned reference frame ([4:20](https://www.youtube.com/watch?v=RqxI6aODugE&t=260s)).
- **Blur the container, not the image.** A blur on the image itself can glitch ([14:12](https://www.youtube.com/watch?v=RqxI6aODugE&t=852s)).
- **Drag carousels.** Put the "On drag" trigger on the carousel, not the frame. Add the reverse interactions so users can drag back. Move the background image with each card for a parallax effect ([19:11](https://www.youtube.com/watch?v=RqxI6aODugE&t=1151s), [21:12](https://www.youtube.com/watch?v=RqxI6aODugE&t=1272s)).
- **Match layer structure.** Layers need the same names and the same nesting in every frame. One image outside its mask group caused a jump ([22:14](https://www.youtube.com/watch?v=RqxI6aODugE&t=1334s)).

## Quotes

- "Fine-tuning the timings and the curves of your animations, that's like... most of the work." ([4:20](https://www.youtube.com/watch?v=RqxI6aODugE&t=260s))
- "If we want to use smart animate we need to have the same objects in both of the frames that we're going to animate." ([8:37](https://www.youtube.com/watch?v=RqxI6aODugE&t=517s))

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Prototyping](../topics/prototyping.md), [Motion design](../topics/motion-design.md), [Mobile app design](../topics/mobile-app-design.md), [UI design](../topics/ui-design.md)
