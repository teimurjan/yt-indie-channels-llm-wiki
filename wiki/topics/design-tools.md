---
type: topic
title: "Design tools"
sources: [GDjxXRLHEg4, NT8w5ZS13ao, XEVzFakovu8, XPim-a5R6yw, _uva2dQPlV8, blDSmD5I61s, d78yo84tnfA, eZ3Rql0yhCw, eeGVBhZURUI, fJ36mS1NYDM, t8ThPNdc_9w, zFGG0tyLJtI]
updated: 2026-10-26
---

This page collects what the sources say about the tools designers use to design and ship interfaces: Figma, Framer, Webflow and their plugins.

## Definition

Design tools are the apps that designers use to draw interfaces, prototype them and, in some cases, publish them. All sources here are tutorials by [Tim Gabe](../people/tim-gabe.md).

## Repeated patterns

### Pick the tool by output and role

- **Figma for anything, Framer for the web.** [Figma](../businesses/figma.md) designs anything, but a developer or another tool must build it. [Framer](../businesses/framer.md) designs and publishes in one place, but only for the web [source](../sources/XPim-a5R6yw.md) [0:16](https://www.youtube.com/watch?v=XPim-a5R6yw&t=16s), [0:40](https://www.youtube.com/watch?v=XPim-a5R6yw&t=40s). A designer who only makes websites can use Framer alone. Apps, graphics and dashboards still need Figma [source](../sources/XPim-a5R6yw.md) [0:56](https://www.youtube.com/watch?v=XPim-a5R6yw&t=56s).
- **Framer for designers, Webflow for developer-minded teams.** Webflow needs HTML and CSS knowledge. A Figma or [Sketch](../businesses/sketch.md) user feels at home in Framer after a couple of hours (2023-05) [source](../sources/NT8w5ZS13ao.md) [0:43](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=43s). Framer pastes a Figma design in one step. [Webflow](../businesses/webflow.md) needs the Figma file built its way, but it has the stronger CMS [source](../sources/t8ThPNdc_9w.md) [0:00](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=0s), [1:01](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=61s).
- **Shipping speed and community matter.** Framer shipped seven big updates in one month and helped Dribbble migrate for free (2023-05). Its Discord answers questions fast [source](../sources/NT8w5ZS13ao.md) [3:40](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=220s), [3:13](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=193s), [2:29](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=149s). Tim picked Figma for its free tier, multiplayer mode, plugin community and fast releases (2022-12) [source](../sources/blDSmD5I61s.md) [0:50](https://www.youtube.com/watch?v=blDSmD5I61s&t=50s).

### Figma habits

- **[Auto layout](auto-layout.md) everywhere.** Wrap even an avatar plus text in auto layout to get alignment and spacing controls [source](../sources/GDjxXRLHEg4.md) [0:52](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=52s). Shift+A wraps a label into a button [source](../sources/blDSmD5I61s.md) [13:39](https://www.youtube.com/watch?v=blDSmD5I61s&t=819s).
- **Grids and a spacing scale first.** Use 12 columns on desktop, 8 on tablet and 4 on mobile. Use a 4 or 8 point scale (4, 8, 12, 16, 24, 32, 40, 48 px), so developers can spot a stray 31 px [source](../sources/GDjxXRLHEg4.md) [6:20](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=380s), [7:15](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=435s). See [grid-systems](grid-systems.md).
- **Learn shortcuts.** Brainscape says shortcuts save about eight days a year. Tim's picks: K to scale a frame with its content, Option+Command+C/V to copy a style, Command+R to rename in bulk [source](../sources/zFGG0tyLJtI.md) [0:00](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=0s), [0:41](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=41s), [2:48](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=168s), [5:25](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=325s).
- **Learn by tracing real sites.** Put a screenshot at 20% opacity, lock it, and rebuild on top [source](../sources/blDSmD5I61s.md) [6:30](https://www.youtube.com/watch?v=blDSmD5I61s&t=390s).
- **Pen tool.** Hold Shift for straight lines. Shift+Backspace deletes a point and keeps the path closed. Alt or Option breaks handle mirroring [source](../sources/d78yo84tnfA.md) [2:27](https://www.youtube.com/watch?v=d78yo84tnfA&t=147s), [4:01](https://www.youtube.com/watch?v=d78yo84tnfA&t=241s), [5:02](https://www.youtube.com/watch?v=d78yo84tnfA&t=302s).
- **Build effects by hand to keep vectors.** Mesh gradients come from shapes, hue-shifted colors, a layer blur and a noise overlay at 10% to 15%. The Mesh Gradient plugin is faster but outputs a PNG [source](../sources/eZ3Rql0yhCw.md) [0:00](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=0s), [3:06](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=186s), [6:11](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=371s).

### Components and design systems

- **Make a component when something repeats.** Design freely first. Then turn repeated icons, buttons, text and colors into atoms, molecules, organisms and templates [source](../sources/_uva2dQPlV8.md) [1:30](https://www.youtube.com/watch?v=_uva2dQPlV8&t=90s), [5:55](https://www.youtube.com/watch?v=_uva2dQPlV8&t=355s). Solo designers and small teams need speed, not a system the size of Ant Design [source](../sources/_uva2dQPlV8.md) [12:58](https://www.youtube.com/watch?v=_uva2dQPlV8&t=778s). See [design-systems](design-systems.md).
- **Component properties.** "Simplify all instances" hides unneeded options. Nested instances expose a card's button on the card. Preferred values curate instance swaps (2022-09) [source](../sources/XEVzFakovu8.md) [0:54](https://www.youtube.com/watch?v=XEVzFakovu8&t=54s), [1:46](https://www.youtube.com/watch?v=XEVzFakovu8&t=106s), [3:21](https://www.youtube.com/watch?v=XEVzFakovu8&t=201s).
- **Interactive components.** One frame replaces about 16 to 24 prototype frames. Name the variant property "state" and use Smart Animate at 150 ms for hover [source](../sources/eeGVBhZURUI.md) [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s), [2:41](https://www.youtube.com/watch?v=eeGVBhZURUI&t=161s). See [prototyping](prototyping.md).

### Plugins

- **Three plugin types for daily work:** icons (Lucide), images (Unsplash, Pexels) and placeholder copy [source](../sources/GDjxXRLHEg4.md) [5:03](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=303s).
- **Underrated plugins (2022-06):** Coolors and Color Shades for palettes, Typescales for a type scale with rem values, Beautiful Shadows, Layer Styles for combined styles, and Dark Mode Magic [source](../sources/fJ36mS1NYDM.md) [0:00](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=0s), [2:58](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=178s), [8:15](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=495s), [9:22](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=562s). See [color](color.md) and [typography](typography.md).

## Concrete examples with numbers

| Comparison | Detail | Source |
|---|---|---|
| Framer vs Webflow price | Framer Mini $5 vs Webflow Basic $14 for simple sites. Webflow CMS is cheaper for mid-size blogs. Framer Pro a bit cheaper for big sites (2023-09) | [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md) [0:00](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=0s) |
| Framer vs Webflow features | Framer wins Figma export and UI for designers. Webflow wins CMS. Price is a tie (2023-09) | [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md) [1:01](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=61s) |
| Interactive components | 1 frame instead of 16 to 24 prototype frames | [eeGVBhZURUI](../sources/eeGVBhZURUI.md) [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s) |
| Typescales settings | Base 16, ratio 1.3 to 1.5, line height 1.3, 6 steps down and 2 up | [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md) [2:58](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=178s) |

## Disagreements

- **Webflow's place.** In 2023-05, Tim says designers are leaving Webflow for Framer because Webflow's flexibility adds complexity [source](../sources/NT8w5ZS13ao.md) [1:40](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=100s). In 2023-09 he still names Webflow the winner for CMS-heavy sites and developer-minded teams [source](../sources/t8ThPNdc_9w.md) [1:01](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=61s).

> Conflict: [NT8w5ZS13ao](../sources/NT8w5ZS13ao.md) frames Webflow as losing designers. [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md) keeps it as the better CMS choice.

## Related

- Topics: [figma](figma.md), [framer](framer.md), [no-code](no-code.md), [ui-design](ui-design.md), [design-systems](design-systems.md), [auto-layout](auto-layout.md), [prototyping](prototyping.md), [grid-systems](grid-systems.md)

## Sources

- [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md): 5 Figma Workflow Tips For UI Beginners
- [NT8w5ZS13ao](../sources/NT8w5ZS13ao.md): Designers Are Leaving Webflow... Here's Why
- [XEVzFakovu8](../sources/XEVzFakovu8.md): New Figma Component Properties (Great Beta Update)
- [XPim-a5R6yw](../sources/XPim-a5R6yw.md): Figma vs Framer in 100 Seconds
- [_uva2dQPlV8](../sources/_uva2dQPlV8.md): Your First Design System in Figma (Beginner Tutorial)
- [blDSmD5I61s](../sources/blDSmD5I61s.md): Figma in 20 Minutes (For Beginners in 2023)
- [d78yo84tnfA](../sources/d78yo84tnfA.md): Master Figma Pen Tool in 6 Minutes
- [eZ3Rql0yhCw](../sources/eZ3Rql0yhCw.md): How To Create Mesh Gradients in Figma
- [eeGVBhZURUI](../sources/eeGVBhZURUI.md): Figma Interactive Components For Beginners
- [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md): The 8 Most Underrated Figma Plugins in 2022
- [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md): Webflow vs Framer in 100 Seconds
- [zFGG0tyLJtI](../sources/zFGG0tyLJtI.md): 15 Figma Shortcuts You Need to Know About
