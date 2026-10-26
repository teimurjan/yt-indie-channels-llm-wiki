---
type: source
title: "Figma Component Properties Made Simple (Variants, Boolean, Text)"
sources: [iaQ30m6gqhw]
updated: 2026-10-26
video_id: "iaQ30m6gqhw"
channel: timgabe
published_at: 2022-06-29
url: "https://www.youtube.com/watch?v=iaQ30m6gqhw"
raw: data/timgabe/md/2022-06-29_iaQ30m6gqhw_figma-component-properties-made-simple-variants-boolean-text.md
businesses: [figma]
people: [tim-gabe]
topics: [figma, design-systems, ui-design]
---

## Summary

Tim Gabe explains the four Figma component properties in under 10 minutes: variants, instance swap, text and boolean. He then builds one button component that uses all four. The result is a single button with size options, a swappable icon, editable text and toggles to show or hide the icon and text. Every control sits in the right sidebar. The video is a short tutorial with no business metrics.

## Key facts

- Figma components have four property types: variants, instances, text and boolean. [0:12](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=12s)
- Variants: versions of one component, such as large, medium and small buttons. [0:30](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=30s)
- Instance swap: switch a nested icon, such as check, chevron right or x, from a dropdown. [0:54](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=54s)
- Text property: edit a layer's text from the sidebar instead of inside the layer. [1:25](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=85s)
- Boolean: toggles that show or hide layers, such as "has icon" and "has text". [1:43](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=103s)
- A working file is linked in the video description.

## Tactics

- **Build the base.** Write the text, wrap it in auto layout, and add a fill, corner radius and text color. Then choose Create component and name it "Button". [2:10](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=130s)
- **Add an icon from your design system** into the button before you make variants. [2:45](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=165s)
- **Name variant properties clearly.** Figma defaults to "Property 1" with "Default" and "Variant 2". Rename the property to "Size" and the values to large, medium and small. [3:01](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=181s)
- **Apply each property to every variant.** An instance swap property set only on the large button does not appear on the small one. Add the existing property to each variant. [4:27](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=267s), [5:28](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=328s)
- **Text property default.** Name it "Text" and set the default value to "Button". [6:03](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=363s)
- **Booleans live in the layers section.** Create "has text" (default true) and a separate "has icon" (default false). Separate properties let users toggle them one at a time. [7:05](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=425s), [8:06](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=486s)

## Quotes

- "What does the boolean do? It lets you show and hide stuff." [7:05](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=425s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](../topics/figma.md), [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md)
