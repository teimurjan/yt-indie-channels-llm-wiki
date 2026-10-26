---
type: source
title: "5 Tricks For Epic Hero Animations (Framer Tutorial)"
sources: [m2NXQjKPUrg]
updated: 2026-10-26
video_id: "m2NXQjKPUrg"
channel: timgabe
published_at: 2023-10-05
url: "https://www.youtube.com/watch?v=m2NXQjKPUrg"
raw: data/timgabe/md/2023-10-05_m2NXQjKPUrg_5-tricks-for-epic-hero-animations-framer-tutorial.md
businesses: [framer, midjourney, photoshop, framer-supply, lottiefiles]
people: [tim-gabe]
topics: [framer, ui-design, motion-design, landing-pages]
---

# 5 Tricks For Epic Hero Animations (Framer Tutorial)

## Summary

Tim Gabe builds an animated hero section in Framer from one Midjourney image. He splits the character from the background in Photoshop. Then he adds five effects in Framer: a zoom-in on load, a sparkle particle layer, big overlay text, a Lottie scroll icon, and staggered spring animations. The working file is linked in the video description. He also promotes the waitlist for his Framer course.

## Key facts

- Visual source: a Midjourney wallpaper in an "Avatar" style. [0:00](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=0s)
- Photoshop steps: Object Selection, then Select and Mask with output to a new layer. Then the Content-Aware Remove tool and Generative Fill to rebuild the background. [0:38](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=38s), [1:13](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=73s)
- He exports two PNGs: the foreground character and the merged background. [1:50](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=110s), [2:24](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=144s)
- The hero frame has width set to fill and height set to 100vh. The background is pinned at -150px on all sides. [3:00](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=180s), [3:36](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=216s)

## Tactics

- **Trick 1: zoom on load.** Set the appear effect to opacity 1 and scale 0.85, with a 2-second ease transition. The -150px pin keeps the scaled image full-screen. Copy and paste the effect onto the character too. [4:13](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=253s), [4:50](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=290s)
- **Trick 2: sparkles.** Copy the Particles component from framer.supply. Give each instance a unique ID, or the instances conflict and do not show. Set the backdrop to 0% opacity and pin it to all sides of the background. The particles react to mouse hover. [5:26](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=326s), [6:02](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=362s), [6:37](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=397s)
- **Trick 3: big bold text.** Use white text with an Overlay blend, a custom font and a shadow (Y 4, blur 12). Set the size to "fit" so the text scales with its container. Put the character above the text so the text sits on the horizon. [7:13](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=433s), [7:50](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=470s), [11:24](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=684s)
- **Trick 4: Lottie scroll icon.** Insert the Lottie component and paste a hosted Lottie URL of a scrolling mouse. Stack it with a small label in a layout with a 20px gap, 48px from the bottom. [8:24](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=504s), [9:00](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=540s), [10:13](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=613s)
- **Trick 5: staggered spring entrances.** The logo slides in from the top: delay 2.5s, more mass, more damping, stiffness 300. The scroll stack comes from the bottom (offset 60, delay 3s). The big text uses offset 500, delay 2s and damping 80. [12:01](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=721s), [13:02](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=782s), [14:03](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=843s)

## Quotes

- "The easiest way to make a hero section look amazing is by finding great visuals." [0:00](https://www.youtube.com/watch?v=m2NXQjKPUrg&t=0s)

## Links

- Businesses: [Framer](../businesses/framer.md), [Midjourney](../businesses/midjourney.md), Photoshop, Framer Supply, LottieFiles
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [UI design](../topics/ui-design.md), [Motion design](../topics/motion-design.md), [Landing pages](../topics/landing-pages.md)
