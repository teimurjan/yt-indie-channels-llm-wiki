---
type: topic
title: "Framer"
sources: [0SzJOMS0RPA, 13OKVxg6ecI, 4Byq1fjaUSY, 7drmXMS8Jj8, ADrNwS19i5I, AJBaBScKdwI, DRvge30wQFM, GVxFxyHNy_o, HHnlp_Bj0J4, NT8w5ZS13ao, PYskozIWh-E, R33gaV3EV1I, TWumjDt_cZg, U2EVNlDzAJQ, V-xm5c_XRWU, XLWXztyA80Q, XPim-a5R6yw, Z-Jic1TrMZQ, bBamB0yE12c, hCKdIwbhS-s, inkIfPtmE9s, m2NXQjKPUrg, nS_9yAABLwc, rEjd7QRxtDY, t8ThPNdc_9w, tBOazoVzBNk, udTGvssp-h8, wgMgje60Ovw, zsxcr7aP2yo]
updated: 2026-10-26
---

This page covers how to build websites with Framer, a visual tool that designs and publishes a site in one place. For the company itself, see [Framer (business)](../businesses/framer.md). All sources are tutorials by [Tim Gabe](../people/tim-gabe.md).

## Definition

Framer designs and publishes websites with no developer. Its limit is that it only makes things for the web. [XPim-a5R6yw](../sources/XPim-a5R6yw.md) [0:16](https://www.youtube.com/watch?v=XPim-a5R6yw&t=16s), [0:40](https://www.youtube.com/watch?v=XPim-a5R6yw&t=40s)

## Repeated patterns

- **Stacks are auto layout.** Framer stacks, Figma auto layout and CSS flexbox follow the same model. [AJBaBScKdwI](../sources/AJBaBScKdwI.md) [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s), [PYskozIWh-E](../sources/PYskozIWh-E.md) [9:10](https://www.youtube.com/watch?v=PYskozIWh-E&t=550s), [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:18:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=1122s). Use stacks "like a maniac" for any responsive layout. [rEjd7QRxtDY](../sources/rEjd7QRxtDY.md) [0:00](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=0s). Explore in frames first, then convert to stacks. [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md) [6:34](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=394s). See [Auto layout](auto-layout.md).
- **Import from Figma with the plugin.** Select the frame, run the Framer plugin and paste. [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md) [1:03](https://www.youtube.com/watch?v=0SzJOMS0RPA&t=63s), [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md) [0:30](https://www.youtube.com/watch?v=7drmXMS8Jj8&t=30s). Clean, nested auto layout in Figma gives a better import. [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md) [2:05](https://www.youtube.com/watch?v=0SzJOMS0RPA&t=125s), [AJBaBScKdwI](../sources/AJBaBScKdwI.md) [0:24](https://www.youtube.com/watch?v=AJBaBScKdwI&t=24s). After the paste, set the frame height to "fit content". [AJBaBScKdwI](../sources/AJBaBScKdwI.md) [9:23](https://www.youtube.com/watch?v=AJBaBScKdwI&t=563s), [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md) [1:22](https://www.youtube.com/watch?v=7drmXMS8Jj8&t=82s)
- **Overflow must be visible.** Sticky items, scroll animations, glows and 3D effects fail while a parent clips its overflow. [DRvge30wQFM](../sources/DRvge30wQFM.md) [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s), [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md) [2:59](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=179s), [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md) [4:14](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=254s), [4Byq1fjaUSY](../sources/4Byq1fjaUSY.md) [15:52](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=952s), [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md) [17:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=1071s)
- **Desktop is the parent breakpoint.** Changes on desktop flow down to tablet and phone. Changes on tablet do not flow up. [rEjd7QRxtDY](../sources/rEjd7QRxtDY.md) [4:47](https://www.youtube.com/watch?v=rEjd7QRxtDY&t=287s). Match each text style's breakpoint widths to the frames, or fonts resize oddly. [TWumjDt_cZg](../sources/TWumjDt_cZg.md) [5:28](https://www.youtube.com/watch?v=TWumjDt_cZg&t=328s). See [Responsive design](responsive-design.md).
- **Four scroll effects.** Scroll speed gives parallax. Scroll animation plays once on a trigger. Scroll transform changes a layer as you scroll. Scroll variants swap a component's variants. [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md) [4:34](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=274s), [6:58](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=418s), [8:06](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=486s), [XLWXztyA80Q](../sources/XLWXztyA80Q.md) [22:14](https://www.youtube.com/watch?v=XLWXztyA80Q&t=1334s)
- **Trigger on a named scroll section.** Name a section, then set the effect to "section in view". [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md) [5:02](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=302s), [zsxcr7aP2yo](../sources/zsxcr7aP2yo.md) [3:34](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=214s), [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md) [13:06](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=786s)
- **Copy and paste effects.** Tune one effect, paste it on the other layers, then stagger the delays. [4Byq1fjaUSY](../sources/4Byq1fjaUSY.md) [18:30](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1110s), [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md) [15:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=951s), [zsxcr7aP2yo](../sources/zsxcr7aP2yo.md) [8:00](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=480s), [tBOazoVzBNk](../sources/tBOazoVzBNk.md) [1:40](https://www.youtube.com/watch?v=tBOazoVzBNk&t=100s)
- **Tune springs by hand.** Stiffness, damping and mass set the feel of every transition. [inkIfPtmE9s](../sources/inkIfPtmE9s.md) [5:00](https://www.youtube.com/watch?v=inkIfPtmE9s&t=300s), [nS_9yAABLwc](../sources/nS_9yAABLwc.md) [10:05](https://www.youtube.com/watch?v=nS_9yAABLwc&t=605s), [m2NXQjKPUrg](../sources/m2NXQjKPUrg.md) [12:01](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=721s). See [Motion design](motion-design.md).
- **Components use states and variants.** A hover or pressed state can only change layers that exist in the default state. Use variants for real alternatives. [13OKVxg6ecI](../sources/13OKVxg6ecI.md) [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s), [2:12](https://www.youtube.com/watch?v=13OKVxg6ecI&t=132s). Nested components keep their own micro-interactions. [Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md) [0:17](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=17s). See [Micro-interactions](micro-interactions.md).
- **Start with a style guide page.** Shared colors and text styles update every page at once. [PYskozIWh-E](../sources/PYskozIWh-E.md) [0:35](https://www.youtube.com/watch?v=PYskozIWh-E&t=35s), [TWumjDt_cZg](../sources/TWumjDt_cZg.md) [3:25](https://www.youtube.com/watch?v=TWumjDt_cZg&t=205s), [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:39:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2353s). Give that page a random slug, so the public does not find it. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:39:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2353s)

## Concrete examples with numbers

- **Scroll speed values.** 100 is normal scrolling. Images at 140, a blur at 250 and text at 40 to 50 give depth. [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md) [1:22](https://www.youtube.com/watch?v=7drmXMS8Jj8&t=82s). Other builds use 150, or 110 to 140. [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md) [4:34](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=274s), [PYskozIWh-E](../sources/PYskozIWh-E.md) [26:31](https://www.youtube.com/watch?v=PYskozIWh-E&t=1591s)
- **Sticky scroll.** The parent must be a stack, and its height sets the scroll area, for example 1,600 px. [DRvge30wQFM](../sources/DRvge30wQFM.md) [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s), [1:20](https://www.youtube.com/watch?v=DRvge30wQFM&t=80s)
- **Breakpoints.** A new project starts at 1,200 px, so Tim changes it to his 1,440 px design width before he pastes. [AJBaBScKdwI](../sources/AJBaBScKdwI.md) [8:21](https://www.youtube.com/watch?v=AJBaBScKdwI&t=501s). In the 2024 course, he replaces the 1,200 px and 810 px defaults with 960 px and 560 px. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [1:05:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3942s)
- **Carousels.** Ticker loops items forever. Carousel uses browser scroll snapping and cannot be animated by hand. Slideshow has autoplay and custom animation. [nS_9yAABLwc](../sources/nS_9yAABLwc.md) [0:17](https://www.youtube.com/watch?v=nS_9yAABLwc&t=17s), [3:19](https://www.youtube.com/watch?v=nS_9yAABLwc&t=199s), [7:50](https://www.youtube.com/watch?v=nS_9yAABLwc&t=470s)
- **Bento grid.** Use 3 columns on desktop, 2 on tablet and 1 on phone. A card that spans 2 columns completes the bento pattern. [udTGvssp-h8](../sources/udTGvssp-h8.md) [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)
- **CMS.** More than one CMS collection needed a Pro plan (2023-09). [ADrNwS19i5I](../sources/ADrNwS19i5I.md) [3:10](https://www.youtube.com/watch?v=ADrNwS19i5I&t=190s). Upload video fields as .mp4, because .mov does not work. [ADrNwS19i5I](../sources/ADrNwS19i5I.md) [5:47](https://www.youtube.com/watch?v=ADrNwS19i5I&t=347s)
- **Framer AI.** A base page took less than 2 minutes, and the full page went live within 5 minutes (2023-06). Layout, assets and motion still need manual work. [U2EVNlDzAJQ](../sources/U2EVNlDzAJQ.md) [0:00](https://www.youtube.com/watch?v=U2EVNlDzAJQ&t=0s), [5:11](https://www.youtube.com/watch?v=U2EVNlDzAJQ&t=311s)
- **Copy a live site.** A browser extension copied 4 pages into Framer in about 57 seconds and all 6 in about 2 minutes (2023-09). Use it only on your own sites or free templates. [bBamB0yE12c](../sources/bBamB0yE12c.md) [2:05](https://www.youtube.com/watch?v=bBamB0yE12c&t=125s), [3:09](https://www.youtube.com/watch?v=bBamB0yE12c&t=189s)
- **A $5K site in 5 minutes 22 seconds.** Tim restyled a free Framer SaaS template. It publishes as a responsive, animated site in about 20 seconds (2024-07). [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) [1:04](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=64s), [6:22](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=382s)
- **3D with Spline.** A scroll container at 300vh holds a sticky Spline embed at 100vh. [4Byq1fjaUSY](../sources/4Byq1fjaUSY.md) [15:05](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=905s). See [Spline](../businesses/spline.md).
- **Cinematic hero.** Cut the character out of the background and zoom both layers at different rates. Put the headline between them. [m2NXQjKPUrg](../sources/m2NXQjKPUrg.md) [4:13](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=253s), [R33gaV3EV1I](../sources/R33gaV3EV1I.md) [1:07](https://www.youtube.com/watch?v=R33gaV3EV1I&t=67s)
- **Loop effect.** A butterfly flight needs 10 seconds, not the 1-second default. Mirror makes wing flaps play forward and back. [tBOazoVzBNk](../sources/tBOazoVzBNk.md) [1:40](https://www.youtube.com/watch?v=tBOazoVzBNk&t=100s), [2:42](https://www.youtube.com/watch?v=tBOazoVzBNk&t=162s)
- **Button tricks.** A 3D press button cuts its bottom padding from 6 to 2 in the pressed state. [inkIfPtmE9s](../sources/inkIfPtmE9s.md) [6:05](https://www.youtube.com/watch?v=inkIfPtmE9s&t=365s)
- **Performance and accessibility.** Blur hurts site speed, so use it with care. [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md) [4:49](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=289s). Add ARIA labels, tab order and heading tags. [XLWXztyA80Q](../sources/XLWXztyA80Q.md) [25:20](https://www.youtube.com/watch?v=XLWXztyA80Q&t=1520s), [nS_9yAABLwc](../sources/nS_9yAABLwc.md) [6:45](https://www.youtube.com/watch?v=nS_9yAABLwc&t=405s)
- **Code escape hatch.** Code components (.tsx) and code overrides add custom behavior. [XLWXztyA80Q](../sources/XLWXztyA80Q.md) [12:46](https://www.youtube.com/watch?v=XLWXztyA80Q&t=766s)

## Framer vs other tools

- **vs Webflow.** Webflow needs HTML and CSS knowledge. A Figma designer feels at home in Framer after a couple of hours (2023-05). [NT8w5ZS13ao](../sources/NT8w5ZS13ao.md) [0:43](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=43s). The Framer team moved Dribbble to Framer at no cost. [NT8w5ZS13ao](../sources/NT8w5ZS13ao.md) [3:13](https://www.youtube.com/watch?v=NT8w5ZS13ao&t=193s)
- **Prices (2023-09).** The Framer Mini plan cost $5 and the Webflow Basic plan cost $14. Webflow wins on CMS. Framer wins on Figma export and on its UI for designers. [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md) [0:00](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=0s), [1:01](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=61s). See [Webflow](../businesses/webflow.md).
- **vs Figma.** A designer who only makes websites needs only Framer. Apps, graphics and dashboards still need [Figma](../businesses/figma.md). [XPim-a5R6yw](../sources/XPim-a5R6yw.md) [0:56](https://www.youtube.com/watch?v=XPim-a5R6yw&t=56s)

## Disagreements

- **Is Framer enough as a design tool?** In 2022, Framer design tools were less flexible than Figma. [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md) [0:00](https://www.youtube.com/watch?v=0SzJOMS0RPA&t=0s). In 2023, Framer alone was enough for a web designer. [XPim-a5R6yw](../sources/XPim-a5R6yw.md) [0:56](https://www.youtube.com/watch?v=XPim-a5R6yw&t=56s)

> Conflict: [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md) (2022-09) calls Framer less flexible than Figma. [XPim-a5R6yw](../sources/XPim-a5R6yw.md) (2023-10) says it is enough on its own for websites.

- **Is the Framer CMS good enough?** One tutorial builds a full resource library on the Framer CMS. [ADrNwS19i5I](../sources/ADrNwS19i5I.md) [9:36](https://www.youtube.com/watch?v=ADrNwS19i5I&t=576s). The comparison video says complex setups need creative workarounds, so Webflow wins on CMS. [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md) [1:01](https://www.youtube.com/watch?v=t8ThPNdc_9w&t=61s)

Related topics: [UI design](ui-design.md), [Landing pages](landing-pages.md), [No-code](no-code.md), [Design tools](design-tools.md), [Prototyping](prototyping.md).

## Sources

- [0SzJOMS0RPA](../sources/0SzJOMS0RPA.md): Figma to website with Framer
- [13OKVxg6ecI](../sources/13OKVxg6ecI.md): components (Netflix carousel)
- [4Byq1fjaUSY](../sources/4Byq1fjaUSY.md): Figma to 3D site with Spline
- [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md): Figma scroll animation in Framer
- [ADrNwS19i5I](../sources/ADrNwS19i5I.md): Framer CMS
- [AJBaBScKdwI](../sources/AJBaBScKdwI.md): 4 tricks for Figma to Framer export
- [DRvge30wQFM](../sources/DRvge30wQFM.md): sticky scroll
- [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md): stacks, position and sizing
- [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md): scroll animations
- [NT8w5ZS13ao](../sources/NT8w5ZS13ao.md): designers leave Webflow
- [PYskozIWh-E](../sources/PYskozIWh-E.md): complete website tutorial
- [R33gaV3EV1I](../sources/R33gaV3EV1I.md): Avatar movie website
- [TWumjDt_cZg](../sources/TWumjDt_cZg.md): text and color styles
- [U2EVNlDzAJQ](../sources/U2EVNlDzAJQ.md): Framer AI
- [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md): parallax trick
- [XLWXztyA80Q](../sources/XLWXztyA80Q.md): from Figma to Framer in 28 minutes
- [XPim-a5R6yw](../sources/XPim-a5R6yw.md): Figma vs Framer
- [Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md): nested components
- [bBamB0yE12c](../sources/bBamB0yE12c.md): copy 6 websites in 66 seconds
- [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md): a $5K website in 5 minutes
- [inkIfPtmE9s](../sources/inkIfPtmE9s.md): button animations
- [m2NXQjKPUrg](../sources/m2NXQjKPUrg.md): hero animations
- [nS_9yAABLwc](../sources/nS_9yAABLwc.md): slideshow, ticker and carousel
- [rEjd7QRxtDY](../sources/rEjd7QRxtDY.md): breakpoints
- [t8ThPNdc_9w](../sources/t8ThPNdc_9w.md): Webflow vs Framer
- [tBOazoVzBNk](../sources/tBOazoVzBNk.md): loop effect
- [udTGvssp-h8](../sources/udTGvssp-h8.md): card layouts and bento grid
- [wgMgje60Ovw](../sources/wgMgje60Ovw.md): Framer mini course
- [zsxcr7aP2yo](../sources/zsxcr7aP2yo.md): easy scroll animation
