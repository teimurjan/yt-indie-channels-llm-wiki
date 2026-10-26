---
type: source
title: "Figma Smart Animate for Beginners (2022 Tutorial)"
sources: [thplNeqE9Tg]
updated: 2026-10-26
video_id: "thplNeqE9Tg"
channel: timgabe
published_at: 2022-07-21
url: "https://www.youtube.com/watch?v=thplNeqE9Tg"
raw: data/timgabe/md/2022-07-21_thplNeqE9Tg_figma-smart-animate-for-beginners-2022-tutorial.md
businesses: [figma]
people: [tim-gabe]
topics: [motion-design, prototyping, figma, ui-design]
---

# Figma Smart Animate for Beginners (2022 Tutorial)

## Summary

Tim Gabe explains Figma's Smart Animate prototype transition. Smart Animate animates the changes to a layer between two frames, for example size, rotation, position or opacity. He builds two examples: a rectangle that shrinks and rotates, and a sidebar that slides in, expands and collapses. He ends with the two custom curve types, Bezier and Spring, and explains how mass, stiffness and damping change the motion.

## Key facts

- Smart Animate needs the same layers, with the same names, in each frame. Duplicate the frame and then change the layer. [3:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=235s)
- A new interaction defaults to "Instant". Change it to "Smart animate". The example uses Ease In at 300 ms. [1:52](https://www.youtube.com/watch?v=thplNeqE9Tg&t=112s)
- Easing options include Ease In, Ease Out, Ease In and Out, Custom Bezier and Custom Spring. [1:52](https://www.youtube.com/watch?v=thplNeqE9Tg&t=112s)
- Triggers include On click, On drag, While hovering and While pressing. [1:52](https://www.youtube.com/watch?v=thplNeqE9Tg&t=112s)
- For dropdowns, accordions and button states, use interactive components instead of many frames. [4:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=295s)

## Tactics

- **Basic flow.** Duplicate the frame, rename it and change the object. Add a flow starting point. Then drag the "+" handle from the object to the next frame. [0:50](https://www.youtube.com/watch?v=thplNeqE9Tg&t=50s)
- **Add the return path.** A second click does nothing until you add an interaction from frame 2 back to frame 1. [2:53](https://www.youtube.com/watch?v=thplNeqE9Tg&t=173s)
- **Multi-state components.** For the sidebar, make three frames: hidden, open and expanded. Each frame links forward, and each close button links back to the first state. [3:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=235s), [4:55](https://www.youtube.com/watch?v=thplNeqE9Tg&t=295s)
- **Bezier curves.** A straight line gives linear motion. Pull the handles to get fast-then-slow or slow-fast-slow motion. Handles above the top line and below the baseline give a bounce. [5:57](https://www.youtube.com/watch?v=thplNeqE9Tg&t=357s), [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s)
- **Spring physics.** Mass is how heavy the object is: more mass gives more bounce. Stiffness is how hard the spring resists. Damping is friction: low damping bounces for a long time, and high damping removes the bounce. [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s), [8:00](https://www.youtube.com/watch?v=thplNeqE9Tg&t=480s), [9:01](https://www.youtube.com/watch?v=thplNeqE9Tg&t=541s)
- **Learn by playing.** Tim tells viewers to drag the curve handles and watch the result. He also links Maxime Heckel's article on cubic Bezier and Figma's article on spring animations. [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s)

## Quotes

- "You can play around with this and get a feel for how it works yourself. I think that's the easiest way to get a grip of animations." [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s)
- "Stiffness is a property unique to springs. If you've ever pulled on a spring before, you know that the further you pull on it the harder it resists." [6:59](https://www.youtube.com/watch?v=thplNeqE9Tg&t=419s)

## Links

- Businesses: [Figma](../businesses/figma.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Motion design](../topics/motion-design.md), [Prototyping](../topics/prototyping.md), [Figma](../topics/figma.md), [UI design](../topics/ui-design.md)
