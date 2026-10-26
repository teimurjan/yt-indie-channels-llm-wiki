---
type: topic
title: "Auto layout"
sources: [GVxFxyHNy_o, Kf8L3CeiWzQ, tJCv91c6Krk, udTGvssp-h8]
updated: 2026-10-26
---

Auto layout covers the flexbox-style layout features in design tools: Figma's auto layout and Framer's stacks. All four sources are tutorials by [Tim Gabe](../people/tim-gabe.md).

## Definition

Auto layout is a container that places its children in a row or column, with set spacing, padding and alignment. It is Figma's version of CSS flexbox ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [0:22](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=22s)). In [Framer](../businesses/framer.md) the same idea is called a stack ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [1:13](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=73s)).

## Repeated patterns

### Why use it

- **Scale, consistency and control.** Duplicate a row to make a table. Change spacing in one place. Set 8, 12 or 16 px once for all items ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [0:41](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=41s)).
- **The container does the spacing.** "The stack takes care of the spacing and the structure for us" ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [4:53](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=293s)).

### Three sizing modes

- **Fixed** does not respond. **Fill** stretches with the parent. **Hug** (Figma) or **fit content** (Framer) fits the content ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [3:52](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=232s); [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [5:30](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=330s)).
- Framer's fill works only inside stacks and uses fractions: 2fr takes twice the space of 1fr ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [4:53](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=293s)).
- Set fit-content height on every level. Then wrapped rows and grids do not squeeze or overflow ([udTGvssp-h8](../sources/udTGvssp-h8.md), [1:45](https://www.youtube.com/watch?v=udTGvssp-h8&t=105s); [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s)).

### Absolute position breaks one item out

- One child, such as a tag in a card corner, can ignore the layout while the others keep it. Tim calls this his favorite Figma auto layout feature ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [4:50](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=290s)). Framer works the same way ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [2:34](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=154s)).

### Nest small groups

- Wrap related layers in their own auto layout with clear names: nav links, logo plus nav, text, image plus text ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [3:48](https://www.youtube.com/watch?v=tJCv91c6Krk&t=228s); [Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [5:58](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=358s)).
- Build the card first, then the grid. Stacks and fixed sizing rules keep the card in shape inside the grid ([udTGvssp-h8](../sources/udTGvssp-h8.md), [0:11](https://www.youtube.com/watch?v=udTGvssp-h8&t=11s)).

### Make it responsive

- Auto layout alone does not resize with the frame. Set constraints to left and right ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [5:54](https://www.youtube.com/watch?v=tJCv91c6Krk&t=354s)).
- Switch children to "fill container". Two children then take 50% each and three take 33% ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [6:57](https://www.youtube.com/watch?v=tJCv91c6Krk&t=417s)).
- Use "space between" for nav gaps, because packed gaps do not stretch ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [4:51](https://www.youtube.com/watch?v=tJCv91c6Krk&t=291s)).
- On tablet, switch the hero from horizontal to vertical and put the image on top ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s)).
- Turn on wrap and give each card a relative width of 33% for a wrapping card grid ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [9:04](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=544s)).

## Concrete examples with numbers

- Shortcut: Shift+A adds auto layout in Figma ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [1:36](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=96s)).
- Breakpoint ranges: mobile 0 to 640 px, tablet 641 to 1024 px, desktop 1025 px and up ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [1:02](https://www.youtube.com/watch?v=tJCv91c6Krk&t=62s)).
- Grids: 12 columns on desktop, 8 on tablet, 4 on mobile. Desktop margins are 64 px, mobile margins 16 px ([tJCv91c6Krk](../sources/tJCv91c6Krk.md), [12:09](https://www.youtube.com/watch?v=tJCv91c6Krk&t=729s), [15:15](https://www.youtube.com/watch?v=tJCv91c6Krk&t=915s)).
- Framer card grid: 24 px gap, 3 columns on desktop, 2 on tablet, 1 on phone. One card that spans 2 columns gives a bento layout ([udTGvssp-h8](../sources/udTGvssp-h8.md), [2:18](https://www.youtube.com/watch?v=udTGvssp-h8&t=138s), [2:46](https://www.youtube.com/watch?v=udTGvssp-h8&t=166s)).
- An 8 px stroke inside the layout pushes the content. An excluded stroke does not ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [2:58](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=178s)).

## Disagreements

- No direct conflict. One tension: in Figma, Tim groups items in auto layout early ([Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [5:58](https://www.youtube.com/watch?v=Kf8L3CeiWzQ&t=358s)). In Framer, he explores in free frames first and converts to stacks once the structure is set, because stacks are rigid ([GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [6:34](https://www.youtube.com/watch?v=GVxFxyHNy_o&t=394s)).

## Sources

- Figma: [Kf8L3CeiWzQ](../sources/Kf8L3CeiWzQ.md), [tJCv91c6Krk](../sources/tJCv91c6Krk.md)
- Framer: [GVxFxyHNy_o](../sources/GVxFxyHNy_o.md), [udTGvssp-h8](../sources/udTGvssp-h8.md)

## Related

- Businesses: [Figma](../businesses/figma.md), [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Figma](figma.md), [Framer](framer.md), [Responsive design](responsive-design.md), [Grid systems](grid-systems.md), [UI design](ui-design.md), [Design tools](design-tools.md)
