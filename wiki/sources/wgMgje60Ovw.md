---
type: source
title: "Learn Framer For Beginners: Mini Course (2024)"
sources: [wgMgje60Ovw]
updated: 2026-10-26
video_id: "wgMgje60Ovw"
channel: timgabe
published_at: 2024-07-10
url: "https://www.youtube.com/watch?v=wgMgje60Ovw"
raw: data/timgabe/md/2024-07-10_wgMgje60Ovw_learn-framer-for-beginners-mini-course-2024.md
businesses: [framer, figma]
people: [tim-gabe]
topics: [framer, design-systems, ui-design, landing-pages, no-code]
---

## Summary

This is a free mini course of 2 hours 5 minutes, cut from Tim Gabe's paid "Framer Zero to Hero" course (23+ hours). It builds one responsive hero section in Framer for a demo e-commerce brand that sells digital icons. There are seven lessons: the web box model, Framer layout settings, a style guide, responsive text styles, color and link styles, the section structure, and breakpoints. There are three main ideas. Everything on the web is a box. A style guide keeps the site consistent and scalable. Always check the published site in a real browser.

## Key facts

- Course length: about 2h05m. It is a sample of the 23+ hour paid course ([0:00:00](https://www.youtube.com/watch?v=wgMgje60Ovw&t=0s)).
- Fonts: Oswald for headings and CTAs, Merriweather for body text. Both are Google Fonts, which Framer supports natively ([0:38:12](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2292s), [0:39:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2353s)).
- Heading sizes: 200, 164, 96, 64, 48, 40 and 32px. Body sizes are 24, 20, 16 and 12px in Merriweather, plus Oswald body sizes down to 14px ([0:40:15](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2415s), [0:42:21](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2541s)).
- H1 style: uppercase, letter spacing -0.03, line height 110%, bold ([0:42:21](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2541s)).
- Breakpoints: large from 960px, medium from 560px, small below that. The phone canvas is 320px. Framer's defaults (1,200px and 810px) were changed ([1:05:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3942s), [1:06:44](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4004s)).
- Colors: dark at 100/75/50/25/20/10/5/3% and light at 100/50%, plus accents (teal, orange, purple, red). The palette was made in Coolors ([0:44:22](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2662s), [1:12:29](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4349s)).
- Hero: max width 1,200px at first, later 960px. Min height 100vh. Button height 88px on desktop, 72px on tablet and 64px on phone. Side padding 16px on desktop and 12px on mobile ([1:46:31](https://www.youtube.com/watch?v=wgMgje60Ovw&t=6391s), [1:52:46](https://www.youtube.com/watch?v=wgMgje60Ovw&t=6766s), [2:03:03](https://www.youtube.com/watch?v=wgMgje60Ovw&t=7383s)).

## Tactics

- **Think in boxes.** Every element is a box. Wrap the nav in a section, a max-width container, and left, center and right boxes. Use as few boxes as you can for performance ([0:01:37](https://www.youtube.com/watch?v=wgMgje60Ovw&t=97s), [0:03:44](https://www.youtube.com/watch?v=wgMgje60Ovw&t=224s)).
- **Learn the layout settings.** Stacks are Framer's version of Figma Auto Layout. Sizing can be fixed, fit, fill (fractions) or relative (%). Position can be absolute, fixed (for navbars), relative (the parent stack controls it) or sticky (with a top offset). Wrap gives a free responsive card grid ([0:18:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=1122s), [0:29:03](https://www.youtube.com/watch?v=wgMgje60Ovw&t=1743s), [0:33:11](https://www.youtube.com/watch?v=wgMgje60Ovw&t=1991s), [0:35:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2113s)).
- **Hide the style guide page.** Give the style guide page a random slug of numbers so the public does not find it ([0:39:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2353s)).
- **Shortcut for responsive type.** Each heading's medium and small sizes are the next two heading sizes down (H1: 200, 164, 96). Text at 18px or below stays the same size on every device. Keep text blocks under 600px wide ([0:58:14](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3494s), [1:01:33](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3693s), [1:04:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3882s)).
- **Name colors by role.** Use "dark 100", not "black", so the palette can change. Attach colors to text styles. Set a link style: dark 100 by default, dark 50 on hover, with an ease transition ([1:11:29](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4289s), [1:16:36](https://www.youtube.com/watch?v=wgMgje60Ovw&t=4596s)).
- **Make text fill the width.** Set the font size to 100% and the parent to fill, so the text scales with the viewport. Small spaces before and after a word even out lines of different lengths ([1:35:13](https://www.youtube.com/watch?v=wgMgje60Ovw&t=5713s), [1:37:18](https://www.youtube.com/watch?v=wgMgje60Ovw&t=5838s)).
- **Put decorations inside a max-width wrapper.** Absolute-position the 3D images inside a wrapper with a max width. Then they do not drift to the screen edges on wide monitors ([1:31:06](https://www.youtube.com/watch?v=wgMgje60Ovw&t=5466s), [1:46:31](https://www.youtube.com/watch?v=wgMgje60Ovw&t=6391s)).
- **Use a 4-point grid.** Use fixed heights (such as 88px) instead of padding that breaks the grid ([1:28:02](https://www.youtube.com/watch?v=wgMgje60Ovw&t=5282s)).
- **Make the page a stack.** Then you can drag sections to reorder them ([1:42:24](https://www.youtube.com/watch?v=wgMgje60Ovw&t=6144s)).
- **Set breakpoints by pins and sizes.** Remove extra pins so items stay centered. Shrink images, buttons, radius and padding at each breakpoint. Text set to fill and centered on the desktop frame does not overflow on mobile ([1:56:51](https://www.youtube.com/watch?v=wgMgje60Ovw&t=7011s), [2:02:01](https://www.youtube.com/watch?v=wgMgje60Ovw&t=7321s)).
- **Check the live site.** Publish and check each change in the browser, not only on the canvas ([1:53:47](https://www.youtube.com/watch?v=wgMgje60Ovw&t=6827s)).

## Quotes

- "It's not rocket science, it's just boxes upon boxes." ([0:17:07](https://www.youtube.com/watch?v=wgMgje60Ovw&t=1027s))
- "Your websites become really scalable when you start utilizing style guides and color styles and text styles and even components." ([0:51:34](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3094s))

## Links

- Businesses: [Framer](../businesses/framer.md), [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [Design systems](../topics/design-systems.md), [UI design](../topics/ui-design.md), [Landing pages](../topics/landing-pages.md), [No-code](../topics/no-code.md)
