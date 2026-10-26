---
type: topic
title: "Design systems"
sources: [0SzJOMS0RPA, 13OKVxg6ecI, 2Mvmz34QsLQ, 8EAYZe6y3I8, PYskozIWh-E, TWumjDt_cZg, WgbiGtPVm8Q, XEVzFakovu8, XnI-WbMCDyw, YA3QpYIKqNI, YS7uOXjmJTA, Z-Jic1TrMZQ, _uva2dQPlV8, cmSBbnrFGPg, doiaMtD80p8, eeGVBhZURUI, fJ36mS1NYDM, iaQ30m6gqhw, oNhOh-e21Xg, ohF93_k3IMk, sybtdc4dYzE, vBuyR8uF380, wgMgje60Ovw, wmTkiF23GRQ]
updated: 2026-10-26
---

This page collects what the sources say about design systems: shared styles, tokens and components that keep a product consistent.

## Definition

A design system is a set of reusable parts: color and text styles, spacing rules, grids and components with states. Teams define each value once and reuse it everywhere. All sources here are videos by designer [Tim Gabe](../people/tim-gabe.md), mostly in [Figma](../businesses/figma.md) and [Framer](../businesses/framer.md).

## Repeated patterns

### Start small and grow from repetition

- Design freely first. When an item repeats, such as a heading, an icon size or a button, turn it into a style or component ([_uva2dQPlV8](../sources/_uva2dQPlV8.md), [1:30](https://www.youtube.com/watch?v=_uva2dQPlV8&t=90s)).
- Use atomic design: atoms (icon, text style, button), molecules (icon plus label), organisms (a card with state variants) and templates (a repeated section) ([_uva2dQPlV8](../sources/_uva2dQPlV8.md), [2:51](https://www.youtube.com/watch?v=_uva2dQPlV8&t=171s), [7:01](https://www.youtube.com/watch?v=_uva2dQPlV8&t=421s), [10:16](https://www.youtube.com/watch?v=_uva2dQPlV8&t=616s)).
- Build only what you need. Ant Design covers buttons, icons, type, grids and more. A solo designer or small team needs speed, not a huge system ([_uva2dQPlV8](../sources/_uva2dQPlV8.md), [11:56](https://www.youtube.com/watch?v=_uva2dQPlV8&t=716s), [12:58](https://www.youtube.com/watch?v=_uva2dQPlV8&t=778s)).
- The same atoms-first approach works for interactions. Build the field and the menu item first, then compose the dropdown ([WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md), [0:00](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=0s)).

### Style guide first, one source of truth

- Start a site with a style guide page: color styles, text styles and components with desktop and mobile variants. A change then applies everywhere ([PYskozIWh-E](../sources/PYskozIWh-E.md), [0:35](https://www.youtube.com/watch?v=PYskozIWh-E&t=35s)).
- To move a Figma design to Framer, collect every text size and color from every breakpoint into one frame. Rebuild each style in Framer with values per breakpoint ([TWumjDt_cZg](../sources/TWumjDt_cZg.md), [0:47](https://www.youtube.com/watch?v=TWumjDt_cZg&t=47s)). Match each style's breakpoint min width to the frame width (1440 and 810), or fonts resize oddly ([TWumjDt_cZg](../sources/TWumjDt_cZg.md), [5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s)).
- Name colors by role, such as "dark 100", not "black", so the palette can change ([wgMgje60Ovw](../sources/wgMgje60Ovw.md), [1:11:29](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4289s)).
- Set the type scale first. The Type Scales plugin builds it from a base size (such as 18px) and a ratio (1.25 or 1.3) ([cmSBbnrFGPg](../sources/cmSBbnrFGPg.md), [1:35](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=95s), [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md), [2:58](https://www.youtube.com/watch?v=fJ36mS1NYDM&t=178s)).

### Tokens: primitives, then aliases

- In Figma Variables, the first collection holds primitives: base colors and sizes. Theme and size collections alias back to them ([XnI-WbMCDyw](../sources/XnI-WbMCDyw.md), [0:42](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=42s), [1:05](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=65s)).
- Dark mode and a second language are modes. Modes needed the Figma Pro plan (2023-06) ([XnI-WbMCDyw](../sources/XnI-WbMCDyw.md), [1:36](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=96s)).
- Keep theme, size and language in separate collections, so each can switch on its own ([XnI-WbMCDyw](../sources/XnI-WbMCDyw.md), [2:09](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=129s)).

### A spacing system shared with developers

- Use the 8-point grid: 4, 8, 12, 16, 24, 32, 40, 48. A fixed scale stops values like 52, 47 and 31. An odd 51px is easy to spot as a mistake ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [0:25](https://www.youtube.com/watch?v=ohF93_k3IMk&t=25s), [1:28](https://www.youtube.com/watch?v=ohF93_k3IMk&t=88s)).
- Button sizes on the grid: large 64px high with 32px padding, medium 48px with 24px, small 40px with 16px ([cmSBbnrFGPg](../sources/cmSBbnrFGPg.md), [10:26](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=626s)).
- Do not force the grid on fluid widths. Card widths follow columns, and container heights come from padding plus content ([ohF93_k3IMk](../sources/ohF93_k3IMk.md), [4:36](https://www.youtube.com/watch?v=ohF93_k3IMk&t=276s)).
- Columns: 12 on desktop, 8 on tablet, 4 on mobile, like Material Design. Save each grid as a style ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s), [2:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=151s)).

### Components with states and properties

- Put all states in one component set. A search in Assets then returns one item. The interaction also works wherever the component is nested ([eeGVBhZURUI](../sources/eeGVBhZURUI.md), [1:39](https://www.youtube.com/watch?v=eeGVBhZURUI&t=99s), [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [5:56](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=356s)). One interactive component replaces about 16 to 24 prototype frames ([eeGVBhZURUI](../sources/eeGVBhZURUI.md), [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s)).
- Figma has four property types: variants, instance swap, text and boolean. One button can use all four ([iaQ30m6gqhw](../sources/iaQ30m6gqhw.md), [0:12](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=12s)). Name properties clearly, for example "Size" with large, medium and small ([iaQ30m6gqhw](../sources/iaQ30m6gqhw.md), [3:01](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=181s)).
- Simplify instances, expose nested instances on the parent, and limit icon swaps to preferred values ([XEVzFakovu8](../sources/XEVzFakovu8.md), [0:54](https://www.youtube.com/watch?v=XEVzFakovu8&t=54s), [1:46](https://www.youtube.com/watch?v=XEVzFakovu8&t=106s), [2:34](https://www.youtube.com/watch?v=XEVzFakovu8&t=154s)).
- In Framer, the order is states, variants, variables, then nested components. A state can only change layers that exist in the default state ([13OKVxg6ecI](../sources/13OKVxg6ecI.md), [0:07](https://www.youtube.com/watch?v=13OKVxg6ecI&t=7s), [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s)). Nested children keep their own hover states ([Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md), [0:17](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=17s)).

### Consistency is what users read as quality

- [Apple](../businesses/apple.md) keeps key actions in the same place and breaks a pattern only on purpose. Learn a pattern once, and it works on every device ([doiaMtD80p8](../sources/doiaMtD80p8.md), [10:54](https://www.youtube.com/watch?v=doiaMtD80p8&t=654s), [12:02](https://www.youtube.com/watch?v=doiaMtD80p8&t=722s)).
- AI agents make 80 screens that drift apart. Review the app as one product, not screen by screen ([8EAYZe6y3I8](../sources/8EAYZe6y3I8.md), [4:10](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=250s)).
- One pattern for one state. [Undertone](../businesses/undertone.md) had two different "used all your sessions" screens. The redesign uses one badge ("2/2 sessions used") with the refresh date ([8EAYZe6y3I8](../sources/8EAYZe6y3I8.md), [5:11](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=311s)).
- In the Undertone redesign, the team set type, color, icons, components and button states before any other fix ([YA3QpYIKqNI](../sources/YA3QpYIKqNI.md), [7:27](https://www.youtube.com/watch?v=YA3QpYIKqNI&t=447s)).
- At [Zipsnap](../businesses/zipsnap.md), UI work ends with a QA pass on every screen, then a component library. Misaligned radii and too many shades add up ([wmTkiF23GRQ](../sources/wmTkiF23GRQ.md), [8:49](https://www.youtube.com/watch?v=wmTkiF23GRQ&t=529s)).

## Concrete examples with numbers

| Example | Values | Source |
|---|---|---|
| Responsive heading "Display 1" (Satoshi Bold) | 300 desktop, 200 tablet, 96 mobile | [TWumjDt_cZg](../sources/TWumjDt_cZg.md) [4:26](https://www.youtube.com/watch?v=TWumjDt_cZg&t=266s) |
| Framer mini course heading scale | 200, 164, 96, 64, 48, 40, 32px. Each heading's smaller sizes are the next two steps down | [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:58:14](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3494s) |
| Framer mini course color tokens | Dark at 100/75/50/25/20/10/5/3%, light at 100/50%, plus four accents | [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:44:22](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2662s) |
| Desktop grid | 12 columns, 20px gutter, 30px margin in a 1440 frame gives a 1140 container | [sybtdc4dYzE](../sources/sybtdc4dYzE.md) [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s) |
| Tablet and mobile grid | 8 columns, 16px gutter, 32px margin. 4 columns, 12px gutter, 12px margin | [sybtdc4dYzE](../sources/sybtdc4dYzE.md) [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s) |
| Website layout values | 56px side padding on desktop, 40 on tablet, 24 on mobile | [PYskozIWh-E](../sources/PYskozIWh-E.md) [8:08](https://www.youtube.com/watch?v=PYskozIWh-E&t=488s) |
| AI build of one app with design input | Bare prompt 5/15. Skill files plus a basic design system 8/15. Every reference plus a full system at once 4/15. Human art direction 15/15 | [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) [1:51](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=111s) |
| Crypto card redesign with a clear declined-payment state | New accounts +60%, money loaded +79% (2026-10) | [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md) [8:32](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=512s) |

## Disagreements

> Conflict: how much system to feed an AI builder. [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) found a basic design system lifted the score from 5 to 8, but a full system plus every reference dropped it to 4. [YA3QpYIKqNI](../sources/YA3QpYIKqNI.md) and [wmTkiF23GRQ](../sources/wmTkiF23GRQ.md) build the full system and component library first.

> Conflict: grid unit. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) and [sybtdc4dYzE](../sources/sybtdc4dYzE.md) use an 8-point grid. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) uses a 4-point grid. [ohF93_k3IMk](../sources/ohF93_k3IMk.md) uses 4 for tight, related parts and 8 or more elsewhere.

## Sources

- Foundations: [_uva2dQPlV8](../sources/_uva2dQPlV8.md), [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md), [ohF93_k3IMk](../sources/ohF93_k3IMk.md), [sybtdc4dYzE](../sources/sybtdc4dYzE.md), [XnI-WbMCDyw](../sources/XnI-WbMCDyw.md), [fJ36mS1NYDM](../sources/fJ36mS1NYDM.md), [vBuyR8uF380](../sources/vBuyR8uF380.md)
- Figma components: [iaQ30m6gqhw](../sources/iaQ30m6gqhw.md), [XEVzFakovu8](../sources/XEVzFakovu8.md), [eeGVBhZURUI](../sources/eeGVBhZURUI.md), [WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md), [oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md)
- Framer: [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md), [PYskozIWh-E](../sources/PYskozIWh-E.md), [TWumjDt_cZg](../sources/TWumjDt_cZg.md), [13OKVxg6ecI](../sources/13OKVxg6ecI.md), [Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md), [wgMgje60Ovw](../sources/wgMgje60Ovw.md)
- Product quality: [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md), [YA3QpYIKqNI](../sources/YA3QpYIKqNI.md), [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md), [doiaMtD80p8](../sources/doiaMtD80p8.md), [wmTkiF23GRQ](../sources/wmTkiF23GRQ.md)

## Related

- Topics: [Figma](figma.md), [Framer](framer.md), [Grid systems](grid-systems.md), [Typography](typography.md), [Color](color.md), [Auto layout](auto-layout.md), [UI design](ui-design.md), [Responsive design](responsive-design.md), [Micro-interactions](micro-interactions.md)
- People: [Tim Gabe](../people/tim-gabe.md)
