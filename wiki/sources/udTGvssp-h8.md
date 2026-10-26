---
type: source
title: "Card Layouts in Framer (Grid Tutorial)"
sources: [udTGvssp-h8]
updated: 2026-10-26
video_id: "udTGvssp-h8"
channel: timgabe
published_at: 2023-08-10
url: "https://www.youtube.com/watch?v=udTGvssp-h8"
raw: data/timgabe/md/2023-08-10_udTGvssp-h8_card-layouts-in-framer-grid-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, grid-systems, responsive-design, auto-layout, ui-design]
---

# Card Layouts in Framer (Grid Tutorial)

## Summary

Tim Gabe builds a responsive card layout in Framer in about 3 minutes. He first builds one card with stacks and exact sizing rules, so it does not break inside the grid. He then puts copies of the card in a Framer grid on the desktop breakpoint and adds tablet and phone breakpoints. Last, he changes column counts per breakpoint and makes some cards span two columns, which gives a bento-style layout.

## Key facts

- The card is a frame named "card" with a corner radius. Inside are an image frame and a text stack named "text container". [0:26](https://www.youtube.com/watch?v=udTGvssp-h8&t=26s)
- Card sizing: fixed width, fit-content height. Image: fill width, fixed height. Text container: fill width, fit-content height, with padding. [0:26](https://www.youtube.com/watch?v=udTGvssp-h8&t=26s), [1:17](https://www.youtube.com/watch?v=udTGvssp-h8&t=77s)
- Grid settings: height set to fit content in the advanced settings, and a 24 px gap and padding. [2:18](https://www.youtube.com/watch?v=udTGvssp-h8&t=138s)
- The working file is on timgabe.com as "bento grid layout". [0:00](https://www.youtube.com/watch?v=udTGvssp-h8&t=0s)

## Tactics

- **Build the grid items first.** Make the card before the grid. Stacks and set sizing keep the card in shape inside the grid. [0:11](https://www.youtube.com/watch?v=udTGvssp-h8&t=11s)
- **Use stacks inside the card.** Put the headline and body text in a left-aligned stack with a small gap. Turn the whole card into a stack too, then remove its gap. [0:26](https://www.youtube.com/watch?v=udTGvssp-h8&t=26s), [1:17](https://www.youtube.com/watch?v=udTGvssp-h8&t=77s)
- **Style the text for hierarchy.** Set the headline to medium weight. Make the body smaller and lower its opacity. [0:26](https://www.youtube.com/watch?v=udTGvssp-h8&t=26s)
- **Wrap the grid in a page stack.** Turn the desktop frame into a stack with a light gray background. Add a frame inside it and turn that frame into a grid. Then paste the cards into the grid. [1:45](https://www.youtube.com/watch?v=udTGvssp-h8&t=105s)
- **Set fit content on every level.** Set the desktop frame and the grid to fit-content height. If the cards look squeezed, change the grid height from fixed to fit content in the advanced settings. [1:45](https://www.youtube.com/watch?v=udTGvssp-h8&t=105s), [2:18](https://www.youtube.com/watch?v=udTGvssp-h8&t=138s)
- **Add breakpoints from the plus sign.** Add a tablet breakpoint from desktop, then a phone breakpoint from tablet. [2:18](https://www.youtube.com/watch?v=udTGvssp-h8&t=138s)
- **Change columns per device.** For example, use 3 columns on desktop, 2 on tablet and 1 on phone. [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)
- **Make a bento layout with span.** Select one card and set its span to 2 columns. With 3 columns per row, a last card that spans 2 completes the bento pattern. [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)

## Quotes

- "Three columns per row, two columns per row, one column per row." (on picking a layout per device) [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Grid systems](../topics/grid-systems.md), [Responsive design](../topics/responsive-design.md), [Auto layout](../topics/auto-layout.md), [UI design](../topics/ui-design.md)
