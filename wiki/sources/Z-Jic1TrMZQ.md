---
type: source
title: "Nested Components in Framer (Beginner Tutorial)"
sources: [Z-Jic1TrMZQ]
updated: 2026-10-26
video_id: "Z-Jic1TrMZQ"
channel: timgabe
published_at: 2023-11-02
url: "https://www.youtube.com/watch?v=Z-Jic1TrMZQ"
raw: data/timgabe/md/2023-11-02_Z-Jic1TrMZQ_nested-components-in-framer-beginner-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, micro-interactions, motion-design, design-systems, no-code]
---

# Nested Components in Framer (Beginner Tutorial)

## Summary

Tim Gabe builds a tabbed gallery in Framer from two small components: a tab and an image. Each small component has its own hover state, so the tabs highlight and the image shows a moving "shine". He nests both in a parent component with three variants, one per tab: Witcher, Harry Potter and Batman. A click on a tab switches the variant. The images and text then slide and fade into place. The working file is linked in the description.

## Key facts

- The final component combines two child components. Nesting lets several elements keep their own micro-interactions. [0:00](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=0s), [0:17](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=17s)
- Image component size: 960 × 538 px. The shine layer uses a blur of 24. [2:59](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=179s), [3:50](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=230s)
- Spacing: a 16 px gap and padding in the tab bar. A 56 px gap and a 56 px radius on the parent stack. [6:17](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=377s), [7:49](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=469s)
- Transition damping of 140 makes the image hover smoother. [5:49](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=349s)

## Tactics

- **Build the tab component.** Make a text layer and add a stack set to fit content. Add padding, rounding and a soft shadow. Fill and shadow start at 0% opacity. [0:53](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=53s)
- **Give it hover and active variants.** Hover sets the fill to 100% and the shadow to 15%. Add a second variant with the same look and name it "Active". Rename the first variant "Default". [1:58](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=118s)
- **Build the image component with a shine.** An image container holds the picture. A rotated, blurred and faded frame named "shine" sits off to the left. On hover, the image scales up and the shine moves across it. [2:59](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=179s), [4:48](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=288s)
- **Stack the slides inside a clipped container.** Duplicate the image twice in a vertical stack. Wrap the stack in an absolute "inner container". To change slides, slide the inner container up. [9:01](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=541s), [10:03](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=603s)
- **Set overflow to visible on the parent.** Without it, the shadow on the image container does not show. [9:01](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=541s)
- **Do the same for the text.** Stack three text blocks in a fixed-height container with "start" distribution. Wrap them in an absolute stack, so each variant slides the text up. [11:50](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=710s), [18:00](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=1080s)
- **Edit children in place.** Double-click into a nested tab to change its padding to 20 and its radius. Use the breadcrumb to go back. [13:45](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=825s), [14:30](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=870s)
- **Wire tabs to variants.** Each tab click goes to its variant. Reconnect the tab of the current variant to itself too. In each variant, set the matching tab to Active and the others to Default at 0.5 opacity. [14:30](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=870s), [15:01](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=901s), [15:51](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=951s)
- **Change content through component props.** Each image is its own component instance, so you can swap its picture in each variant. [16:59](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=1019s)
- **Fade hidden text.** Set hidden text blocks to 0% opacity for a fade. Changes on the primary variant flow to the other variants, so check each one after. [15:51](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=951s), [18:46](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=1126s), [19:22](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=1162s)

## Quotes

- "Stacks upon stacks in this game, people." [7:49](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=469s)
- "Every change we make to the primary kind of affects these ones, so keep that in mind." [15:51](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=951s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Micro-interactions](../topics/micro-interactions.md), [Motion design](../topics/motion-design.md), [Design systems](../topics/design-systems.md), [No-code](../topics/no-code.md)
