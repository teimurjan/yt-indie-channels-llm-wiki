---
type: source
title: "Framer Parallax Trick (Loop + Scroll Speed Tutorial)"
sources: [V-xm5c_XRWU]
updated: 2026-10-26
video_id: "V-xm5c_XRWU"
channel: timgabe
published_at: 2023-11-16
url: "https://www.youtube.com/watch?v=V-xm5c_XRWU"
raw: data/timgabe/md/2023-11-16_V-xm5c_XRWU_framer-parallax-trick-loop-scroll-speed-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, motion-design, ui-design, responsive-design]
---

## Summary

Tim Gabe builds a parallax scroll section in Framer. He uses only built-in effects, with no complex frame structures. The section has a particles component, three rotated image cards with a blurred copy behind each for a glass glow, and a text stack. Each card uses its own Scroll Speed and a slow 360° Loop rotation. A Scroll Section trigger fades the text in. The working file is free on his site.

## Key facts

- Layout: a section with a particles component, three "content" frames (an image plus a blurred copy), and a stack of text fields and a button. [0:00](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=0s)
- The particles component comes from framer.supply. It is pinned to all sides and has a 0% backdrop, yellow "fire" particles, and 30% opacity. [2:30](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=150s), [3:14](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=194s), [5:33](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=333s)
- Glass glow: the blur copy uses a blur filter of 24. Blur hurts site performance, so use it with care. [4:49](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=289s)
- Scroll Speed values for the three images: 130, 20 and 140. [10:03](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=603s), [11:00](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=660s)
- Loop rotation: 360° over 65 seconds instead of the default 1 second. [12:04](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=724s)
- Text enter animation: 0% opacity, scale 1, slight rotation, 16 px offset from the bottom. A tuned spring uses stiffness 300 plus extra damping and mass. [15:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=951s), [16:53](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=1013s)

## Tactics

- **Lock background layers.** Press Cmd+L (Ctrl+L on Windows) to stop accidental selection. [3:14](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=194s), [4:03](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=243s)
- **Let the blur spill out.** Set the container overflow to visible, so the blur extends past the frame. [5:33](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=333s)
- **Pin for responsiveness.** Pin each card to the nearest edges with offsets (for example -96 to the right), and give each a slight tilt. [6:26](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=386s), [7:05](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=425s)
- **Stack the floating text.** Wrap loose text in a stack set to fit content, with a gap of 24 to 32. [8:02](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=482s)
- **Start scroll speed at the right time.** Change the trigger from "current" to "scroll", and start 96 px from the top of the viewport. Then the images do not leave the frame early. [11:00](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=660s)
- **Trigger text with a named Scroll Section.** Give the section a name. Set the text animation to "section in view" with the top of the viewport as the trigger. [13:06](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=786s), [14:19](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=859s)
- **Copy effects in bulk.** Right-click an effect, copy it, select the other elements, and use "paste effects". [15:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=951s)
- **Fix cut-off glows.** Stacks hide overflow by default. Set the text stack overflow to visible. [17:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=1071s)

## Quotes

- "It does impact the performance of your website but it looks so God darn cool." [4:49](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=289s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Motion design](../topics/motion-design.md), [UI design](../topics/ui-design.md), [Responsive design](../topics/responsive-design.md)
