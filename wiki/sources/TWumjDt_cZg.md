---
type: source
title: "Export Figma Text & Color Styles To Framer"
sources: [TWumjDt_cZg]
updated: 2026-10-26
video_id: "TWumjDt_cZg"
channel: timgabe
published_at: 2023-01-05
url: "https://www.youtube.com/watch?v=TWumjDt_cZg"
raw: data/timgabe/md/2023-01-05_TWumjDt_cZg_export-figma-text-color-styles-to-framer.md
businesses: [figma, framer]
people: [tim-gabe]
topics: [framer, design-systems, ui-design, responsive-design]
---

# Export Figma Text & Color Styles To Framer

## Summary

Tim Gabe shows his workflow to move text and color styles from Figma into Framer. Styles give one source of truth: you define a text or color once and reuse it everywhere. He collects every text size and color from all Figma breakpoints into one style guide frame. He pastes it into a Framer "Style Guide" page with the Figma-to-Framer plugin. Then he rebuilds each style in Framer with values per breakpoint. The key detail is to match each style's breakpoint min width to the frame widths.

## Key facts

- The example site has three breakpoints: desktop, tablet and mobile ([0:47](https://www.youtube.com/watch?v=TWumjDt_cZg&t=47s)).
- Desktop frame width is 1440. Tablet maps to 810 ([3:25](https://www.youtube.com/watch?v=TWumjDt_cZg&t=205s), [6:30](https://www.youtube.com/watch?v=TWumjDt_cZg&t=390s)).
- Example style "Display 1" uses Satoshi Bold ([4:26](https://www.youtube.com/watch?v=TWumjDt_cZg&t=266s), [5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s)):
  - Desktop: size 300, letter spacing -15, line height 1.2.
  - Tablet: size 200, letter spacing -10, line height 1.2.
  - Mobile: size 96, letter spacing -1.92.

## Tactics

- **Step 1, collect in Figma.** Copy every text size from every breakpoint outside the frame. Include headings, card headings, links, button text and body text. Do not skip one. Sample each color with the color picker into circles, including gradients ([0:47](https://www.youtube.com/watch?v=TWumjDt_cZg&t=47s), [1:50](https://www.youtube.com/watch?v=TWumjDt_cZg&t=110s)).
- **Step 2, build a style guide.** Rename text samples into a hierarchy: display, then headings, then body ([2:10](https://www.youtube.com/watch?v=TWumjDt_cZg&t=130s)).
- **Step 3, export.** Wrap it all in an auto layout with divider lines. Copy the layers with the Framer plugin. You can export the page designs before or after ([2:40](https://www.youtube.com/watch?v=TWumjDt_cZg&t=160s)).
- **Framer style guide page.** Make a new page called "Style Guide" with a 1440 desktop frame. Paste the guide, set height to fit and width to fill. Add tablet and phone breakpoints ([3:25](https://www.youtube.com/watch?v=TWumjDt_cZg&t=205s)).
- **Create text styles.** In Assets, ignore Framer's preset styles and add your own. Upload custom fonts under "Custom" ([4:26](https://www.youtube.com/watch?v=TWumjDt_cZg&t=266s), [5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s)).
- **Match breakpoint widths.** Set each style's desktop min width to the desktop frame width (1440) and its tablet min width to 810. With a mismatch, fonts resize oddly in preview ([5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s), [6:30](https://www.youtube.com/watch?v=TWumjDt_cZg&t=390s)).
- **Shared colors.** In a fill, switch from presets to Shared Colors and create named colors. An edit from any place updates every use ([8:34](https://www.youtube.com/watch?v=TWumjDt_cZg&t=514s)).
- **Apply to real pages.** Add tablet and mobile versions of the home page and assign styles. Each change applies across all screen sizes ([9:39](https://www.youtube.com/watch?v=TWumjDt_cZg&t=579s)).
- **Next step.** After styles, he builds components ([10:40](https://www.youtube.com/watch?v=TWumjDt_cZg&t=640s)).

## Quotes

- "One of the easiest ways to speed up your workflow inside a Framer is to use color and text styles." ([0:00](https://www.youtube.com/watch?v=TWumjDt_cZg&t=0s))
- "Don't skip one single text size." ([0:47](https://www.youtube.com/watch?v=TWumjDt_cZg&t=47s))

## Links

- Businesses: [Figma](../businesses/figma.md), [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md), [Responsive design](../topics/responsive-design.md)
