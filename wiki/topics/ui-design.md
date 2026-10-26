---
type: topic
title: "UI design"
sources: [0GMQRCnOQmo, 86PGRyQjdzQ, 88XxC0_zs74, 8EAYZe6y3I8, AnL49w4yIOw, GDjxXRLHEg4, IaFrUED28mo, LWPN-PAhtLA, PGQnGEH7c-E, RdHXcv1k_Dg, YS7uOXjmJTA, YtyJ4reSQY0, _uva2dQPlV8, bOm9GDv96Tk, blDSmD5I61s, cmSBbnrFGPg, cocnZubvfFE, dXKzST0FE-A, doiaMtD80p8, evhZQg2NHfo, hCKdIwbhS-s, j0KT9yaa-NI, lgE0ULApU4E, m3NjcBDqFnA, ohF93_k3IMk, qmJVN2158Mk, sybtdc4dYzE, tJCv91c6Krk, vBuyR8uF380, wgMgje60Ovw, wmTkiF23GRQ, zRUoPIwCxfw, 40UAK-LKheA, 7drmXMS8Jj8, XPim-a5R6yw, CfwNxDEXe6I]
updated: 2026-10-26
---

UI design is the visual layer of an app or a website: type, color, spacing, layout, components, motion and the states that tell users what happens. Almost all sources here come from the designer [Tim Gabe](../people/tim-gabe.md). He designed for [Spotify](../businesses/spotify.md) and runs the studio [Zipsnap](../businesses/zipsnap.md).

## Repeated patterns

