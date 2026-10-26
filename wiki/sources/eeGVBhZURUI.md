---
type: source
title: "Figma Interactive Components For Beginners (2022 Tutorial)"
sources: [eeGVBhZURUI]
updated: 2026-10-26
video_id: "eeGVBhZURUI"
channel: timgabe
published_at: 2022-08-04
url: "https://www.youtube.com/watch?v=eeGVBhZURUI"
raw: data/timgabe/md/2022-08-04_eeGVBhZURUI_figma-interactive-components-for-beginners-2022-tutorial.md
businesses: [figma]
people: [tim-gabe]
topics: [ui-design, prototyping, design-systems, design-tools]
---

## Summary

Tim Gabe shows how to build interactive components in Figma. He builds a button with hover states, then a tab item with default, hover and active states. Last, he nests the tabs in a parent component, so a click on one tab makes the others inactive. One interactive component replaces many duplicate prototype frames and can be reused across pages and files. The video is a how-to, not a business story, so it has no business metrics.

## Key facts

- Prerequisites: Tim's videos on Smart Animate and component properties. He also uses auto layout. [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s)
- Why use interactive components: one frame replaces about 16 to 24 prototype frames. [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s)
- Components can be reused in the same file, on other pages and in other files through the Assets panel. [1:17](https://www.youtube.com/watch?v=eeGVBhZURUI&t=77s)
- Transition used: Smart Animate at 150 ms. [2:41](https://www.youtube.com/watch?v=eeGVBhZURUI&t=161s)

## Tactics

- **Use a component set, not separate components.** Put the states in one component set. A search in Assets then returns one instance, not one per state. [1:39](https://www.youtube.com/watch?v=eeGVBhZURUI&t=99s)
- **Name the variant property.** Rename the default property to "state" with values "default" and "hover". The interactions then read clearly. [2:41](https://www.youtube.com/watch?v=eeGVBhZURUI&t=161s)
- **Button hover:** add "while hovering, change to state hover" with Smart Animate 150 ms. Add "on mouse leave, change to default". The hover state lowers opacity. [2:41](https://www.youtube.com/watch?v=eeGVBhZURUI&t=161s)
- **Test it:** drag an instance into a frame, add a flow starting point, and press play. [3:42](https://www.youtube.com/watch?v=eeGVBhZURUI&t=222s)
- **Tab item with three states:** default (underline at 0 opacity, faded text), hover (faint underline), and active (full underline). Hover goes to hover, and a click goes to active. [3:52](https://www.youtube.com/watch?v=eeGVBhZURUI&t=232s), [4:52](https://www.youtube.com/watch?v=eeGVBhZURUI&t=292s)
- **Nest for tab groups:** place three tab instances in an auto layout called "tabs" and make it a component. Add one variant for each active tab. Wire a click on each tab to the variant where that tab is active. [6:06](https://www.youtube.com/watch?v=eeGVBhZURUI&t=366s), [7:07](https://www.youtube.com/watch?v=eeGVBhZURUI&t=427s)
- **Reuse in real screens:** pull the tabs and button from Assets into another page and prototype the full screen. [8:08](https://www.youtube.com/watch?v=eeGVBhZURUI&t=488s)

## Quotes

- "In this video you will learn how to create interactive components like a pro." [0:00](https://www.youtube.com/watch?v=eeGVBhZURUI&t=0s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [UI design](../topics/ui-design.md), [Prototyping](../topics/prototyping.md), [Design systems](../topics/design-systems.md), [Design tools](../topics/design-tools.md)
