---
type: source
title: "Figma Constraints & Resizing Made SIMPLE"
sources: [3xGJ80UpVeM]
updated: 2026-10-26
video_id: "3xGJ80UpVeM"
channel: timgabe
published_at: 2022-06-12
url: "https://www.youtube.com/watch?v=3xGJ80UpVeM"
raw: data/timgabe/md/2022-06-12_3xGJ80UpVeM_figma-constraints-resizing-made-simple.md
businesses: [figma]
people: [tim-gabe]
topics: [figma, responsive-design, prototyping, ui-design]
---

## Summary

Tim Gabe gives a 10-minute beginner tutorial on Figma constraints. A constraint sets how a child element reacts to a size change of its parent frame. He walks through each option, then covers "clip content" and scroll prototypes. He also shows "fix position when scrolling". He ends by making a simple page (navigation, content rows, footer) responsive with constraints alone.

## Key facts

- Constraints live in the right sidebar. They set a horizontal anchor (left, right, left and right, center, scale) and a vertical anchor (top, bottom, top and bottom, center, scale) [0:13](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=13s).
- "Left and right" or "top and bottom" stretches the child and keeps a fixed pixel distance to each side. In his test the gap stayed at 813 px [2:15](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=135s), [3:17](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=197s).
- "Scale" turns the distances into percentages, so the pixel gap changes as the frame grows [3:17](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=197s).
- "Clip content" is a frame setting, not a constraint. It hides children that sit outside the frame [4:19](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=259s).
- A scroll prototype needs a flow starting point and content larger than the frame. Clip content must be on [5:00](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=300s), [6:02](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=362s).

## Tactics

- **Picture strings.** Think of each constraint as a string that ties the child to a side of the parent. On resize, the child holds on to those sides [0:13](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=13s), [1:14](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=74s).
- **Choose stretch or scale on purpose.** Use left and right for fixed margins. Use scale for proportional gaps [3:17](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=197s).
- **Pin sticky elements.** "Fix position when scrolling" keeps an element in place while the rest of the prototype scrolls [7:19](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=439s).
- **Make a page responsive in three steps.** Set the top navigation to left and right plus top. Set content rows to left and right plus top. Set the footer to left and right plus bottom [8:21](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=501s).
- **Pair with auto layout.** For more complex layouts he points to his separate auto layout video [9:22](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=562s).

## Quotes

- "This child is gonna hold on to the left and to the top." [1:14](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=74s)
- "In order for us to create a scrolling experience in Figma we need to clip the content." [6:02](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=362s)
- "A responsive layout, super easy." [8:21](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=501s)

## Links

- Business: [Figma](../businesses/figma.md)
- Person: [Tim Gabe](../people/tim-gabe.md)
- Topics: [figma](../topics/figma.md), [responsive-design](../topics/responsive-design.md), [prototyping](../topics/prototyping.md), [ui-design](../topics/ui-design.md)