- **Space on an 8-point grid.** Every padding, gap, icon and button height divides by 8, or by 4 for tight parts: 4, 8, 12, 16, 24, 32, 40, 48. Developers then see a 31 px value as a mistake. [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md) [7:15](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=435s), [ohF93_k3IMk](../sources/ohF93_k3IMk.md) [0:25](https://www.youtube.com/watch?v=ohF93_k3IMk&t=25s), [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [9:40](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=580s), [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [4:00](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=240s)
- **Do not force the grid on fluid widths.** Card widths follow the columns and shrink with the page. [ohF93_k3IMk](../sources/ohF93_k3IMk.md) [4:36](https://www.youtube.com/watch?v=ohF93_k3IMk&t=276s). See [Grid systems](grid-systems.md).
- **Space by relationship.** Related items sit closer. A heading sits 1x (16 px) from its body and 2x (32 px) from the block above. [88XxC0_zs74](../sources/88XxC0_zs74.md) [8:38](https://www.youtube.com/watch?v=88XxC0_zs74&t=518s)
- **A second spacing recipe.** Use 24 px inside a text group, 48 px to the buttons and 80 to 96 px to an image. Give each section at least 160 px of vertical padding. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [2:59](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=179s), [4:59](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=299s)
- **Use a column grid.** Use 12 columns on desktop, 8 on tablet and 4 on mobile. [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md) [6:20](https://www.youtube.com/watch?v=GDjxXRLHEg4&t=380s), [sybtdc4dYzE](../sources/sybtdc4dYzE.md) [8:30](https://www.youtube.com/watch?v=sybtdc4dYzE&t=510s), [tJCv91c6Krk](../sources/tJCv91c6Krk.md) [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s)
- **Break the grid only on purpose.** A carousel can bleed off the edge, and arced text can cross the container. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [7:52](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=472s), [vBuyR8uF380](../sources/vBuyR8uF380.md) [13:41](https://www.youtube.com/watch?v=vBuyR8uF380&t=821s)
- **Readable lines.** Keep body text at 50 to 75 characters, about 600 px wide on desktop. [88XxC0_zs74](../sources/88XxC0_zs74.md) [7:17](https://www.youtube.com/watch?v=88XxC0_zs74&t=437s), [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [4:59](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=299s), [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [1:04:42](https://www.youtube.com/watch?v=wgMgje60Ovw&t=3882s)
- **Line height and letter spacing.** Headings get 1.1x to 1.3x line height and slightly negative letter spacing. Body text gets 1.3x to 1.5x. [88XxC0_zs74](../sources/88XxC0_zs74.md) [3:14](https://www.youtube.com/watch?v=88XxC0_zs74&t=194s)
- **Set the type scale first.** It tells you which sizes you use. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [1:35](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=95s). See [Typography](typography.md).
- **Strong color only for the main action.** Google keeps the page white and gray, so its blue button stands out. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [5:27](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=327s)
- **Color ratios.** One rule is 60-30-10: neutral, complementary, brand. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [2:02](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=122s). Another is three colors: base, primary and neutral. [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [9:22](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=562s). Body text must pass AA contrast. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [8:31](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=511s). See [Color](color.md).
- **Copy good work to learn.** Rebuild live sites pixel for pixel. Trace a locked, faded screenshot. [lgE0ULApU4E](../sources/lgE0ULApU4E.md) [6:06](https://www.youtube.com/watch?v=lgE0ULApU4E&t=366s), [blDSmD5I61s](../sources/blDSmD5I61s.md) [6:30](https://www.youtube.com/watch?v=blDSmD5I61s&t=390s), [40UAK-LKheA](../sources/40UAK-LKheA.md) [4:09](https://www.youtube.com/watch?v=40UAK-LKheA&t=249s)
- **Split research in two.** Collect "structure" references and "look and feel" references apart. [RdHXcv1k_Dg](../sources/RdHXcv1k_Dg.md) [2:20](https://www.youtube.com/watch?v=RdHXcv1k_Dg&t=140s), [m3NjcBDqFnA](../sources/m3NjcBDqFnA.md) [5:07](https://www.youtube.com/watch?v=m3NjcBDqFnA&t=307s). For apps, start in [Mobbin](../businesses/mobbin.md) instead of manual screenshots. [qmJVN2158Mk](../sources/qmJVN2158Mk.md) [2:54](https://www.youtube.com/watch?v=qmJVN2158Mk&t=174s)
- **Design every state.** Show what the system does and let users undo. Give errors, empty lists and declined payments the same care as success screens. [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md) [1:37](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=97s), [8:32](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=512s). Settle states and edge cases before visuals. [wmTkiF23GRQ](../sources/wmTkiF23GRQ.md) [5:25](https://www.youtube.com/watch?v=wmTkiF23GRQ&t=325s)
- **Make components from repetition.** Design freely first. Then turn repeated items into atoms, molecules and organisms. [_uva2dQPlV8](../sources/_uva2dQPlV8.md) [1:30](https://www.youtube.com/watch?v=_uva2dQPlV8&t=90s). Keep key actions in the same place, so users build muscle memory. [doiaMtD80p8](../sources/doiaMtD80p8.md) [12:02](https://www.youtube.com/watch?v=doiaMtD80p8&t=722s). See [Design systems](design-systems.md).
- **Design is the moat in the AI era.** AI-built sites look alike. So reuse your own design system and copy the patterns of sites you love. [LWPN-PAhtLA](../sources/LWPN-PAhtLA.md) [6:58](https://www.youtube.com/watch?v=LWPN-PAhtLA&t=418s). Better models raise the floor, and specific creative direction raises the ceiling. [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) [3:27](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=207s)

## Concrete examples

- **Neobank redesign.** After a Zipsnap redesign of a crypto card app, money loaded onto cards rose 79% and successful card deposits rose 71% (2026-10). [0GMQRCnOQmo](../sources/0GMQRCnOQmo.md) [0:00](https://www.youtube.com/watch?v=0GMQRCnOQmo&t=0s). The work included 15 status screens and one-tap card controls. [0GMQRCnOQmo](../sources/0GMQRCnOQmo.md) [5:34](https://www.youtube.com/watch?v=0GMQRCnOQmo&t=334s), [6:36](https://www.youtube.com/watch?v=0GMQRCnOQmo&t=396s). A second video on the same client says new accounts grew 60% (2026-10). [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md) [8:32](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=512s)
- **One pattern for one state.** [Undertone](../businesses/undertone.md) had two different "used all your sessions" screens. The redesign has one badge ("2/2 sessions used") and the exact refresh date. [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md) [5:11](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=311s)
- **Beginner vs senior screen.** The beginner screen used 6 font sizes and 4 weights. The senior screen used 4 sizes and 2 weights and kept red only for meaning. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [3:01](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=181s), [12:06](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=726s)
- **Designer pay by level (2025-04).** Juniors take $100 to $500 gigs. Mid-level designers earn $8K to $10K/month. Seniors close $20K to over $100K deals, because clients trust them to move metrics. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [4:00](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=240s), [10:15](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=615s)
- **Trust in 50 ms.** People judge the trust of an app within 50 milliseconds. Primary actions pop and secondary actions fade. [AnL49w4yIOw](../sources/AnL49w4yIOw.md) [4:57](https://www.youtube.com/watch?v=AnL49w4yIOw&t=297s), [7:00](https://www.youtube.com/watch?v=AnL49w4yIOw&t=420s)
- **Consistency saves time.** In a 2009 York study, a nav bar that moved from left to right more than doubled the time on that page. [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md) [4:10](https://www.youtube.com/watch?v=8EAYZe6y3I8&t=250s)
- **Apple habits.** [Apple](../businesses/apple.md) uses physics-based feedback, visual cues instead of tutorials, and key actions within about three taps. [doiaMtD80p8](../sources/doiaMtD80p8.md) [0:47](https://www.youtube.com/watch?v=doiaMtD80p8&t=47s), [3:23](https://www.youtube.com/watch?v=doiaMtD80p8&t=203s), [9:29](https://www.youtube.com/watch?v=doiaMtD80p8&t=569s)
- **AI art direction scores (2026-09).** A bare prompt scored 5/15. Skill files plus a basic design system scored 8/15. Every reference at once scored 4/15. Human art direction scored 15/15. [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) [1:51](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=111s), [5:21](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=321s), [13:04](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=784s)
- **A $5K site from a template.** Tim restyled a free [Framer](framer.md) template into a branded site in 5 minutes 22 seconds. He cites $10K freelance and $20K to $28K agency prices for such sites (2024-07). [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md) [0:00](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=0s), [6:22](https://www.youtube.com/watch?v=hCKdIwbhS-s&t=382s)
- **Hero copy limits.** Keep headings at 40 to 60 characters and body text at 140 to 170. Pick one desired action. [m3NjcBDqFnA](../sources/m3NjcBDqFnA.md) [1:25](https://www.youtube.com/watch?v=m3NjcBDqFnA&t=85s), [4:36](https://www.youtube.com/watch?v=m3NjcBDqFnA&t=276s). See [Landing pages](landing-pages.md).
- **Design as a business.** [DesignJoy](../businesses/designjoy.md) made about $1.3M/year with one designer and about 20 clients (2023-05). [dXKzST0FE-A](../sources/dXKzST0FE-A.md) [0:54](https://www.youtube.com/watch?v=dXKzST0FE-A&t=54s). [Skale](../businesses/skale.md) reached about $80K/month (2025-10) after free redesigns of famous brands went viral on X. [YtyJ4reSQY0](../sources/YtyJ4reSQY0.md) [2:33](https://www.youtube.com/watch?v=YtyJ4reSQY0&t=153s), [7:07](https://www.youtube.com/watch?v=YtyJ4reSQY0&t=427s)
- **Outcome-first UI.** Repetitive utility flows are the "danger zone" that AI removes. Experience products, such as games, keep their UI. [zRUoPIwCxfw](../sources/zRUoPIwCxfw.md) [6:17](https://www.youtube.com/watch?v=zRUoPIwCxfw&t=377s), [8:03](https://www.youtube.com/watch?v=zRUoPIwCxfw&t=483s)

## Disagreements

- **How many fonts.** One font is enough, even for seasoned designers. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [0:33](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=33s), [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md) [0:21](https://www.youtube.com/watch?v=PGQnGEH7c-E&t=21s). Other builds start from a font pair, such as Oswald with Merriweather. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) [0:38:12](https://www.youtube.com/watch?v=wgMgje60Ovw&t=2292s), [cocnZubvfFE](../sources/cocnZubvfFE.md) [0:23](https://www.youtube.com/watch?v=cocnZubvfFE&t=23s)

> Conflict: [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) says one font is enough. [wgMgje60Ovw](../sources/wgMgje60Ovw.md) and [cocnZubvfFE](../sources/cocnZubvfFE.md) use two.

- **How many sizes.** "Try to use only two sizes." [88XxC0_zs74](../sources/88XxC0_zs74.md) [7:56](https://www.youtube.com/watch?v=88XxC0_zs74&t=476s). The senior example uses 4 sizes. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) [13:05](https://www.youtube.com/watch?v=86PGRyQjdzQ&t=785s)

> Conflict: [88XxC0_zs74](../sources/88XxC0_zs74.md) says two sizes. [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md) aims for four.

- **How much AI replaces.** In 2022, Tim said pixel pushing is the perfect target for AI. Designers must own context and tradeoffs. [IaFrUED28mo](../sources/IaFrUED28mo.md) [2:18](https://www.youtube.com/watch?v=IaFrUED28mo&t=138s). In 2025, he says AI gets 80% of the way and is fine alone for marketing visuals. Complex products still need a designer. [bOm9GDv96Tk](../sources/bOm9GDv96Tk.md) [0:45](https://www.youtube.com/watch?v=bOm9GDv96Tk&t=45s), [6:42](https://www.youtube.com/watch?v=bOm9GDv96Tk&t=402s). In 2026, more AI context made the output worse, not better. [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) [5:21](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=321s)
- **Showpiece vs conversion.** Award sites often use text that is hard to read. Content pages must put legibility first. [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md) [4:37](https://www.youtube.com/watch?v=cmSBbnrFGPg&t=277s). Experience-first sites can convert less, so pick one goal. [evhZQg2NHfo](../sources/evhZQg2NHfo.md) [16:45](https://www.youtube.com/watch?v=evhZQg2NHfo&t=1005s)
- **Portfolio site polish.** At Spotify, a weak portfolio site was enough to reject a designer. Tim still says to keep the site simple and to ship it. [j0KT9yaa-NI](../sources/j0KT9yaa-NI.md) [1:50](https://www.youtube.com/watch?v=j0KT9yaa-NI&t=110s), [3:26](https://www.youtube.com/watch?v=j0KT9yaa-NI&t=206s)

## Tools

Most sources design in [Figma](../businesses/figma.md) and publish websites with [Framer](framer.md). Framer alone is enough for websites. Figma stays for apps and graphics. [XPim-a5R6yw](../sources/XPim-a5R6yw.md) [0:56](https://www.youtube.com/watch?v=XPim-a5R6yw&t=56s), [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md) [0:00](https://www.youtube.com/watch?v=7drmXMS8Jj8&t=0s). [Lovable](../businesses/lovable.md) takes Figma screenshots as visual specs. [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md) [2:26](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=146s)

Related topics: [UX design](ux-design.md), [Mobile app design](mobile-app-design.md), [Motion design](motion-design.md), [Micro-interactions](micro-interactions.md), [Responsive design](responsive-design.md), [Auto layout](auto-layout.md), [Wireframing](wireframing.md), [Design tools](design-tools.md), [Figma](figma.md).

## Sources

- [0GMQRCnOQmo](../sources/0GMQRCnOQmo.md): neobank redesign
- [86PGRyQjdzQ](../sources/86PGRyQjdzQ.md): 4 levels of UI/UX design
- [88XxC0_zs74](../sources/88XxC0_zs74.md): 6 UI hacks
- [8EAYZe6y3I8](../sources/8EAYZe6y3I8.md): psychology of premium apps
- [AnL49w4yIOw](../sources/AnL49w4yIOw.md): how addictive apps are made
- [GDjxXRLHEg4](../sources/GDjxXRLHEg4.md): Figma workflow tips
- [IaFrUED28mo](../sources/IaFrUED28mo.md): the UI skill for the AI era
- [LWPN-PAhtLA](../sources/LWPN-PAhtLA.md): Cursor Directory
- [PGQnGEH7c-E](../sources/PGQnGEH7c-E.md): design better than 99% of designers
- [RdHXcv1k_Dg](../sources/RdHXcv1k_Dg.md), [cmSBbnrFGPg](../sources/cmSBbnrFGPg.md), [vBuyR8uF380](../sources/vBuyR8uF380.md): landing page design, parts 1 to 3
- [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md): the formula behind great apps
- [YtyJ4reSQY0](../sources/YtyJ4reSQY0.md): Skale
- [_uva2dQPlV8](../sources/_uva2dQPlV8.md): first design system in Figma
- [bOm9GDv96Tk](../sources/bOm9GDv96Tk.md): do companies need designers
- [blDSmD5I61s](../sources/blDSmD5I61s.md): Figma in 20 minutes
- [cocnZubvfFE](../sources/cocnZubvfFE.md): 4 tips for landing pages
- [dXKzST0FE-A](../sources/dXKzST0FE-A.md): DesignJoy
- [doiaMtD80p8](../sources/doiaMtD80p8.md): Apple design
- [evhZQg2NHfo](../sources/evhZQg2NHfo.md): 6 websites for inspiration
- [hCKdIwbhS-s](../sources/hCKdIwbhS-s.md): a $5K website in 5 minutes
- [j0KT9yaa-NI](../sources/j0KT9yaa-NI.md): portfolio mistakes
- [lgE0ULApU4E](../sources/lgE0ULApU4E.md): self-taught UI/UX designer
- [m3NjcBDqFnA](../sources/m3NjcBDqFnA.md): landing page hero workflow
- [ohF93_k3IMk](../sources/ohF93_k3IMk.md): the 8pt grid
- [qmJVN2158Mk](../sources/qmJVN2158Mk.md): 5 tools for designers
- [sybtdc4dYzE](../sources/sybtdc4dYzE.md): responsive grids
- [tJCv91c6Krk](../sources/tJCv91c6Krk.md): responsive design crash course
- [wgMgje60Ovw](../sources/wgMgje60Ovw.md): Framer mini course
- [wmTkiF23GRQ](../sources/wmTkiF23GRQ.md): app design formula
- [zRUoPIwCxfw](../sources/zRUoPIwCxfw.md): invisible app design
- [40UAK-LKheA](../sources/40UAK-LKheA.md): wireframe hack
- [7drmXMS8Jj8](../sources/7drmXMS8Jj8.md): Figma scroll animation in Framer
- [XPim-a5R6yw](../sources/XPim-a5R6yw.md): Figma vs Framer
- [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md): Lovable tutorial
- The other tutorials on the same channel cover Figma and Framer mechanics: animation, masks, components and carousels. The [Framer](framer.md), [Motion design](motion-design.md) and [Figma](figma.md) pages use them.
