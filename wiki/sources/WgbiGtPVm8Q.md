---
type: source
title: "Animated Dropdown Menu with Variants in Figma (2022 Update)"
sources: [WgbiGtPVm8Q]
updated: 2026-10-26
video_id: "WgbiGtPVm8Q"
channel: timgabe
published_at: 2022-09-08
url: "https://www.youtube.com/watch?v=WgbiGtPVm8Q"
raw: data/timgabe/md/2022-09-08_WgbiGtPVm8Q_animated-dropdown-menu-with-variants-in-figma-2022-update.md
businesses: [figma]
people: [tim-gabe]
topics: [figma, prototyping, atomic-design, design-systems, ui-design]
---

# Animated Dropdown Menu with Variants in Figma (2022 Update)

## Summary

Tim Gabe shows how to build an animated, interactive dropdown menu in Figma in 3 steps. First, build the smallest parts (atoms): the dropdown field and a menu item. Second, add hover and active states as variants with "while hovering" and Smart Animate. Third, combine them into one dropdown component with closed and open variants for each item. Wire the connections before you duplicate variants, to save time.

## Key facts

- The end result has a hover state on the field, hover states on each item, and an active state on the chosen item. The chosen value replaces the placeholder text. [0:00](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=0s)
- Field specs: auto layout with "space between", a fill, rounded corners, padding, a stroke, 200 px width and a fixed height on the 8-point grid. [1:04](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=64s), [1:49](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=109s)
- Menu item specs: auto layout, 200 px width, 16 px padding, a background fill and darker text. [1:49](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=109s)
- States: a "state" property with default, hover (lower opacity) and active (75% opacity). [2:40](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=160s)
- The list uses 3 menu items, 4 px rounding, clipped content and 8 px spacing. [4:21](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=261s)

## Tactics

- **Start with atoms.** Build the smallest components first, then compose them. This is how Tim plans any animation. [0:00](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=0s), [0:59](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=59s)
- **Interactive states on the atoms.** Set "while hovering" with Smart Animate on the field and on each menu item. Keep the active state as a component property that you set from the sidebar, with no interaction. [3:31](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=211s)
- **Map the variant flow.** Variants are: closed with no value, open with no value, closed with item N, and open with item N active. A click on an item in any open variant goes to the matching closed variant. A click on a closed field goes to its open variant. [5:05](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=305s), [6:06](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=366s)
- **Connect, then duplicate.** Wire all interactions on one open variant, then duplicate it. The copies keep the connections. Only the active item and the text change. The time saved grows with prototype size. [6:59](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=419s), [8:02](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=482s)
- **Target the inner container.** Put the click interaction on the dropdown container, not on the outer variant frame. [8:54](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=534s)
- **Test in a frame.** Place the component in a test frame with a flow starting point and play it. [3:31](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=211s), [8:54](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=534s)
- Related skills he points to: auto layout, the 8-point grid, interactive components, component properties and Smart Animate. [1:04](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=64s), [9:44](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=584s)

## Quotes

- "You create the base components first, the smallest atoms." [0:00](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=0s)
- "That tiny bit of time becomes more time the more complex your prototypes are." [8:02](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=482s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](../topics/figma.md), [Prototyping](../topics/prototyping.md), Atomic design, [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md)
