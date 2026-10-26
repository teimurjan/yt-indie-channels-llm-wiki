---
type: source
title: "Sticky Scroll Explained in 3 Minutes (Framer Tutorial)"
sources: [DRvge30wQFM]
updated: 2026-10-26
video_id: "DRvge30wQFM"
channel: timgabe
published_at: 2023-08-31
url: "https://www.youtube.com/watch?v=DRvge30wQFM"
raw: data/timgabe/md/2023-08-31_DRvge30wQFM_sticky-scroll-explained-in-3-minutes-framer-tutorial.md
businesses: [framer, awwwards, apple]
people: [tim-gabe]
topics: [framer, motion-design, no-code, ui-design]
---

# Sticky Scroll Explained in 3 Minutes (Framer Tutorial)

## Summary

Tim Gabe explains sticky scroll in Framer. Many award-winning animations on Awwwards and on Apple product pages rely on this effect. He gives four rules to remember, then builds a demo: a desktop stack, a 1,600px scroll container, visible overflow, and an image set to Sticky. A second, relative image shows that sticky items act like relative ones until they lock. This is the Framer version of his earlier Figma sticky-scroll tutorial.

## Key facts

- Four rules for sticky scroll in Framer: [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s)
  1. The parent must be a stack, or the Sticky option does not show.
  2. All parent layers need overflow set to visible.
  3. The height of the sticky object's parent sets the scroll area.
  4. Sticky positioning acts like relative positioning, except that it sticks.
- The demo scroll container is 1,600px tall. The desktop frame height is set to fit content. [1:20](https://www.youtube.com/watch?v=DRvge30wQFM&t=80s)

## Tactics

- **Make every parent a stack.** Click plus on Layout for the desktop frame. Then add an inner stack called "scroll container." [1:05](https://www.youtube.com/watch?v=DRvge30wQFM&t=65s)
- **Size the scroll area on the parent.** Give the scroll container a fixed height, here 1,600px. Set the desktop to fit content. [1:20](https://www.youtube.com/watch?v=DRvge30wQFM&t=80s)
- **Set overflow to visible** on both the scroll container and the desktop. [1:34](https://www.youtube.com/watch?v=DRvge30wQFM&t=94s)
- **Add the sticky object.** Add an image frame with a radius, change its position from Relative to Sticky, and add a top margin. [1:43](https://www.youtube.com/watch?v=DRvge30wQFM&t=103s)
- **Test, then add content.** Preview to see it lock at the top. A duplicate image set to Relative sits beside it in the stack and scrolls past. [2:00](https://www.youtube.com/watch?v=DRvge30wQFM&t=120s), [2:10](https://www.youtube.com/watch?v=DRvge30wQFM&t=130s)
- **Learn stacks first.** To combine sticky items with other objects, you need to know how stacks lay out children. [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s)
- **Combine with other animations** for richer scroll effects. [2:40](https://www.youtube.com/watch?v=DRvge30wQFM&t=160s)

## Quotes

- "Some of the most amazing animations you see on Awwwards and on product pages of design leaders like Apple rely on one simple effect: sticky scroll." [0:00](https://www.youtube.com/watch?v=DRvge30wQFM&t=0s)
- "Sticky positioning behaves like relative positioning but with the obvious difference that it sticks." [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s)

## Links

- Businesses: [Framer](../businesses/framer.md), Awwwards, [Apple](../businesses/apple.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Motion design](../topics/motion-design.md), [No-code](../topics/no-code.md), [UI design](../topics/ui-design.md)
