---
type: topic
title: "Responsive design"
sources: [3xGJ80UpVeM, 40UAK-LKheA, AJBaBScKdwI, GVxFxyHNy_o, Kf8L3CeiWzQ, PYskozIWh-E, RdHXcv1k_Dg, TWumjDt_cZg, V-xm5c_XRWU, XLWXztyA80Q, evhZQg2NHfo, rEjd7QRxtDY, sybtdc4dYzE, tJCv91c6Krk, udTGvssp-h8, zsxcr7aP2yo]
updated: 2026-10-26
---

This page covers how to make one design work across desktop, tablet and phone widths, as taught in [Tim Gabe](../people/tim-gabe.md)'s Figma and Framer tutorials.

## Definition

Responsive design makes a layout adapt to the screen width, with breakpoints that switch layout, type and spacing per device range. All 16 sources here are Tim Gabe videos from 2022 to 2023, so tool UIs may have changed since.

## Repeated patterns

- **Think in ranges, not sizes.** Each device gets one look across a width range: mobile 0 to 640 px, tablet 641 to 1024 px, desktop 1025 px and up. No breakpoint or scale ratio is universally right; Apple and Google differ page to page ([source](../sources/tJCv91c6Krk.md), [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s), [11:06](https://www.youtube.com/watch?v=tJCv91c6Krk&t=666s)).
- **Flexbox everywhere.** Figma [auto layout](auto-layout.md), Framer stacks and CSS flexbox share one model, so a design built that way exports cleanly ([source](../sources/AJBaBScKdwI.md), [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s); [source](../sources/Kf8L3CeiWzQ.md), [0:22](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=22s)). Use stacks "like a maniac" ([source](../sources/rEjd7QRxtDY.md), [0:00](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=0s)).
- **Fill, hug/fit, fixed.** Fill stretches with the parent, hug fits content, fixed ignores both ([source](../sources/Kf8L3CeiWzQ.md), [3:52](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=232s)). Set "fill container" first, then check resizing after nesting, because a new wrapper defaults to hug ([source](../sources/Kf8L3CeiWzQ.md), [6:58](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=418s), [8:03](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=483s)). Framer fill uses fractions: 2fr takes twice 1fr ([source](../sources/GVxFxyHNy_o.md), [4:53](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=293s)).
- **Constraints hold the edges.** In Figma, pin to left and right for fixed margins, or scale for proportional gaps ([source](../sources/3xGJ80UpVeM.md), [3:17](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=197s)). Auto layout alone does not resize with the frame; the container needs left-and-right constraints and fill children ([source](../sources/tJCv91c6Krk.md), [5:54](https://www.youtube.com/watch?v=tJCv91c6Krk&t=354s), [6:57](https://www.youtube.com/watch?v=tJCv91c6Krk&t=417s)).
- **Column grids shrink by device.** 12 columns on desktop, 8 on tablet, 4 on mobile, as in Material Design ([source](../sources/sybtdc4dYzE.md), [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s); [source](../sources/tJCv91c6Krk.md), [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s)). See [Grid systems](grid-systems.md).
- **Desktop is the parent breakpoint.** In Framer, desktop changes flow down to tablet and phone, not up. "Update primary" pushes a change up; "reset overrides" undoes it ([source](../sources/rEjd7QRxtDY.md), [4:47](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=287s)). Export one desktop frame from Figma; Framer adds breakpoints ([source](../sources/AJBaBScKdwI.md), [5:18](https://www.youtube.com/watch?v=AJBaBScKdwI&t=318s)).
- **Restack on small screens.** Switch rows from horizontal to vertical, image on top, nav links to a menu button ([source](../sources/tJCv91c6Krk.md), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s), [16:18](https://www.youtube.com/watch?v=tJCv91c6Krk&t=978s); [source](../sources/PYskozIWh-E.md), [20:07](https://www.youtube.com/watch?v=PYskozIWh-E&t=1207s)).
- **Responsive type styles.** Framer text styles carry L, M and S sizes per breakpoint ([source](../sources/XLWXztyA80Q.md), [10:44](https://www.youtube.com/watch?v=XLWXztyA80Q&t=644s)). Match each style's breakpoint min width to the frame widths, or fonts resize oddly ([source](../sources/TWumjDt_cZg.md), [5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s)). See [Typography](typography.md).
- **Borrow tested layouts.** Sections captured from live sites at 1440 px and 375 px are already tested on mobile ([source](../sources/RdHXcv1k_Dg.md), [3:21](https://www.youtube.com/watch?v=RdHXcv1k_Dg&t=201s); [source](../sources/40UAK-LKheA.md), [1:02](https://www.youtube.com/watch?v=40UAK-LKheA&t=62s)). See [Wireframing](wireframing.md).
- **Test both directions and real devices.** Scaling a frame up exposed an unpinned video ([source](../sources/rEjd7QRxtDY.md), [6:41](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=401s)). Sketch's site overflows sideways on mobile, and heavy animated sites can fail on old phones ([source](../sources/evhZQg2NHfo.md), [5:22](https://www.youtube.com/watch?v=evhZQg2NHfo&t=322s), [8:36](https://www.youtube.com/watch?v=evhZQg2NHfo&t=516s)).
- **Pin animated layers.** Pin backgrounds to all sides at 0 and text to its nearest edges, so [motion](motion-design.md) sections scale with the viewport ([source](../sources/zsxcr7aP2yo.md), [1:28](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=88s); [source](../sources/V-xm5c_XRWU.md), [6:26](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=386s)).

## Concrete examples with numbers

| Setting | Desktop | Tablet | Mobile | Source |
|---|---|---|---|---|
| Figma grid (2022-09) | 12 col, 20 px gutter, 1440 frame with 1140 container | 8 col, 16 px gutter, 32 px margin | 4 col, 12 px gutter, 12 px margin | [sybtdc4dYzE](../sources/sybtdc4dYzE.md) [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s), [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s) |
| Figma grid (2023-01) | 12 col, 64 px margin, 24 px gutter | 8 col, 32 px margin | 4 col, 16 px margin, 16 px gutter | [tJCv91c6Krk](../sources/tJCv91c6Krk.md) [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s) |
| Type scale | body 32, heading 96 | body 28, heading 72 | body 24, heading 56 | [tJCv91c6Krk](../sources/tJCv91c6Krk.md) [17:26](https://www.youtube.com/watch?v=tJCv91c6Krk&t=1046s) |
| "Display 1" style | 300, letter spacing -15 | 200, -10 | 96, -1.92 | [TWumjDt_cZg](../sources/TWumjDt_cZg.md) [4:26](https://www.youtube.com/watch?v=TWumjDt_cZg&t=266s) |
| Framer side padding | 56 px, max width 1440 | 40 px | 24 px | [PYskozIWh-E](../sources/PYskozIWh-E.md) [8:08](https://www.youtube.com/watch?v=PYskozIWh-E&t=488s) |
| Card grid columns | 3 | 2 | 1 | [udTGvssp-h8](../sources/udTGvssp-h8.md) [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s) |

- Card grid recipe: cards at relative width 33% with wrap on, parent at fit-content height ([source](../sources/GVxFxyHNy_o.md), [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s)). Wrap works only with fixed item widths (400 px text, 250 px images); with fill, items shrink instead ([source](../sources/rEjd7QRxtDY.md), [3:52](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=232s), [4:13](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=253s)).
- A bento layout: a card spanning 2 of 3 columns completes the row ([source](../sources/udTGvssp-h8.md), [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)).
- Jitter crops its product GIF to the left side on mobile so it stays large, and turns a logo row into a ticker ([source](../sources/evhZQg2NHfo.md), [14:41](https://www.youtube.com/watch?v=evhZQg2NHfo&t=881s)). See [Jitter](../businesses/jitter.md).
- A Figma page goes responsive in three constraint settings: nav left-right plus top, content rows left-right plus top, footer left-right plus bottom ([source](../sources/3xGJ80UpVeM.md), [8:21](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=501s)).

## Disagreements

- **Grid gutters and margins differ between tutorials.** The 2022 grid uses a 20 px desktop gutter and 12 px mobile margin ([sybtdc4dYzE](../sources/sybtdc4dYzE.md), [5:25](https://www.youtube.com/watch?v=sybtdc4dYzE&t=325s), [9:31](https://www.youtube.com/watch?v=sybtdc4dYzE&t=571s)); the 2023 crash course uses 24 px and 16 px ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s)). Framer builds use 24 px on phone ([PYskozIWh-E](../sources/PYskozIWh-E.md), [8:08](https://www.youtube.com/watch?v=PYskozIWh-E&t=488s); [rEjd7QRxtDY](../sources/rEjd7QRxtDY.md), [6:11](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=371s)).
> Conflict: [sybtdc4dYzE](../sources/sybtdc4dYzE.md) sets mobile margin 12 px; [tJCv91c6Krk](../sources/tJCv91c6Krk.md) sets 16 px. Tim says no value is universal, so treat both as examples.
- **Tablet width.** Framer maps tablet to an 810 px min width ([TWumjDt_cZg](../sources/TWumjDt_cZg.md), [6:30](https://www.youtube.com/watch?v=TWumjDt_cZg&t=390s)); the Figma crash course starts tablet at 641 px ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s)).
> Conflict: [TWumjDt_cZg](../sources/TWumjDt_cZg.md) uses 810 px for tablet; [tJCv91c6Krk](../sources/tJCv91c6Krk.md) uses 641 to 1024 px.

## Sources

- [3xGJ80UpVeM](../sources/3xGJ80UpVeM.md): Figma constraints
- [40UAK-LKheA](../sources/40UAK-LKheA.md): Frankenstein wireframes at 1440 and 375 px
- [AJBaBScKdwI](../sources/AJBaBScKdwI.md): Figma to Framer export
- [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md): Framer stacks, position and sizing
- [Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md): Figma auto layout
- [PYskozIWh-E](../sources/PYskozIWh-E.md): Complete Framer website
- [RdHXcv1k_Dg](../sources/RdHXcv1k_Dg.md): Landing page setup
- [TWumjDt_cZg](../sources/TWumjDt_cZg.md): Text and color styles per breakpoint
- [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md): Framer parallax
- [XLWXztyA80Q](../sources/XLWXztyA80Q.md): Figma to Framer tour
- [evhZQg2NHfo](../sources/evhZQg2NHfo.md): Six inspiration sites on desktop and mobile
- [rEjd7QRxtDY](../sources/rEjd7QRxtDY.md): Framer breakpoints
- [sybtdc4dYzE](../sources/sybtdc4dYzE.md): Responsive grids in Figma
- [tJCv91c6Krk](../sources/tJCv91c6Krk.md): Responsive design crash course
- [udTGvssp-h8](../sources/udTGvssp-h8.md): Framer card grid
- [zsxcr7aP2yo](../sources/zsxcr7aP2yo.md): Framer scroll animation
