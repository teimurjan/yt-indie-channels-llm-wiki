---
type: topic
title: "Motion design"
sources:
  - 0Lhu6kYOCx0
  - 11h4H3TAGkM
  - 2Mvmz34QsLQ
  - 4Byq1fjaUSY
  - 7drmXMS8Jj8
  - DRvge30wQFM
  - Du2lkZ_cux8
  - GVUchbe86HE
  - HHnlp_Bj0J4
  - L-VwAxJ9hnY
  - NfqdWTfNYKI
  - PYskozIWh-E
  - R33gaV3EV1I
  - RqxI6aODugE
  - U2EVNlDzAJQ
  - V-xm5c_XRWU
  - YtyJ4reSQY0
  - Z-Jic1TrMZQ
  - bdR3p6PvYQQ
  - dL-U6bkm0a0
  - evhZQg2NHfo
  - m2NXQjKPUrg
  - nS_9yAABLwc
  - nyyuyPSxqww
  - oNhOh-e21Xg
  - s19_n6rcXIY
  - tBOazoVzBNk
  - thplNeqE9Tg
  - wmTkiF23GRQ
  - zsxcr7aP2yo
updated: 2026-10-26
---

Motion design is the use of animation and transitions in an interface to guide, explain and add feeling.

Almost all sources here are [Tim Gabe](../people/tim-gabe.md) tutorials and breakdowns in [Figma](../topics/figma.md) and [Framer](../topics/framer.md).

## Repeated patterns

