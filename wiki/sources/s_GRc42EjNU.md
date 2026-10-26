---
type: source
title: "Master Figma's Sticky Scroll in 4 Minutes"
sources: [s_GRc42EjNU]
updated: 2026-10-26
video_id: "s_GRc42EjNU"
channel: timgabe
published_at: 2023-03-30
url: "https://www.youtube.com/watch?v=s_GRc42EjNU"
raw: data/timgabe/md/2023-03-30_s_GRc42EjNU_master-figma-s-sticky-scroll-in-4-minutes.md
businesses: [figma]
people: [tim-gabe]
topics: [figma, prototyping, ui-design]
---

# Master Figma's Sticky Scroll in 4 Minutes

## Summary

Tim Gabe shows how to build a sticky-scroll prototype in Figma in three steps. First, give the outermost frame vertical overflow. Next, wrap each sticky layer in auto layout, give it a top buffer, and set its prototype position to Sticky. Last, shorten the preview frame and play the flow. Sticky scroll is a common web and mobile pattern, and this was Figma's way to prototype it. The working file is on his site.

## Key facts

- By default a Figma frame has no scrolling. You must set overflow to vertical on the parent frame. [0:15](https://www.youtube.com/watch?v=s_GRc42EjNU&t=15s)
- The sticky setting is in each layer's prototype settings. Position changes from "Scroll with parent" to "Sticky." [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s)
- In the demo, the text wrapper is 400px tall and the button and image wrappers are 560px. The extra 160px puts the button below the text. [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s)
- The preview frame is duplicated and set to 900px high to test the scroll. [3:05](https://www.youtube.com/watch?v=s_GRc42EjNU&t=185s)

## Tactics

- **Step 1: Configure the parent frame.** Select the outermost desktop or mobile frame. In Prototype, set Overflow to Vertical. [0:15](https://www.youtube.com/watch?v=s_GRc42EjNU&t=15s)
- **Step 2: Wrap each sticky layer.** Put each sticky element, such as text, a button or an image, in its own auto layout. The space above the element is the buffer from the top of the screen at the moment it locks. [1:01](https://www.youtube.com/watch?v=s_GRc42EjNU&t=61s)
- **Prefer fixed height over padding.** You can use top padding, but Tim prefers a fixed wrapper height with the element at the bottom. This gives exact pixel control. [1:01](https://www.youtube.com/watch?v=s_GRc42EjNU&t=61s), [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s)
- **Stack sticky items by height.** Make lower items' wrappers taller, so each one locks below the one above. [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s)
- **Step 3: Set Sticky and test.** Set each wrapped layer to Sticky. Duplicate the frame, set the height to 900px, add a flow starting point and press play. [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s), [3:05](https://www.youtube.com/watch?v=s_GRc42EjNU&t=185s)

## Quotes

- "Sticky scroll has been a common design pattern in the web and mobile design world for years." [0:00](https://www.youtube.com/watch?v=s_GRc42EjNU&t=0s)
- "This distance here is going to act as the buffer to the top of my frame." [1:01](https://www.youtube.com/watch?v=s_GRc42EjNU&t=61s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](../topics/figma.md), [Prototyping](../topics/prototyping.md), [UI design](../topics/ui-design.md)
