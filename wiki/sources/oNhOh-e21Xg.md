---
type: source
title: "Fancy Button Hovers For Figma Beginners in 2023"
sources: [oNhOh-e21Xg]
updated: 2026-10-26
video_id: "oNhOh-e21Xg"
channel: timgabe
published_at: 2022-12-15
url: "https://www.youtube.com/watch?v=oNhOh-e21Xg"
raw: data/timgabe/md/2022-12-15_oNhOh-e21Xg_fancy-button-hovers-for-figma-beginners-in-2023.md
businesses: [figma]
people: [tim-gabe]
topics: [prototyping, motion-design, design-systems, ui-design]
---

## Summary

Tim Gabe shows a short way to build a button hover effect in Figma. On hover, the label slides out downward, a new label drops in from the top, and a colored circle grows to fill the button. The method has five steps. Build the button with Auto Layout. Design the hover end state. Make a default copy. Combine both into a component set. Add a "While hovering" Smart Animate interaction. Because the effect lives in the component set, every instance of the button reuses it.

## Key facts

- Tools: Figma Auto Layout (Shift+A), absolute position, clip content, component sets and Smart Animate ([0:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=0s), [2:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=120s)).
- Interaction: trigger "While hovering", animation Smart Animate, easing ease in and out, duration 200ms ([4:41](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=281s), [5:42](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=342s)).
- The free working file is on timgabe.com (see the description).

## Tactics

- **Design the end state first.** Build the hovered state, then duplicate it and move the elements back to make the default. This keeps both states in the same layer structure ([0:59](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=59s), [3:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=180s)).
- **Use absolute position inside Auto Layout.** Auto Layout stacks its children. To move both labels and the circle freely, set each one to absolute position ([2:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=120s)).
- **Layer order trick.** Put the circle at the top of the layer list so it renders at the bottom, behind the text ([3:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=180s)).
- **Clip content.** Turn on clip content on the button so the off-button label and circle stay hidden ([3:00](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=180s)).
- **Always use a component set.** Without a component set, the prototype does not scale and you cannot reuse it in other places ([4:05](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=245s)).
- **Test in a flow.** Paste an instance into a desktop frame, add a flow starting point and play the prototype ([5:51](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=351s)).

## Quotes

- "If you don't do this step you will have a prototype that isn't going to be very scalable." ([4:05](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=245s))

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Prototyping](../topics/prototyping.md), [Motion design](../topics/motion-design.md), [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md)