- **Clip content is the core trick.** Most effects move or resize layers inside a frame with clip content on. The image itself does not change ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [6:57](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=417s)).
  - Text reveals, counters and curtains all use it ([0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [2:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=161s), [RqxI6aODugE](../sources/RqxI6aODugE.md), [5:00](https://www.youtube.com/watch?v=RqxI6aODugE&t=300s)).
- **Smart Animate needs matching layers.** Layers need the same names and nesting in every frame ([thplNeqE9Tg](../sources/thplNeqE9Tg.md), [3:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=235s)).
  - One image outside its mask group caused a jump ([RqxI6aODugE](../sources/RqxI6aODugE.md), [22:14](https://www.youtube.com/watch?v=RqxI6aODugE&t=1334s)).
  - An element only needs to exist in the frame just before its transition ([nyyuyPSxqww](../sources/nyyuyPSxqww.md), [2:42](https://www.youtube.com/watch?v=nyyuyPSxqww&t=162s)).
- **Springs feel more alive than Bézier curves.** Springs are harder to learn but look smoother ([bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [2:40](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=160s)).
  - Stiffness sets the number of bounces. Damping sets how springy it is. Mass sets speed and bounce height ([bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [2:58](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=178s), [3:41](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=221s)).
  - His splash screen uses a custom spring with stiffness 400 and damping 430 ([s19_n6rcXIY](../sources/s19_n6rcXIY.md), [5:22](https://www.youtube.com/watch?v=s19_n6rcXIY&t=322s)).
- **Put states in component sets.** Interactions then live on variants and keep working inside other components ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [5:56](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=356s)).
  - Without a component set, a prototype does not scale ([oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [4:05](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=245s)).
- **Use a 1 ms "after delay" to chain steps.** The next step then fires at once, with no click ([0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s), [dL-U6bkm0a0](../sources/dL-U6bkm0a0.md), [7:37](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=457s)).
- **Parallax comes from different scroll speeds.** In Framer, 100 is normal speed. Values above 100 move a layer faster than the page ([7drmXMS8Jj8](../sources/7drmXMS8Jj8.md), [1:22](https://www.youtube.com/watch?v=7drmXMS8Jj8&t=82s)).
  - Move layers by different amounts, or they look flat ([GVUchbe86HE](../sources/GVUchbe86HE.md), [1:31](https://www.youtube.com/watch?v=GVUchbe86HE&t=91s)).
- **Sticky and scroll effects need visible overflow.** Every parent must be a stack with overflow set to visible ([DRvge30wQFM](../sources/DRvge30wQFM.md), [0:16](https://www.youtube.com/watch?v=DRvge30wQFM&t=16s), [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md), [4:14](https://www.youtube.com/watch?v=HHnlp_Bj0J4&t=254s)).
  - The same fix applies to Spline embeds, glows and 3D slideshows ([4Byq1fjaUSY](../sources/4Byq1fjaUSY.md), [15:52](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=952s), [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md), [17:51](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=1071s), [nS_9yAABLwc](../sources/nS_9yAABLwc.md), [8:57](https://www.youtube.com/watch?v=nS_9yAABLwc&t=537s)).
- **Stagger entrances.** Elements enter from different edges with small delays ([R33gaV3EV1I](../sources/R33gaV3EV1I.md), [2:09](https://www.youtube.com/watch?v=R33gaV3EV1I&t=129s)).
  - Text reveals use delays of 0.1, 0.2 and 0.3 seconds ([zsxcr7aP2yo](../sources/zsxcr7aP2yo.md), [8:00](https://www.youtube.com/watch?v=zsxcr7aP2yo&t=480s)).
  - A hero uses delays of 2 s, 2.5 s and 3 s for text, logo and scroll icon ([m2NXQjKPUrg](../sources/m2NXQjKPUrg.md), [12:01](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=721s)).
- **Copy and paste effects.** Tune one effect, then paste it on every similar layer ([4Byq1fjaUSY](../sources/4Byq1fjaUSY.md), [18:30](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=1110s), [tBOazoVzBNk](../sources/tBOazoVzBNk.md), [1:40](https://www.youtube.com/watch?v=tBOazoVzBNk&t=100s)).
- **Most of the work is timing.** Tune timing and easing, then copy settings from a tuned frame ([RqxI6aODugE](../sources/RqxI6aODugE.md), [4:20](https://www.youtube.com/watch?v=RqxI6aODugE&t=260s)).

## Motion as product strategy

- **Compete on feel.** APIs, no-code tools and AI make features cheap. Users remember how a product made them feel ([Du2lkZ_cux8](../sources/Du2lkZ_cux8.md), [0:25](https://www.youtube.com/watch?v=Du2lkZ_cux8&t=25s)).
- **[Duolingo](../businesses/duolingo.md).** It added a full character animation system in 2022. DAU grew from 14.2M to over 34M within 2 years ([Du2lkZ_cux8](../sources/Du2lkZ_cux8.md), [2:03](https://www.youtube.com/watch?v=Du2lkZ_cux8&t=123s)).
  - Tim notes that new languages, curriculum and marketing also drove that growth ([Du2lkZ_cux8](../sources/Du2lkZ_cux8.md), [3:05](https://www.youtube.com/watch?v=Du2lkZ_cux8&t=185s)).
- **[Phantom](../businesses/phantom.md).** It animated its ghost mascot in 2023 and became the #2 US utility app (2025-05) ([Du2lkZ_cux8](../sources/Du2lkZ_cux8.md), [6:30](https://www.youtube.com/watch?v=Du2lkZ_cux8&t=390s)).
- **Polish builds trust in high-stakes fields.** In finance, crypto and health, every micro-interaction is a trust signal ([Du2lkZ_cux8](../sources/Du2lkZ_cux8.md), [7:51](https://www.youtube.com/watch?v=Du2lkZ_cux8&t=471s)).
- **Design one peak and the end.** Put one "holy dang" moment after a core task. Close with a celebration or summary card ([11h4H3TAGkM](../sources/11h4H3TAGkM.md), [8:28](https://www.youtube.com/watch?v=11h4H3TAGkM&t=508s), [9:29](https://www.youtube.com/watch?v=11h4H3TAGkM&t=569s)).
  - Airbnb ends a booking with a 3D purchase animation ([11h4H3TAGkM](../sources/11h4H3TAGkM.md), [3:37](https://www.youtube.com/watch?v=11h4H3TAGkM&t=217s)).
- **Tie animation to a business goal.** Tim's agency uses Rive for interactive animations. Freecash, #2 on the App Store (2026-04), got a tiered diamond system ([wmTkiF23GRQ](../sources/wmTkiF23GRQ.md), [10:00](https://www.youtube.com/watch?v=wmTkiF23GRQ&t=600s), [11:02](https://www.youtube.com/watch?v=wmTkiF23GRQ&t=662s)).
- **Motion as a service.** [Skale](../businesses/skale.md) makes launch videos and 3D motion for AI startups with After Effects and Cinema 4D. It makes about $80K/month (2025-10) ([YtyJ4reSQY0](../sources/YtyJ4reSQY0.md), [7:07](https://www.youtube.com/watch?v=YtyJ4reSQY0&t=427s), [7:37](https://www.youtube.com/watch?v=YtyJ4reSQY0&t=457s)).

## Concrete builds

- **Figma basics.** Smart Animate, triggers and easing ([thplNeqE9Tg](../sources/thplNeqE9Tg.md), [1:52](https://www.youtube.com/watch?v=thplNeqE9Tg&t=112s)). Five beginner animations at 300 to 800 ms ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [2:03](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=123s)).
- **Text effects.** Domino, elevator and masked reveals at 500 ms ([0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [0:46](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=46s)).
- **Button hovers.** "While hovering", ease in and out, 200 ms ([oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [4:41](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=281s)).
- **Carousels.** Basic, drag, click and automatic types in Figma ([L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md), [0:00](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=0s)). Ticker, carousel and slideshow in Framer ([nS_9yAABLwc](../sources/nS_9yAABLwc.md), [0:17](https://www.youtube.com/watch?v=nS_9yAABLwc&t=17s)).
- **Dynamic Island.** Drag, delay and click states with a custom spring ([dL-U6bkm0a0](../sources/dL-U6bkm0a0.md), [0:36](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=36s)).
- **Award-winning sites in Figma.** Text masks and a product reveal ([NfqdWTfNYKI](../sources/NfqdWTfNYKI.md), [0:38](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=38s)).
- **Award-winning sites in Framer.** Mirrored loops for wings and a rocking head ([tBOazoVzBNk](../sources/tBOazoVzBNk.md), [1:40](https://www.youtube.com/watch?v=tBOazoVzBNk&t=100s)).
- **After Effects style in Figma.** A 7-frame hero intro and a looping social ad ([nyyuyPSxqww](../sources/nyyuyPSxqww.md), [1:40](https://www.youtube.com/watch?v=nyyuyPSxqww&t=100s)).
- **Framer sites.** A full site with appear effects and parallax ([PYskozIWh-E](../sources/PYskozIWh-E.md), [26:31](https://www.youtube.com/watch?v=PYskozIWh-E&t=1591s)). Nested components with tab micro-interactions ([Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md), [0:17](https://www.youtube.com/watch?v=Z-Jic1TrMZQ&t=17s)).
- **3D.** A Spline cube driven by scroll states, embedded in Framer ([4Byq1fjaUSY](../sources/4Byq1fjaUSY.md), [7:00](https://www.youtube.com/watch?v=4Byq1fjaUSY&t=420s)).
- **Cinematic heroes.** Cut the character from the background and zoom both at different rates ([R33gaV3EV1I](../sources/R33gaV3EV1I.md), [1:07](https://www.youtube.com/watch?v=R33gaV3EV1I&t=67s)).
- **AI as a base.** Framer AI made a page in under 2 minutes (2023-06). Motion and assets still need manual work ([U2EVNlDzAJQ](../sources/U2EVNlDzAJQ.md), [0:00](https://www.youtube.com/watch?v=U2EVNlDzAJQ&t=0s)).

## Risks

- Blur hurts site performance ([V-xm5c_XRWU](../sources/V-xm5c_XRWU.md), [4:49](https://www.youtube.com/watch?v=V-xm5c_XRWU&t=289s)).
- Heavy animated sites can fail on older phones and slow internet. Glaze has a long loading animation ([evhZQg2NHfo](../sources/evhZQg2NHfo.md), [2:19](https://www.youtube.com/watch?v=evhZQg2NHfo&t=139s)).

## Disagreements

> Conflict: [evhZQg2NHfo](../sources/evhZQg2NHfo.md) says experience-first sites look great but can convert less, so pick brand or conversion on purpose. [YtyJ4reSQY0](../sources/YtyJ4reSQY0.md) says Skale skips conversion tweaks and makes work that goes viral.

> Conflict: [bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md) says Bézier curves control only the start and end of a motion and often feel lifeless. [thplNeqE9Tg](../sources/thplNeqE9Tg.md) says Bézier handles pulled past the lines give a bounce.

## Sources

- [thplNeqE9Tg](../sources/thplNeqE9Tg.md): "Figma Smart Animate for Beginners (2022 Tutorial)" (2022-07)
- [RqxI6aODugE](../sources/RqxI6aODugE.md): "Advanced Smart Animate in Figma (Carousel, Loader & More)" (2022-07)
- [dL-U6bkm0a0](../sources/dL-U6bkm0a0.md): "Apple's Dynamic Island Animation in Figma (Beginner Tutorial)" (2022-09)
- [nyyuyPSxqww](../sources/nyyuyPSxqww.md): "How To Animate Like After Effects in Figma" (2022-11)
- [oNhOh-e21Xg](../sources/oNhOh-e21Xg.md): "Fancy Button Hovers For Figma Beginners in 2023" (2022-12)
- [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md): "5 Most Useful Figma Animations For UI Beginners" (2023-01)
- [0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md): "How to Recreate Amazing Text Animations in Figma" (2023-02)
- [GVUchbe86HE](../sources/GVUchbe86HE.md): "Parallax Scroll Animation in 6 Minutes (Figma Tutorial)" (2023-02)
- [NfqdWTfNYKI](../sources/NfqdWTfNYKI.md): "3 Award Winning Website Animations (Figma Tutorial)" (2023-02)
- [s19_n6rcXIY](../sources/s19_n6rcXIY.md): "Splash Screen Animation in 6 Minutes (Figma Tutorial)" (2023-03)
- [bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md): "The Secret Trick For Amazing Animations in Figma" (2023-04)
- [L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md): "Create Any Carousel in Figma (Beginner Tutorial)" (2023-05)
- [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md): "Make Your Figma Scroll Animation Real in 4 Minutes (Using Framer)" (2023-04)
- [PYskozIWh-E](../sources/PYskozIWh-E.md): "Complete Website in Framer: Beginner Tutorial" (2023-05)
- [nS_9yAABLwc](../sources/nS_9yAABLwc.md): "Master Carousels in Framer (Slideshow, Ticker & Carousel)" (2023-06)
- [U2EVNlDzAJQ](../sources/U2EVNlDzAJQ.md): "I used Framer AI to create a website… in 5 minutes" (2023-06)
- [tBOazoVzBNk](../sources/tBOazoVzBNk.md): "Award Winning Website in Framer (Loop Effect Tutorial)" (2023-07)
- [HHnlp_Bj0J4](../sources/HHnlp_Bj0J4.md): "Framer Scroll Animations For Beginners" (2023-08)
- [DRvge30wQFM](../sources/DRvge30wQFM.md): "Sticky Scroll Explained in 3 Minutes (Framer Tutorial)" (2023-08)
- [m2NXQjKPUrg](../sources/m2NXQjKPUrg.md): "5 Tricks For Epic Hero Animations (Framer Tutorial)" (2023-10)
- [zsxcr7aP2yo](../sources/zsxcr7aP2yo.md): "Easy Scroll Animation for Beginners (Framer Tutorial)" (2023-10)
- [R33gaV3EV1I](../sources/R33gaV3EV1I.md): "I Made the Biggest Movie Ever Into a Website" (2023-10)
- [Z-Jic1TrMZQ](../sources/Z-Jic1TrMZQ.md): "Nested Components in Framer (Beginner Tutorial)" (2023-11)
- [V-xm5c_XRWU](../sources/V-xm5c_XRWU.md): "Framer Parallax Trick (Loop + Scroll Speed Tutorial)" (2023-11)
- [4Byq1fjaUSY](../sources/4Byq1fjaUSY.md): "From Figma to 3D Website Using Framer + Spline" (2023-11)
- [evhZQg2NHfo](../sources/evhZQg2NHfo.md): "6 Stunning Websites For UI/UX Inspiration" (2023-03)
- [Du2lkZ_cux8](../sources/Du2lkZ_cux8.md): "The Secret Behind Weirdly Addictive Apps" (2025-05)
- [YtyJ4reSQY0](../sources/YtyJ4reSQY0.md): "Teen From Kazakhstan Makes $1M/Year Online" (2025-10)
- [11h4H3TAGkM](../sources/11h4H3TAGkM.md): "The Tiny Design Rule Behind Top 1% Apps" (2025-12)
- [wmTkiF23GRQ](../sources/wmTkiF23GRQ.md): "Our World Class App Design Formula" (2026-04)

## Related

- Businesses: [Jitter](../businesses/jitter.md), [Spline](../businesses/spline.md), [Clipt](../businesses/clipt.md)
- Topics: [Micro-interactions](micro-interactions.md), [Figma](figma.md), [Framer](framer.md), [UI design](ui-design.md), [Landing pages](landing-pages.md), [Prototyping](prototyping.md), [Auto layout](auto-layout.md)
