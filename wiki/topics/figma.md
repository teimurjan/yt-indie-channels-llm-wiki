---
type: topic
title: "Figma"
sources: [0Lhu6kYOCx0, 3xGJ80UpVeM, AJBaBScKdwI, BASF9O2_AFo, GDjxXRLHEg4, GVUchbe86HE, KamNFblohHc, Kf8L3CeiWzQ, NDF834BAeK0, RdHXcv1k_Dg, WgbiGtPVm8Q, XEVzFakovu8, XnI-WbMCDyw, blDSmD5I61s, cmSBbnrFGPg, cocnZubvfFE, dL-U6bkm0a0, eZ3Rql0yhCw, iaQ30m6gqhw, nyyuyPSxqww, s19_n6rcXIY, s_GRc42EjNU, sybtdc4dYzE, tJCv91c6Krk, thplNeqE9Tg, vBuyR8uF380, zFGG0tyLJtI]
updated: 2026-10-26
---

This page collects the Figma techniques that the sources teach, from layout basics to prototype animation.

## Definition

[Figma](../businesses/figma.md) is a design tool for UI, web and app screens that runs in the browser or as a desktop app. All sources on this page are tutorials by [Tim Gabe](../people/tim-gabe.md) from 2022 and 2023.

## Why Figma

- Tim gives four reasons (2022-12). It is free without a team plan. It was the first design tool with multiplayer mode. Its community has thousands of plugins and templates. It ships features fast [source](../sources/blDSmD5I61s.md) [0:50](https://www.youtube.com/watch?v=blDSmD5I61s&t=50s).
- To learn, recreate a live website from a screenshot. Put the screenshot in a frame at 20% opacity, lock it, and build on top [source](../sources/blDSmD5I61s.md) [1:38](https://www.youtube.com/watch?v=blDSmD5I61s&t=98s), [6:30](https://www.youtube.com/watch?v=blDSmD5I61s&t=390s).

## Repeated patterns

### Layout: auto layout, constraints and grids

- **Auto layout is Figma's flexbox.** It gives scale, consistency and control over spacing [source](../sources/Kf8L3CeiWzQ.md) [0:22](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=22s), [0:41](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=41s). Framer stacks, Figma auto layout and CSS flexbox follow the same model [source](../sources/AJBaBScKdwI.md) [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s).
- **Use auto layout everywhere**, even for an avatar plus text. A plain group only lets you drag items by hand [source](../sources/GDjxXRLHEg4.md) [0:52](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=52s).
- **Three resizing modes.** Fixed does not respond. Fill stretches with the parent. Hug fits the content [source](../sources/Kf8L3CeiWzQ.md) [3:52](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=232s). Absolute position lets one child, such as a corner tag, ignore the layout [source](../sources/Kf8L3CeiWzQ.md) [4:50](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=290s).
- **Constraints are strings** that tie a child to the sides of its parent. Use left and right for fixed margins and scale for proportional gaps [source](../sources/3xGJ80UpVeM.md) [0:13](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=13s), [3:17](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=197s).
- **Start with a column grid.** Defaults: 12 columns on desktop, 8 on tablet, 4 on mobile [source](../sources/GDjxXRLHEg4.md) [6:20](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=380s). Twelve is the web standard because it divides by 2, 3, 4 and 6 [source](../sources/sybtdc4dYzE.md) [3:22](https://www.youtube.com/watch?v=sybtdc4dYzE&t=202s).
- **Space on an 8-point grid.** Scale: 4, 8, 12, 16, 24, 32, 40, 48 px [source](../sources/GDjxXRLHEg4.md) [7:15](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=435s), [source](../sources/vBuyR8uF380.md) [3:35](https://www.youtube.com/watch?v=vBuyR8uF380&t=215s).
- **Responsive breakpoints.** Example ranges: mobile 0 to 640 px, tablet 641 to 1024 px, desktop 1025 px and up, designed on a 1440 px frame [source](../sources/tJCv91c6Krk.md) [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s), [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s). Design tablet and mobile in Figma before export to Framer [source](../sources/AJBaBScKdwI.md) [5:18](https://www.youtube.com/watch?v=AJBaBScKdwI&t=318s).

### Components and variables

- **Four property types:** variants, instances, text and boolean. Rename "Property 1" to a clear name such as "Size" [source](../sources/iaQ30m6gqhw.md) [0:12](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=12s), [3:01](https://www.youtube.com/watch?v=iaQ30m6gqhw&t=181s).
- **Expose nested instances and preferred values** so designers change a card's button from the card itself (beta, 2022-09) [source](../sources/XEVzFakovu8.md) [1:46](https://www.youtube.com/watch?v=XEVzFakovu8&t=106s), [2:34](https://www.youtube.com/watch?v=XEVzFakovu8&t=154s).
- **Variables: primitives first, then aliases.** A theme collection points semantic names (background, text body) at primitives. Dark mode is a second mode with inverted values. Modes need the Pro plan (2023-06) [source](../sources/XnI-WbMCDyw.md) [0:42](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=42s), [1:26](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=86s), [1:36](https://www.youtube.com/watch?v=XnI-WbMCDyw&t=96s).
- **Variants drive interactive components**, such as a dropdown with hover and active states [source](../sources/WgbiGtPVm8Q.md) [0:00](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=0s).

### Prototyping and animation

- **Smart Animate** animates differences in size, color, position and opacity between frames. Layers must have the same names in each frame [source](../sources/nyyuyPSxqww.md) [1:11](https://www.youtube.com/watch?v=nyyuyPSxqww&t=71s), [source](../sources/thplNeqE9Tg.md) [3:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=235s).
- **Use "after delay" for auto-play.** Text animations use Smart Animate at 500 ms with a 1 ms delay, so no click is needed [source](../sources/0Lhu6kYOCx0.md) [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s).
- **Short frame stories.** A hero intro uses 7 frames. A splash screen goes from rectangle to circle to text reveal [source](../sources/nyyuyPSxqww.md) [1:40](https://www.youtube.com/watch?v=nyyuyPSxqww&t=100s), [source](../sources/s19_n6rcXIY.md) [1:31](https://www.youtube.com/watch?v=s19_n6rcXIY&t=91s). The Dynamic Island demo uses drag, after delay and click [source](../sources/dL-U6bkm0a0.md) [0:36](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=36s).
- **Scroll effects.** A frame does not scroll by default. Set overflow to vertical, then set a layer to "Sticky" [source](../sources/s_GRc42EjNU.md) [0:15](https://www.youtube.com/watch?v=s_GRc42EjNU&t=15s), [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s). Parallax needs two or more objects that move at different rates [source](../sources/GVUchbe86HE.md) [0:30](https://www.youtube.com/watch?v=GVUchbe86HE&t=30s).

### Visual effects

- **Four gradient types:** linear, radial, angular and diamond [source](../sources/BASF9O2_AFo.md) [0:00](https://www.youtube.com/watch?v=BASF9O2_AFo&t=0s). Mesh gradients: shapes, colors, blur, then a noise PNG on overlay at 10% to 15% [source](../sources/eZ3Rql0yhCw.md) [0:00](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=0s), [3:06](https://www.youtube.com/watch?v=eZ3Rql0yhCw&t=186s).
- **Glassmorphism:** background blur, drop shadow, linear gradients and opacity, on a colorful background [source](../sources/NDF834BAeK0.md) [0:12](https://www.youtube.com/watch?v=NDF834BAeK0&t=12s), [0:45](https://www.youtube.com/watch?v=NDF834BAeK0&t=45s).
- **Masks.** Use an image fill for shapes and text, or "Use as mask" with the mask layer at the bottom [source](../sources/KamNFblohHc.md) [0:14](https://www.youtube.com/watch?v=KamNFblohHc&t=14s), [1:30](https://www.youtube.com/watch?v=KamNFblohHc&t=90s).

### Landing pages in Figma

- **Collect inspiration on one page**, then iterate on a separate "explorations" page [source](../sources/RdHXcv1k_Dg.md) [3:21](https://www.youtube.com/watch?v=RdHXcv1k_Dg&t=201s).
- **One font is enough.** The Type Scales plugin builds a hierarchy from a base size (18 px) and a ratio (1.25) [source](../sources/cmSBbnrFGPg.md) [0:33](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=33s), [1:35](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=95s). Fontshare has free pairs [source](../sources/cocnZubvfFE.md) [0:23](https://www.youtube.com/watch?v=cocnZubvfFE&t=23s).
- **Plugins** cover icons (Lucide, Feather), photos (Unsplash, Pexels) and logos (Vector Logos) [source](../sources/GDjxXRLHEg4.md) [5:03](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=303s), [source](../sources/vBuyR8uF380.md) [2:34](https://www.youtube.com/watch?v=vBuyR8uF380&t=154s).

### Speed

- Shortcuts save an average of eight days a year, per Brainscape [source](../sources/zFGG0tyLJtI.md) [0:00](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=0s). Core keys: F frame, T text, R rectangle, Shift+A auto layout. Hold Space while you drag to keep a layer out of auto layout [source](../sources/blDSmD5I61s.md) [5:01](https://www.youtube.com/watch?v=blDSmD5I61s&t=301s), [source](../sources/zFGG0tyLJtI.md) [3:45](https://www.youtube.com/watch?v=zFGG0tyLJtI&t=225s).
- The Framer plugin copied 47 layers from Figma in one step [source](../sources/AJBaBScKdwI.md) [7:19](https://www.youtube.com/watch?v=AJBaBScKdwI&t=439s).

## Concrete examples with numbers

| Example | Numbers | Source |
|---|---|---|
| Text animation | Smart Animate 500 ms, 1 ms after-delay trigger | [0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md) [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s) |
| Hero intro | 7 frames, a 01 to 99 loader | [nyyuyPSxqww](../sources/nyyuyPSxqww.md) [1:40](https://www.youtube.com/watch?v=nyyuyPSxqww&t=100s) |
| Landing page hero | 160 px heading, 40 px spacing | [cocnZubvfFE](../sources/cocnZubvfFE.md) [2:29](https://www.youtube.com/watch?v=cocnZubvfFE&t=149s) |
| Row grid | 8 px height, 8 px gutter, count 100 | [sybtdc4dYzE](../sources/sybtdc4dYzE.md) [1:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=90s) |
| Dropdown field | 200 px width, height on the 8-point grid | [WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md) [1:04](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=64s) |
| Glass texture | Community noise fill at about 20% opacity | [NDF834BAeK0](../sources/NDF834BAeK0.md) [1:45](https://www.youtube.com/watch?v=NDF834BAeK0&t=105s) |

## Disagreements

- The sources come from one creator and do not contradict each other. Breakpoints are a choice, not a rule: Apple and Google use different ones, even page to page [source](../sources/tJCv91c6Krk.md) [11:06](https://www.youtube.com/watch?v=tJCv91c6Krk&t=666s).

## Related

- Topics: [auto-layout](auto-layout.md), [grid-systems](grid-systems.md), [responsive-design](responsive-design.md), [design-systems](design-systems.md), [prototyping](prototyping.md), [motion-design](motion-design.md), [typography](typography.md), [color](color.md), [landing-pages](landing-pages.md), [framer](framer.md), [design-tools](design-tools.md), [ui-design](ui-design.md)

## Sources

- [0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md): How to Recreate Amazing Text Animations in Figma
- [3xGJ80UpVeM](../sources/3xGJ80UpVeM.md): Figma Constraints & Resizing Made SIMPLE
- [AJBaBScKdwI](../sources/AJBaBScKdwI.md): 4 Tricks for Best Figma to Framer Export
- [BASF9O2_AFo](../sources/BASF9O2_AFo.md): How To Create Gradients in Figma
- [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md): 5 Figma Workflow Tips For UI Beginners
- [GVUchbe86HE](../sources/GVUchbe86HE.md): Parallax Scroll Animation in 6 Minutes
- [KamNFblohHc](../sources/KamNFblohHc.md): Masking in 4 Minutes
- [Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md): Master Figma Auto Layout in 10 Minutes
- [NDF834BAeK0](../sources/NDF834BAeK0.md): Glassmorphism Effect in Figma
- [RdHXcv1k_Dg](../sources/RdHXcv1k_Dg.md): 9 SECRETS to BEAUTIFUL Landing Page Design (Pt. 1)
- [WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md): Animated Dropdown Menu with Variants in Figma
- [XEVzFakovu8](../sources/XEVzFakovu8.md): New Figma Component Properties
- [XnI-WbMCDyw](../sources/XnI-WbMCDyw.md): Get Started: Figma Variables in 3 Minutes
- [blDSmD5I61s](../sources/blDSmD5I61s.md): Figma in 20 Minutes (For Beginners in 2023)
- [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md): 9 SECRETS To Beautiful Landing Page Design (Pt. 2)
- [cocnZubvfFE](../sources/cocnZubvfFE.md): 4 Easy Tips For Stunning Landing Pages
- [dL-U6bkm0a0](../sources/dL-U6bkm0a0.md): Apple's Dynamic Island Animation in Figma
- [eZ3Rql0yhCw](../sources/eZ3Rql0yhCw.md): How To Create Mesh Gradients in Figma
- [iaQ30m6gqhw](../sources/iaQ30m6gqhw.md): Figma Component Properties Made Simple
- [nyyuyPSxqww](../sources/nyyuyPSxqww.md): How To Animate Like After Effects in Figma
- [s19_n6rcXIY](../sources/s19_n6rcXIY.md): Splash Screen Animation in 6 Minutes
- [s_GRc42EjNU](../sources/s_GRc42EjNU.md): Master Figma's Sticky Scroll in 4 Minutes
- [sybtdc4dYzE](../sources/sybtdc4dYzE.md): Master Responsive Grids (Rows & Columns) in Figma
- [tJCv91c6Krk](../sources/tJCv91c6Krk.md): Responsive Design in Figma (Crash Course 2023)
- [thplNeqE9Tg](../sources/thplNeqE9Tg.md): Figma Smart Animate for Beginners
- [vBuyR8uF380](../sources/vBuyR8uF380.md): 9 SECRETS To Beautiful Landing Page Design (Pt. 3)
- [zFGG0tyLJtI](../sources/zFGG0tyLJtI.md): 15 Figma Shortcuts You Need to Know About
