---
type: topic
title: "Prototyping"
sources: [0Lhu6kYOCx0, 13OKVxg6ecI, 2Mvmz34QsLQ, 3xGJ80UpVeM, CfwNxDEXe6I, GVUchbe86HE, L-VwAxJ9hnY, NfqdWTfNYKI, RqxI6aODugE, WgbiGtPVm8Q, bdR3p6PvYQQ, dL-U6bkm0a0, eeGVBhZURUI, jZ1W85VdIBk, nyyuyPSxqww, oNhOh-e21Xg, s19_n6rcXIY, s_GRc42EjNU, thplNeqE9Tg]
updated: 2026-10-26
---

This page collects what the sources say about prototyping: clickable, animated mockups of an app or site that you make before or instead of code.

## Definition

A prototype is a fake version of a product that people can click, drag or scroll. Most sources here are [Tim Gabe](../people/tim-gabe.md) tutorials on [Figma](../businesses/figma.md) prototypes. Two sources add [Framer](../businesses/framer.md), [Lovable](../businesses/lovable.md) and ProtoPie.

## Repeated patterns

### Smart Animate does most of the work

- Smart Animate animates the changes to a layer between two frames, such as size, position, rotation or opacity ([thplNeqE9Tg](../sources/thplNeqE9Tg.md), [1:52](https://www.youtube.com/watch?v=thplNeqE9Tg&t=112s)).
- The layers must have the same names in each frame. So duplicate the frame first, then change the layer ([thplNeqE9Tg](../sources/thplNeqE9Tg.md), [3:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=235s)).
- Match the nesting too. One image outside its mask group caused a jump ([RqxI6aODugE](../sources/RqxI6aODugE.md), [22:14](https://www.youtube.com/watch?v=RqxI6aODugE&t=1334s)).
- An element only needs to exist in the frame just before its move ([nyyuyPSxqww](../sources/nyyuyPSxqww.md), [2:42](https://www.youtube.com/watch?v=nyyuyPSxqww&t=162s)). Add the next step's items early, at 0% opacity or off the canvas ([RqxI6aODugE](../sources/RqxI6aODugE.md), [8:37](https://www.youtube.com/watch?v=RqxI6aODugE&t=517s)).
- Tim argues that Smart Animate can replace After Effects for most UI motion work ([nyyuyPSxqww](../sources/nyyuyPSxqww.md), [1:11](https://www.youtube.com/watch?v=nyyuyPSxqww&t=71s)).

### "Clip content" is the core trick

- Most effects move or resize layers inside a frame that has clip content on. The image itself does not change ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [6:57](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=417s)).
- Text animations depend on this one setting ([0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [2:41](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=161s)).
- Clipped frames act as masks. Animate a frame's width down to 1 px to close an image like a curtain ([RqxI6aODugE](../sources/RqxI6aODugE.md), [1:17](https://www.youtube.com/watch?v=RqxI6aODugE&t=77s)).
- A number counter is an auto layout column of numbers that slides inside a clipped frame ([nyyuyPSxqww](../sources/nyyuyPSxqww.md), [3:43](https://www.youtube.com/watch?v=nyyuyPSxqww&t=223s)).

### Put interactions in component sets

- One interactive component replaces about 16 to 24 prototype frames ([eeGVBhZURUI](../sources/eeGVBhZURUI.md), [0:15](https://www.youtube.com/watch?v=eeGVBhZURUI&t=15s)).
- Interactions live on variants, so a hover button keeps working inside a card or a dropdown ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [5:56](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=356s)).
- Without a component set, the prototype does not scale and you cannot reuse it ([oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [4:05](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=245s)).
- Build the smallest parts first, then combine them ([WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md), [0:59](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=59s)).
- Wire all interactions on one variant, then duplicate it. The copies keep the links ([WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md), [6:59](https://www.youtube.com/watch?v=WgbiGtPVm8Q&t=419s)).
- Framer follows the same idea. A hover state can only change layers that exist in the default state ([13OKVxg6ecI](../sources/13OKVxg6ecI.md), [1:27](https://www.youtube.com/watch?v=13OKVxg6ecI&t=87s)).

### Plan the motion before you build it

- Take the target animation apart. List each trigger and state change first ([dL-U6bkm0a0](../sources/dL-U6bkm0a0.md), [0:36](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=36s)).
- Make the assets, then a storyboard of frames, then the links ([s19_n6rcXIY](../sources/s19_n6rcXIY.md), [0:26](https://www.youtube.com/watch?v=s19_n6rcXIY&t=26s)).
- Design the end state first. Then duplicate it and move the elements back to make the default ([oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [0:59](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=59s)).
- Most animation work is the tuning of timing and easing ([RqxI6aODugE](../sources/RqxI6aODugE.md), [4:20](https://www.youtube.com/watch?v=RqxI6aODugE&t=260s)).

### Easing: Bézier or spring

- Bézier curves are easy to use but can feel lifeless ([bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [1:24](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=84s)). Springs feel more alive but are harder to learn ([bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [2:40](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=160s)).
- Springs have three settings: stiffness, damping and mass. High damping removes the bounce ([thplNeqE9Tg](../sources/thplNeqE9Tg.md), [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s)).
- Tim gives three spring presets: aggressive, smooth and fun ([bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [4:53](https://www.youtube.com/watch?v=bdR3p6PvYQQ&t=293s)).

### Fake scroll, drag and time

- Scroll needs vertical overflow on the parent frame ([s_GRc42EjNU](../sources/s_GRc42EjNU.md), [0:15](https://www.youtube.com/watch?v=s_GRc42EjNU&t=15s)). A "Sticky" position then locks layers in place ([s_GRc42EjNU](../sources/s_GRc42EjNU.md), [2:02](https://www.youtube.com/watch?v=s_GRc42EjNU&t=122s)).
- A drag on a fake scroll bar can drive a parallax or a scroll story ([GVUchbe86HE](../sources/GVUchbe86HE.md), [4:45](https://www.youtube.com/watch?v=GVUchbe86HE&t=285s)), ([NfqdWTfNYKI](../sources/NfqdWTfNYKI.md), [4:43](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=283s)).
- An "after delay" of 1 ms starts the next step at once, with no click ([0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s)).
- Every two-way drag needs a link back. Put the drag trigger on the carousel, not on the frame ([L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md), [5:50](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=350s)).
- Constraints make a page resize correctly. Think of each one as a string that ties a child to a side of its parent ([3xGJ80UpVeM](../sources/3xGJ80UpVeM.md), [0:13](https://www.youtube.com/watch?v=3xGJ80UpVeM&t=13s)).

### Prototypes for product decisions

- Roger Chen's co-founder built tappable fake apps in ProtoPie. Roger carried them all day to feel the flows ([jZ1W85VdIBk](../sources/jZ1W85VdIBk.md), [5:48](https://www.youtube.com/watch?v=jZ1W85VdIBk&t=348s)).
- Before launch, [Bro](../businesses/bro.md) ran TikTok ads on mockup videos to test demand ([jZ1W85VdIBk](../sources/jZ1W85VdIBk.md), [8:51](https://www.youtube.com/watch?v=jZ1W85VdIBk&t=531s)).
- AI builders turn a prototype into an app. Tim gives [Lovable](../businesses/lovable.md) a requirements prompt and Figma screenshots of each screen ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [2:26](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=146s)).
- He builds the UI first and connects the database after ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [2:01](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=121s)). See [Vibe coding](vibe-coding.md).

## Concrete examples with numbers

| Example | Settings | Source |
|---|---|---|
| Text animations (domino, elevator, masked) | Smart Animate 500 ms, after delay 1 ms. 2 or 4 states | [0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [3:42](https://www.youtube.com/watch?v=0Lhu6kYOCx0&t=222s) |
| Button hover | While hovering, ease in, 300 ms | [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [4:53](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=293s) |
| Fancy button hover | While hovering, ease in and out, 200 ms | [oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [4:41](https://www.youtube.com/watch?v=oNhOh-e21Xg&t=281s) |
| Tab and button states | Smart Animate 150 ms | [eeGVBhZURUI](../sources/eeGVBhZURUI.md), [2:41](https://www.youtube.com/watch?v=eeGVBhZURUI&t=161s) |
| Automatic carousel | After delay 800 ms on the top frame | [L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md), [8:52](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=532s) |
| Game intro loader | Progress bar from 2 px to 390 px. Cards from 370 px to 410 px | [RqxI6aODugE](../sources/RqxI6aODugE.md), [2:18](https://www.youtube.com/watch?v=RqxI6aODugE&t=138s) |
| Splash screen | Custom spring, stiffness 400, damping 430 | [s19_n6rcXIY](../sources/s19_n6rcXIY.md), [5:22](https://www.youtube.com/watch?v=s19_n6rcXIY&t=322s) |
| Dynamic Island ([Apple](../businesses/apple.md)) | Island height 48, pill width 256, click about 500 ms | [dL-U6bkm0a0](../sources/dL-U6bkm0a0.md), [4:00](https://www.youtube.com/watch?v=dL-U6bkm0a0&t=240s) |
| Award-winning site scrolls | 800 ms fade-in, 300 ms ease-out steps | [NfqdWTfNYKI](../sources/NfqdWTfNYKI.md), [5:44](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=344s) |
| Hero intro with loader | 7 frames | [nyyuyPSxqww](../sources/nyyuyPSxqww.md), [1:40](https://www.youtube.com/watch?v=nyyuyPSxqww&t=100s) |
| Lovable YouTube clone | About 30 minutes, with login, upload, likes and comments | [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [0:00](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=0s) |

- The carousel tutorial is the most-viewed video in this batch, at about 286K views (2026-10) ([L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md), [0:00](https://www.youtube.com/watch?v=L-VwAxJ9hnY&t=0s)).
- Video fills in Figma needed a paid Pro plan (2023-02) ([NfqdWTfNYKI](../sources/NfqdWTfNYKI.md), [1:39](https://www.youtube.com/watch?v=NfqdWTfNYKI&t=99s)).
- The Bro mockup video on its brand account got 7.9M views ([jZ1W85VdIBk](../sources/jZ1W85VdIBk.md), [5:35](https://www.youtube.com/watch?v=jZ1W85VdIBk&t=335s)).

## Disagreements

- Tim says designers can make these animations in the tool they use every day and brief developers from it ([2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [0:00](https://www.youtube.com/watch?v=2Mvmz34QsLQ&t=0s)). Roger Chen says many designs look good in Figma but fail in the hand, so his team tested ProtoPie builds on a phone ([jZ1W85VdIBk](../sources/jZ1W85VdIBk.md), [7:29](https://www.youtube.com/watch?v=jZ1W85VdIBk&t=449s)).
  > Conflict: [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md) treats Figma prototypes as enough to brief a build. [jZ1W85VdIBk](../sources/jZ1W85VdIBk.md) says Figma designs can fail in the hand.

## Related

- Topics: [Figma](figma.md), [Motion design](motion-design.md), [Micro-interactions](micro-interactions.md), [Auto layout](auto-layout.md), [Design tools](design-tools.md), [Wireframing](wireframing.md), [Vibe coding](vibe-coding.md), [MVP](mvp.md).
- People: [Tim Gabe](../people/tim-gabe.md), [Roger Chen](../people/roger-chen.md).
- Businesses: [Figma](../businesses/figma.md), [Framer](../businesses/framer.md), [Lovable](../businesses/lovable.md), [Lobby](../businesses/lobby.md), [Bro](../businesses/bro.md).

## Sources

- [0Lhu6kYOCx0](../sources/0Lhu6kYOCx0.md), [13OKVxg6ecI](../sources/13OKVxg6ecI.md), [2Mvmz34QsLQ](../sources/2Mvmz34QsLQ.md), [3xGJ80UpVeM](../sources/3xGJ80UpVeM.md), [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [GVUchbe86HE](../sources/GVUchbe86HE.md), [L-VwAxJ9hnY](../sources/L-VwAxJ9hnY.md)
- [NfqdWTfNYKI](../sources/NfqdWTfNYKI.md), [RqxI6aODugE](../sources/RqxI6aODugE.md), [WgbiGtPVm8Q](../sources/WgbiGtPVm8Q.md), [bdR3p6PvYQQ](../sources/bdR3p6PvYQQ.md), [dL-U6bkm0a0](../sources/dL-U6bkm0a0.md), [eeGVBhZURUI](../sources/eeGVBhZURUI.md)
- [jZ1W85VdIBk](../sources/jZ1W85VdIBk.md), [nyyuyPSxqww](../sources/nyyuyPSxqww.md), [oNhOh-e21Xg](../sources/oNhOh-e21Xg.md), [s19_n6rcXIY](../sources/s19_n6rcXIY.md), [s_GRc42EjNU](../sources/s_GRc42EjNU.md), [thplNeqE9Tg](../sources/thplNeqE9Tg.md)
