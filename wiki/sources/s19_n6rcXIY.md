---
type: source
title: "Splash Screen Animation in 6 Minutes (Figma Tutorial)"
sources: [s19_n6rcXIY]
updated: 2026-10-26
video_id: "s19_n6rcXIY"
channel: timgabe
published_at: 2023-03-16
url: "https://www.youtube.com/watch?v=s19_n6rcXIY"
raw: data/timgabe/md/2023-03-16_s19_n6rcXIY_splash-screen-animation-in-6-minutes-figma-tutorial.md
businesses: [figma]
people: [tim-gabe]
topics: [motion-design, prototyping, mobile-app-design, figma]
---

## Summary

Tim Gabe shows how to build an animated splash screen for a mobile app in Figma in about 6 minutes. Many popular apps use animated splash screens to feel more professional. The method has three steps: create the assets, lay out a storyboard of frames, then connect the frames with Smart Animate and a custom spring. The animation uses only a gradient rectangle, a clipped text container and an iPhone mockup.

## Key facts

- Assets: a rounded rectangle with a linear gradient fill and a 2 px stroke at 15% opacity. Also a text container frame with no fill and "clip content" on, plus an iPhone mockup. [0:26](https://www.youtube.com/watch?v=s19_n6rcXIY&t=26s)
- Story of the animation: the rectangle fades in and rises to center. It grows and rotates 135 degrees, then shrinks to 32 px and becomes a circle. The circle moves right while the text is revealed. Then the circle grows and the text fades out. [1:31](https://www.youtube.com/watch?v=s19_n6rcXIY&t=91s), [2:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=152s), [3:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=212s)
- Interaction settings: After delay of 1 ms, Smart Animate, custom spring with stiffness 400 and damping 430. The last transition uses 650. [5:22](https://www.youtube.com/watch?v=s19_n6rcXIY&t=322s), [6:23](https://www.youtube.com/watch?v=s19_n6rcXIY&t=383s)

## Tactics

- **Assets, storyboard, interactions.** Build assets first, then lay out each state as a frame, then add prototype links. [0:26](https://www.youtube.com/watch?v=s19_n6rcXIY&t=26s), [1:31](https://www.youtube.com/watch?v=s19_n6rcXIY&t=91s), [5:22](https://www.youtube.com/watch?v=s19_n6rcXIY&t=322s)
- **Rectangle to circle without a shape change.** Keep the same corner radius and shrink the rectangle. At small sizes the radius makes it round. [2:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=152s)
- **Clip everything.** Put shapes inside a background frame with clip content on, so nothing shows outside the screen. [2:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=152s), [3:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=212s)
- **Text reveal.** Start the text clipped and a bit to the left inside its container, so it both reveals and slides right. [4:33](https://www.youtube.com/watch?v=s19_n6rcXIY&t=273s)
- **Scale with K.** Use the K tool to scale by 1.5x and set rotation to minus 135 degrees. [3:32](https://www.youtube.com/watch?v=s19_n6rcXIY&t=212s)
- **Set once, reuse.** Configure the first interaction, then connect the rest. Figma keeps the same settings for the new links. [5:22](https://www.youtube.com/watch?v=s19_n6rcXIY&t=322s)

## Quotes

- "The storyboard is exactly what it sounds like." [1:31](https://www.youtube.com/watch?v=s19_n6rcXIY&t=91s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Motion design](../topics/motion-design.md), [Prototyping](../topics/prototyping.md), [Mobile app design](../topics/mobile-app-design.md), [Figma](../topics/figma.md)
