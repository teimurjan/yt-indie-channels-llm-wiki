---
type: source
title: "From Figma to 3D Website Using Framer + Spline"
sources: [4Byq1fjaUSY]
updated: 2026-10-26
video_id: "4Byq1fjaUSY"
channel: timgabe
published_at: 2023-11-22
url: "https://www.youtube.com/watch?v=4Byq1fjaUSY"
raw: data/timgabe/md/2023-11-22_4Byq1fjaUSY_from-figma-to-3d-website-using-framer-spline.md
businesses: [framer, spline, figma]
people: [tim-gabe]
topics: [framer, 3d-web-design, motion-design, ui-design]
---

## Summary

Tim Gabe turns a Figma design into a scroll-driven 3D website. He exports the layout to Framer with the Framer plugin, then models a blue cube in Spline. The cube clones, grows, levitates and slides up as the page scrolls. He embeds the Spline scene in Framer as a sticky full-screen layer behind the content. Then he adds 3D text animations with Framer scroll effects. The tutorial is for beginners, and the working files are free.

## Key facts

- Figma to Framer: select the frames, run the Framer plugin, copy to clipboard, paste into Framer. Then set nav to absolute, pin it, and set section max width to 1200 px. [0:25](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=25s), [1:01](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=61s), [2:26](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=146s)
- Tim calls Spline "basically like Figma or Framer but for 3D". [3:14](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=194s)
- Cube: a Figma SVG rectangle extruded by 300 to match its 300x300 size. Corner, bevel and bevel sides are 8. Color #0000FF, lighting at 80%, a matcap layer at 75%, and bloom on. [4:18](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=258s), [5:00](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=300s), [6:35](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=395s)
- States: base (1 cube), multiply (cloner count 8), grow (clone scale Y 1.5). Scroll events run over 1,500 px, about 500 px per section for three sections. [7:00](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=420s), [8:02](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=482s)
- Framer embed: a scroll container at 300vh holds a sticky embed at 100vh. Content sits at z-index 2, and blurs and images at -1. [15:05](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=905s), [16:35](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=995s)
- Text animation: 3D enter with 24 on X, -24 on Y, and 24 offset. Spring values: 240 stiffness, 24 damping, 2.4 mass, 0.1 s delay. [17:30](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1050s)

## Tactics

- **Use a "Hollywood camera" in Spline.** Give the camera its own base, multiply and grow states. Drive it with the same scroll event for cinematic moves. [9:32](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=572s), [10:37](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=637s)
- **One group per animation.** Wrap the cube in a "levitate" group with an infinite ping-pong loop. Wrap that in a "slide up" group. Its start event moves from -1,000 Y, scale 0 and 45° rotation. [12:01](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=721s), [12:42](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=762s)
- **Lock the viewer.** In export play settings, turn off the logo, page scroll, orbit, pan and zoom. Set mouse events to global. [9:09](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=549s), [19:25](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1165s)
- **Overflow must be visible.** Set overflow to visible on the scroll container and the desktop frame, or the scroll animation fails. [15:52](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=952s)
- **Paste effects across elements.** Copy one scroll animation and paste it on every text field and image. [18:30](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1110s), [18:59](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1139s)
- **Embed by code.** Copy the Spline embed code into the HTML field of the Framer embed, then publish. [20:00](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1200s)

## Quotes

- "If I hit publish, this is now literally already a website." [2:48](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=168s)

## Links

- Businesses: [Framer](../businesses/framer.md), [Spline](../businesses/spline.md), [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), 3D web design, [Motion design](../topics/motion-design.md), [UI design](../topics/ui-design.md)
