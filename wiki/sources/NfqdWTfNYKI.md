---
type: source
title: "3 Award Winning Website Animations (Figma Tutorial)"
sources: [NfqdWTfNYKI]
updated: 2026-10-26
video_id: "NfqdWTfNYKI"
channel: timgabe
published_at: 2023-02-16
url: "https://www.youtube.com/watch?v=NfqdWTfNYKI"
raw: data/timgabe/md/2023-02-16_NfqdWTfNYKI_3-award-winning-website-animations-figma-tutorial.md
businesses: [figma, drive-capital, starfades-international, apple, awwwards]
people: [tim-gabe]
topics: [motion-design, prototyping, ui-design, landing-pages]
---

# 3 Award Winning Website Animations (Figma Tutorial)

## Summary

Tim Gabe rebuilds three scroll animations from award-winning websites in Figma, using Smart Animate. The first is a text mask over media from Drive Capital. The second is a widening image mask with color-shifting text from Starfades International. The third is Apple's iMac 24 keyboard reveal. Each effect is a series of duplicated frames, where layers change position, size, opacity or rotation. Smart Animate tweens between the frames. He links the working Figma file.

## Key facts

- Drive Capital and Starfades International won awards on Awwwards for these animations. [0:38](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=38s), [6:09](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=369s)
- Video fills in Figma need a paid Pro plan, so his rebuild uses an image behind the mask (2023-02). [1:39](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=99s)
- Timings used: 800 ms for the first fade-in, and ease-out 300 ms for scroll steps and clicks. [5:44](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=344s), [10:13](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=613s), [15:09](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=909s)

## Tactics

- **Text mask (Drive Capital).** [2:40](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=160s), [3:41](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=221s)
  1. Make a black frame. Inside it, add a "container" frame with clip content on.
  2. Add the text and an image rectangle. Select both and use "Use as mask".
  3. Frame 1: container at 0% opacity and lower. Frame 2: visible. Frame 3: text moved up so the container clips it.
- **Fake scrolling.** Draw a scroll-bar rectangle and add an "on drag" Smart Animate interaction to the next frame. Copy the same bar to each frame with a reverse interaction. Copying the bar also copies its prototype settings, so you only change the target. [4:43](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=283s), [9:13](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=553s)
- **Widening image mask (Starfades).** Put an image in a clipping container. Stack a black copy and a white copy of the text, aligned on both axes. Set the white text's horizontal constraint to center. Then it stays put when the container grows. In the next frame, move the text down and widen only the container, not the image. Hold Option to resize from both sides. [7:10](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=430s), [8:12](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=492s), [9:13](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=553s)
- **Product reveal (Apple iMac 24).** Make four frames. Frame 1 scales up the keyboard. Frame 2 fades in the headline. Frame 3 moves the keyboard to reveal text hidden behind it. Frame 4 slides in a hand from 10 degrees of rotation to 0 degrees, with a finger on a key. [11:03](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=663s), [12:04](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=724s), [14:08](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=848s)
- **Click instead of drag for quick demos.** "On click" Smart Animate on each frame is the lazy way to preview a sequence. [14:08](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=848s)

## Quotes

- "You might be surprised by how many of these can actually be recreated in a tool like Figma." [0:00](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=0s)
- "It's important to know here that I don't increase the size of the image, it's just the container that masks the image." [9:13](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=553s)

## Links

- Businesses: [Figma](../businesses/figma.md), Drive Capital, Starfades International, [Apple](../businesses/apple.md), Awwwards
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Motion design](../topics/motion-design.md), [Prototyping](../topics/prototyping.md), [UI design](../topics/ui-design.md), [Landing pages](../topics/landing-pages.md)
