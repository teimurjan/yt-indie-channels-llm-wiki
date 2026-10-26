---
type: source
title: "Framer Scroll Animations For Beginners"
sources: [HHnlp_Bj0J4]
updated: 2026-10-26
video_id: "HHnlp_Bj0J4"
channel: timgabe
published_at: 2023-08-24
url: "https://www.youtube.com/watch?v=HHnlp_Bj0J4"
raw: data/timgabe/md/2023-08-24_HHnlp_Bj0J4_framer-scroll-animations-for-beginners.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, motion-design, ui-design]
---

# Framer Scroll Animations For Beginners

## Summary

Tim Gabe builds a small scroll-driven layout in Framer to teach its four scroll effects. The effects are scroll speed, scroll animations, scroll transforms and scroll variants. The layout has a hero with an image blended over large text and three "Get inspired" text sections. A sticky icon card swaps its icon as each section reaches the middle of the screen. He says these tools cover most animations you need in Framer. A finished working file is on his site.

## Key facts

- Hero frame: height 100vh, fill, max width 1200px, as a stack ([0:28](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=28s)).
- Hero image: 500 x 500px, large radius, position absolute, centered, blend mode "lighten" ([1:00](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=60s)).
- The sticky component sits 160px from the top ([4:01](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=241s)).
- Scroll speed 150 on the image makes parallax, because other elements move at 100 ([4:34](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=274s), [5:02](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=302s)).
- The scroll transform grows text from scale 1 to scale 2 ([6:58](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=418s)).

## Tactics

- **Layout.** Make a scroll container (stack, fill width, max 1200px, height fit). Inside it, put three text containers in a vertical stack. Place an icon component beside them in a horizontal stack, aligned to the top ([1:23](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=83s), [1:50](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=110s), [2:28](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=148s)).
- **Icon component.** Stack the icons with zero gap inside a masked frame with radius and a soft shadow. Make it a component with three variants. Each variant shifts the stack to show the next icon ([2:59](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=179s), [3:38](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=218s)).
- **Sticky needs visible overflow.** Set every parent stack's overflow to visible. Otherwise sticky positioning fails ([4:14](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=254s)).
- **Scroll speed.** This is the simplest effect. It changes how fast one element scrolls and creates parallax ([4:34](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=274s)).
- **Scroll animation.** A trigger starts one single animation ([5:02](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=302s), [5:25](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=325s), [6:26](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=386s)):
  1. Give each text container a scroll section name: section 1, 2 and 3.
  2. On a text field, add a scroll animation with trigger "section in view".
  3. Set the viewport point to center and replay in both directions.
  4. Use the "fade in" preset.
  5. Copy the effect, paste it on the other fields, and change their sections.
- **Scroll transform.** It changes an element continuously as you scroll. Set the "from" state to opacity 1 and scale 1, and the "to" state to scale 2 ([6:58](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=418s)).
- **Scroll variants.** They swap a component's variants while you scroll. Use trigger "section in view" at center, so it lines up with the text fades. Map section 1 to variant 1, section 2 to variant 2 and section 3 to variant 3 ([8:06](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=486s)).

## Quotes

- "In this beginner tutorial you will learn most of the tools needed to create just about any kind of animation inside of Framer." ([0:00](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=0s))
- "While scroll animations perform one single animation action, scroll transform transforms objects as we scroll." ([6:58](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=418s))

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Motion design](../topics/motion-design.md), [UI design](../topics/ui-design.md)
