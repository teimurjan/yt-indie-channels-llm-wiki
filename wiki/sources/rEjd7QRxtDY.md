---
type: source
title: "Framer Breakpoints in 7 Minutes (Beginner Tutorial)"
sources: [rEjd7QRxtDY]
updated: 2026-10-26
video_id: "rEjd7QRxtDY"
channel: timgabe
published_at: 2023-08-03
url: "https://www.youtube.com/watch?v=rEjd7QRxtDY"
raw: data/timgabe/md/2023-08-03_rEjd7QRxtDY_framer-breakpoints-in-7-minutes-beginner-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, responsive-design, no-code, ui-design]
---

# Framer Breakpoints in 7 Minutes (Beginner Tutorial)

## Summary

Tim Gabe makes a desktop layout responsive in Framer. The layout has a hero video with overlaid text, a text block and an image row. His method is to wrap everything in stacks, switch fixed widths to fill or relative, set heights to fit content, and use wrap for image rows. Then he adds tablet and phone breakpoints that inherit from the desktop "primary" and override only what changes. He ends by fixing a positioning bug that showed up only when the frame was scaled up.

## Key facts

- The video dates from 2023-08, so Framer's UI may have changed since.
- The working file is linked in the video description.
- Stacks are Framer's auto layout. Use them "like a maniac" for any responsive layout [0:00](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=0s).
- The desktop breakpoint is the parent. Changes on desktop flow down to tablet and phone, but changes on tablet do not flow up [4:47](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=287s), [5:15](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=315s).
- Wrap works only when the items have a fixed width [3:52](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=232s).

## Tactics

- **Stack the content, frame the overlays.** Text and images go into stacks. Text that sits on top of a video goes into a frame, because a stack would push the text below the video [0:28](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=28s), [0:43](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=43s).
- **Scale overlay text with the device.** Pin the text to the bottom with a 24 px offset and set its width to relative 100% [1:03](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=63s), [1:36](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=96s).
- **Make even the desktop frame a stack**, then switch the text container to width fill and height fit [2:15](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=135s), [2:45](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=165s).
- **Stop content from overflowing.** Set the image container to wrap, width fill and height fit. Change the desktop frame from fixed height to fit content [3:11](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=191s).
- **Choose wrap or fill.** With fixed item widths (400 px for text items, 250 px for images) the row wraps. With fill, the items shrink instead [4:13](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=253s).
- **Override per breakpoint.** On tablet, change the image direction to vertical and add padding. Right-click "update primary" to push a change to desktop, or "reset overrides" to undo it [4:47](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=287s), [5:15](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=315s).
- **Cap images and add side padding.** Set a 500 px max width on images, and use horizontal padding only on containers [5:57](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=357s).
- **Tune the phone breakpoint**: video height, gaps, padding of 24 [6:11](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=371s).
- **Test both directions.** Scale the frame down and up. Scaling up exposed a video that was not pinned left. Setting the left pin to 0 fixed it [6:41](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=401s).

## Quotes

- "The first thing we want to do when creating any kind of responsive layout is to utilize stacks." [0:00](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=0s)
- "Remember that wrap only works if we have a fixed value for our width." [3:52](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=232s)
- "The desktop acts as the parent here." [4:47](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=287s)

## Links

- Business: [Framer](../businesses/framer.md)
- Person: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Responsive design](../topics/responsive-design.md), [No-code](../topics/no-code.md), [UI design](../topics/ui-design.md)
