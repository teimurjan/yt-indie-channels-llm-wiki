---
type: source
title: "How to Recreate Amazing Text Animations in Figma"
sources: [0Lhu6kYOCx0]
updated: 2026-10-26
video_id: "0Lhu6kYOCx0"
channel: timgabe
published_at: 2023-02-02
url: "https://www.youtube.com/watch?v=0Lhu6kYOCx0"
raw: data/timgabe/md/2023-02-02_0Lhu6kYOCx0_how-to-recreate-amazing-text-animations-in-figma.md
businesses: [figma]
people: [tim-gabe]
topics: [figma, motion-design, prototyping, ui-design]
---

# How to Recreate Amazing Text Animations in Figma

## Summary

Tim Gabe shows how to rebuild three common web text animations in Figma: a domino reveal, an elevator flip and a masked swap. One technique drives all three. Put the text in a frame with "clip content" on. Make each state a variant in a component set. Then link the variants with "after delay" and Smart Animate. The Figma file is free in the video description.

## Key facts

- The three effects are domino, elevator and masked. [0:46](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=46s)
- Each transition uses Smart Animate at 500 ms with an "after delay" trigger of 1 ms, so no click or hover is needed. [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s), [5:47](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=347s)
- The domino and elevator effects need 2 states. The masked effect needs 4 states. [1:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=101s), [6:20](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=380s), [7:21](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=441s)

## Tactics

- **Clip the content.** The most important setting is "clip content" on the frame that holds the text. Text outside the frame then stays hidden. [2:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=161s)
- **Use component sets for states.** Each animation state is a variant. Prototype links between variants loop the animation. [1:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=101s), [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s)
- **Domino effect.** Duplicate the frame and move each letter down into the container in the second state. Smart Animate reveals the letters in sequence. [1:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=101s)
- **Elevator effect.** Put two text layers in one auto layout, with the second text upside down above the frame. In state two, move the auto layout so the second text shows. One auto layout means you move only one object. [4:43](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=283s)
- **Masked effect.** State one shows the old text. In state two a block covers it. State three swaps in the new text, and state four removes the block. Then link back to state one. [6:20](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=380s), [7:21](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=441s)
- **Place an instance in the flow.** Drop the first variant into the main frame to preview the loop. [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s), [8:24](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=504s)

## Quotes

- "One of the most commonly animated elements on the web is text." [0:00](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=0s)
- "The most important point with these kinds of animations is that we add clip content." [2:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=161s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](../topics/figma.md), [Motion design](../topics/motion-design.md), [Prototyping](../topics/prototyping.md), [UI design](../topics/ui-design.md)
