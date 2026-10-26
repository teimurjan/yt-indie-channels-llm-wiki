---
type: source
title: "Crash Course on Framer CMS (Beginner Tutorial)"
sources: [ADrNwS19i5I]
updated: 2026-10-26
video_id: "ADrNwS19i5I"
channel: timgabe
published_at: 2023-09-14
url: "https://www.youtube.com/watch?v=ADrNwS19i5I"
raw: data/timgabe/md/2023-09-14_ADrNwS19i5I_crash-course-on-framer-cms-beginner-tutorial.md
businesses: [framer]
people: [tim-gabe]
topics: [framer, no-code, ui-design]
---

# Crash Course on Framer CMS (Beginner Tutorial)

## Summary

Tim Gabe rebuilds the resources section of timgabe.com to teach the Framer CMS from scratch. He says the CMS is the key to scalable sites such as blogs, portfolios and e-commerce pages. The build has four parts. First, a card component with a video hover preview. Second, a CMS collection with typed fields. Third, a detail page bound to the collection. Fourth, a collection list on the home page. It ends with conditional logic, so the play icon and video hover show only for items that have a video.

## Key facts

- There are three ways to create a CMS. Add a CMS page with 5 sample items. Use CMS in the top bar to import a CSV or add a blog. Or create an empty collection with the plus button. [2:34](https://www.youtube.com/watch?v=ADrNwS19i5I&t=154s), [3:10](https://www.youtube.com/watch?v=ADrNwS19i5I&t=190s)
- More than one CMS collection needs a Pro plan (2023-09). [3:10](https://www.youtube.com/watch?v=ADrNwS19i5I&t=190s)
- Field types: plain text, formatted text, link, image, color, toggle, options, number, date and file. [4:56](https://www.youtube.com/watch?v=ADrNwS19i5I&t=296s), [5:47](https://www.youtube.com/watch?v=ADrNwS19i5I&t=347s)
- For file fields he allows only .mp4. The .mov format does not work and is a poor choice for the web anyway. [5:47](https://www.youtube.com/watch?v=ADrNwS19i5I&t=347s), [6:49](https://www.youtube.com/watch?v=ADrNwS19i5I&t=409s)
- The slug sets the URL. It is usually best to base it on the title. [3:51](https://www.youtube.com/watch?v=ADrNwS19i5I&t=231s)

## Tactics

- **Design the content first.** Build the card and detail page before you create the CMS. [0:19](https://www.youtube.com/watch?v=ADrNwS19i5I&t=19s), [0:37](https://www.youtube.com/watch?v=ADrNwS19i5I&t=37s)
- **Hover video preview.** Make the card a component. Set the video to 0% opacity, then add a hover state with the video at 100% and the play button at 0%. [1:02](https://www.youtube.com/watch?v=ADrNwS19i5I&t=62s)
- **Use options fields for categories.** Resource type (working file or website) and software (Framer or Figma) are option fields. The most common value is the default. [5:47](https://www.youtube.com/watch?v=ADrNwS19i5I&t=347s)
- **Bind the detail page.** On the CMS detail page, set each element's variable: fill to color, text to title, video to YouTube URL, button link to resource link. [7:17](https://www.youtube.com/watch?v=ADrNwS19i5I&t=437s), [8:19](https://www.youtube.com/watch?v=ADrNwS19i5I&t=499s)
- **Collection list for the grid.** Insert a collection list, paste the card component inside, and switch the layout to grid. [9:36](https://www.youtube.com/watch?v=ADrNwS19i5I&t=576s), [10:31](https://www.youtube.com/watch?v=ADrNwS19i5I&t=631s)
- **Components need two steps.** First create component variables, then connect each variable to a CMS field from the home page. [11:00](https://www.youtube.com/watch?v=ADrNwS19i5I&t=660s), [14:35](https://www.youtube.com/watch?v=ADrNwS19i5I&t=875s)
- **Show icons by condition.** Tie each icon's visibility to the software variable. For example, the Figma icon shows if software equals Figma. [11:58](https://www.youtube.com/watch?v=ADrNwS19i5I&t=718s)
- **Remove default media for optional fields.** A default video always plays. Remove it, then tie play icon visibility to "video is set". [16:01](https://www.youtube.com/watch?v=ADrNwS19i5I&t=961s), [17:09](https://www.youtube.com/watch?v=ADrNwS19i5I&t=1029s)
- **Test each hover state.** Conditional logic can miss a variable in one state. In his test, the image in the hover state was not bound. [17:36](https://www.youtube.com/watch?v=ADrNwS19i5I&t=1056s), [17:55](https://www.youtube.com/watch?v=ADrNwS19i5I&t=1075s)

## Quotes

- "The framer CMS is the most important piece to build out scalable websites." [0:00](https://www.youtube.com/watch?v=ADrNwS19i5I&t=0s)
- "I hope the framer CMS feels less scary for you now." [17:55](https://www.youtube.com/watch?v=ADrNwS19i5I&t=1075s)

## Links

- Businesses: [Framer](../businesses/framer.md)
- People: [Tim Gabe](../people/tim-gabe.md)
- Topics: [Framer](../topics/framer.md), [No-code](../topics/no-code.md), [UI design](../topics/ui-design.md)
