---
type: topic
title: "Color"
sources: [BASF9O2_AFo, cocnZubvfFE, vBuyR8uF380, cmSBbnrFGPg, 86PGRyQjdzQ, PGQnGEH7c-E, hCKdIwbhS-s, fJ36mS1NYDM, eZ3Rql0yhCw, XnI-WbMCDyw, wgMgje60Ovw]
updated: 2026-10-26
---

Color is how a UI picks, limits and applies its palette, including gradients and contrast. All sources are design tutorials by [Tim Gabe](../people/tim-gabe.md).

## Definition

A UI palette is a small set of colors with fixed roles: background, primary action and text. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [9:22](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=562s)

## Repeated patterns

- **Few colors.** Use minimal illustrations and few colors. [vBuyR8uF380](../sources/vBuyR8uF380.md) [5:41](https://www.youtube.com/watch?v=vBuyR8uF380&t=341s). Use three colors: a base for backgrounds, a primary for CTAs and small details, and a neutral for text. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [9:22](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=562s)
- **Save the strong color for the main action.** Google keeps its page white and gray, so the blue button stands out. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [5:27](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=327s). A senior designer removes a red error-style button and keeps red for meaning only. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [12:06](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=726s)
- **Tints and shades of one color.** Copy.ai lowers the opacity of its primary color for the footer background. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [6:28](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=388s). Use shades and tints of one color, as in Erik Kennedy's HSB guide. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [9:07](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=547s). The Color Shades plugin builds a full range from one hex code. [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md) [2:16](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=136s)
- **Check contrast.** Body text must pass at least AA. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [8:31](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=511s). In one build, Tim fixed dark text for accessibility and made the CTA black for contrast. [vBuyR8uF380](../sources/vBuyR8uF380.md) [22:47](https://www.youtube.com/watch?v=vBuyR8uF380&t=1367s)
- **Generate, then lock.** In Coolors, lock the colors you like and regenerate the rest. [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md) [0:32](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=32s), [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) [2:20](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=140s)
- **Test palettes side by side.** Duplicate the frame and try inverted, beige, blue, white and green versions. [vBuyR8uF380](../sources/vBuyR8uF380.md) [5:41](https://www.youtube.com/watch?v=vBuyR8uF380&t=341s)
- **Name colors by role.** Use "dark 100", not "black", so the palette can change later. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [1:11:29](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4289s). In Figma variables, a theme collection aliases semantic names (background, button, text body) to primitives. Dark mode is a second mode. [XnI-WbMCDyw](../sources/XnI-WbMCDyw.md) [1:05](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=65s), [1:26](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=86s)

## Gradients

- Figma has 4 gradient types: linear, radial, angular and diamond. Plain colors can look boring, and gradients add depth. [BASF9O2_AFo](../sources/BASF9O2_AFo.md) [0:00](https://www.youtube.com/watch?v=BASF9O2_AFo&t=0s), [2:01](https://www.youtube.com/watch?v=BASF9O2_AFo&t=121s)
- A radial gradient over a strong background image keeps text readable. [cocnZubvfFE](../sources/cocnZubvfFE.md) [5:05](https://www.youtube.com/watch?v=cocnZubvfFE&t=305s)
- A blurred copy of the same image gives an "aurora" background. [cocnZubvfFE](../sources/cocnZubvfFE.md) [6:06](https://www.youtube.com/watch?v=cocnZubvfFE&t=366s)
- For a mesh gradient, pick one base color and shift only the hue to get the palette. Then blur the shapes together. [eZ3Rql0yhCw](../sources/eZ3Rql0yhCw.md) [1:00](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=60s), [2:04](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=124s)
- Beginners overuse gradients and blur. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [1:02](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=62s)

## Concrete examples with numbers

- **60-30-10.** 60% neutral (white or light gray), 30% complementary (black) and 10% brand color. Too much strong red makes everything shout. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [2:02](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=122s), [2:50](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=170s)
- **Opacity values.** Large text at about 80% opacity and small text at 60% to 70%. Secondary buttons and cards use the primary color at 5%. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [10:24](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=624s)
- **Role scale.** The Framer course palette has dark at 100/75/50/25/20/10/5/3% and light at 100/50%, plus four accents. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:44:22](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2662s)
- **Brand in 1 minute 20 seconds.** A chocolate brand led to a brown base color. Tim locked it in Coolors and generated the rest. [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) [2:06](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=126s), [2:20](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=140s)

## Disagreements

- **Image first or brand first.** One method takes the button color from the hero image. [cocnZubvfFE](../sources/cocnZubvfFE.md) [5:05](https://www.youtube.com/watch?v=cocnZubvfFE&t=305s). Another starts from the brand and only then opens a palette tool. [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) [1:04](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=64s). The first source agrees that a team with a design system picks assets to match the system instead.

> Conflict: [cocnZubvfFE](../sources/cocnZubvfFE.md) derives color from the image. [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) derives it from the brand.

- **Opacity colors in the final file.** Explore with one dark color at an opacity. In the final file, switch to real hex colors at 100%. [vBuyR8uF380](../sources/vBuyR8uF380.md) [21:46](https://www.youtube.com/watch?v=vBuyR8uF380&t=1306s). A later video keeps text and secondary buttons at set opacities in the final design. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [10:24](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=624s)

> Conflict: [vBuyR8uF380](../sources/vBuyR8uF380.md) (2022-08) replaces opacity colors with hex. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) (2024-01) ships opacity colors.

Related topics: [UI design](ui-design.md), [Design systems](design-systems.md), [Landing pages](landing-pages.md), [Typography](typography.md).

## Sources

- [BASF9O2_AFo](../sources/BASF9O2_AFo.md): gradients in Figma
- [cocnZubvfFE](../sources/cocnZubvfFE.md): 4 tips for landing pages
- [vBuyR8uF380](../sources/vBuyR8uF380.md): landing page desktop workflow
- [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md): landing page guiding principles
- [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md): 4 levels of UI/UX design
- [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md): design better than 99% of designers
- [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md): a $5K website in 5 minutes
- [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md): underrated Figma plugins
- [eZ3Rql0yhCw](../sources/eZ3Rql0yhCw.md): mesh gradients
- [XnI-WbMCDyw](../sources/XnI-WbMCDyw.md): Figma variables
- [wgMgje60Ovw](../sources/wgMgje60Ovw.md): Framer mini course
