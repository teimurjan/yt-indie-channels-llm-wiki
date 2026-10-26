---
type: source
title: "3 Tricks for Amazing Button Animations (Framer Tutorial)"
sources: [inkIfPtmE9s]
updated: 2026-10-26
video_id: "inkIfPtmE9s"
channel: timgabe
published_at: 2023-11-09
url: "https://www.youtube.com/watch?v=inkIfPtmE9s"
raw: data/timgabe/md/2023-11-09_inkIfPtmE9s_3-tricks-for-amazing-button-animations-framer-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, ui-design, micro-interactions]
---

## Summary

Tim Gabe builds three animated buttons in Framer for beginners. All three use one technique: make the button a component, add a second state (hover, pressed or a variant), and let Framer animate between the states. The first button is a gradient button with a background blur and a "shine" that sweeps across on hover. The second is a 3D button that sinks on press. The third is a like/unlike button with a GIF that rises on hover and a click variant.

## Key facts

- Core method: one component, two states, and Framer animates the change on hover, click or both. [0:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=0s)
- Button 1 values: white border at about 25% opacity, background blur of 12, shine blur of 6. [1:54](https://www.youtube.com/watch?v=inkIfPtmE9s&t=114s) [3:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=180s) [3:28](https://www.youtube.com/watch?v=inkIfPtmE9s&t=208s)
- Button 2 values: radius 16 to 20, inner shadow at -8/-8 with blur 4 to 6 and 15% white. Outer stack bottom padding is 6 at rest. In the pressed state, padding drops to 2 and the shadow fades to 5%. [6:05](https://www.youtube.com/watch?v=inkIfPtmE9s&t=365s) [6:56](https://www.youtube.com/watch?v=inkIfPtmE9s&t=416s) [8:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=480s)
- Button 3 values: Satoshi Bold text, background blur of 24, a pasted GIF. [9:21](https://www.youtube.com/watch?v=inkIfPtmE9s&t=561s)
- Preview shortcut: Cmd+P on Mac, Ctrl+P on Windows. [12:53](https://www.youtube.com/watch?v=inkIfPtmE9s&t=773s)
- The working file is linked in the description at timgabe.com. [0:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=0s)

## Tactics

- **Glass shine button.** Put a gradient "inner button" inside a container. Add a text-free copy behind it with a blur filter. Set the container overflow to visible. [1:02](https://www.youtube.com/watch?v=inkIfPtmE9s&t=62s) [2:27](https://www.youtube.com/watch?v=inkIfPtmE9s&t=147s) [3:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=180s)
- **Shine layer.** Add a tilted, blurred frame inside the inner button so it clips. At rest it sits off to the left. On hover it moves to the right, and the blur behind grows. [3:28](https://www.youtube.com/watch?v=inkIfPtmE9s&t=208s) [4:22](https://www.youtube.com/watch?v=inkIfPtmE9s&t=262s) [5:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=300s)
- **Tune the spring.** Damping, stiffness and mass in the spring transition change the feel. [5:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=300s)
- **3D press button.** Wrap the button stack in a darker stack with bottom padding to fake depth. Use an inner shadow for a top highlight. In the pressed state, cut the bottom padding and fade the shadow. Set stacks to "fit content" so padding works. [6:56](https://www.youtube.com/watch?v=inkIfPtmE9s&t=416s) [7:32](https://www.youtube.com/watch?v=inkIfPtmE9s&t=452s) [8:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=480s)
- **Like/unlike toggle.** Stack "like" and "unlike" text, a blur and a GIF in one frame, and hide the GIF below. On hover, "like" moves up and out, and the GIF and blur rise. For the click, use a new variant, not a pressed state. Connect the two variants with tap events. [11:51](https://www.youtube.com/watch?v=inkIfPtmE9s&t=711s) [13:10](https://www.youtube.com/watch?v=inkIfPtmE9s&t=790s) [14:13](https://www.youtube.com/watch?v=inkIfPtmE9s&t=853s)
- **Name layers.** Clear names such as "inner button", "BG blur" and "shine" make state edits easier. [2:27](https://www.youtube.com/watch?v=inkIfPtmE9s&t=147s) [10:23](https://www.youtube.com/watch?v=inkIfPtmE9s&t=623s)

## Quotes

- "This is one of the coolest things with Framer: how creative you can be with micro interactions like these." [0:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=0s)
- "For the hover state, there's the magic." [4:22](https://www.youtube.com/watch?v=inkIfPtmE9s&t=262s)
- "You can even nest components to create all forms of creative interactions." [14:13](https://www.youtube.com/watch?v=inkIfPtmE9s&t=853s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [UI design](../topics/ui-design.md), [Micro-interactions](../topics/micro-interactions.md)
