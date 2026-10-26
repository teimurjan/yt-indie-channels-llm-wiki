---
type: topic
title: "Vibe coding"
sources: [0T55DRYqeeA, 4hMg_CZauJs, 5u9u8yzPEpA, 7KqlwjBM_tM, 8BtHk-oNlN0, 8kM-JcKpcDs, 9r0qPeSJGog, CfwNxDEXe6I, CwHD6Fg-Mjs, D4fkiQfzw_I, DiRxTfnHTaY, Eg93po_DAYo, FCGpgPZqmkY, GQ27QVp3SzQ, L_FY6aW9cJ4, NPpky92ZfjA, Nnpz1wsTjBI, P4QodeA_lQ0, PIXXEAfo6MY, Q4k8JNYKJT0, QXxESN94Y6s, RypUD_Fuaqw, SJOFUBNHYqU, V_4kiR3R4QU, YS7uOXjmJTA, aLidq3_FwW0, axH1e2cZSrw, d8PdJJcEtE0, dWeoSKLt_fc, jpSY4MlWX50, nsn94Ad47GY, orYTlk_BhW8, qYYeu0E-1SI, qmJVN2158Mk, s9aLA4IOSZE, vbEKEWtnndU, xWnqY2Mav4s, yBjcmMhXSDk, zpTXi8WxeM0]
updated: 2026-10-26
---

This page collects what the sources say about vibe coding: building software by prompting AI tools instead of writing code by hand.

## Definition

In vibe coding, the founder describes what they want. An AI tool writes the code, for example Cursor, Claude Code, Codex, Lovable, Bolt, Replit or Rork. Many founders in these sources did not know how to code before. The main effect: build time drops from months to days, so distribution decides who wins.

## Repeated patterns

### Build time dropped to days

- [Kyan](../people/kyan.md) vibe coded every line of [ToneAdapt](../businesses/toneadapt.md) V1 in about a week. He says it takes a couple of hours today (2026-06) ([Q4k8JNYKJT0](../sources/Q4k8JNYKJT0.md), [5:28](https://www.youtube.com/watch?v=Q4k8JNYKJT0&t=328s)).
- [Frank Smith](../people/frank-smith.md) built [GeoSports](../businesses/geosports.md) in 8 hours with Claude. It makes $40K/month (2026-09) ([s9aLA4IOSZE](../sources/s9aLA4IOSZE.md), [7:36](https://www.youtube.com/watch?v=s9aLA4IOSZE&t=456s)).
- [Mau Baron](../people/mau-baron.md) coded [Prayer Lock](../businesses/prayer-lock.md) in 3 days. App Store approval took over a week ([yBjcmMhXSDk](../sources/yBjcmMhXSDk.md), [3:56](https://www.youtube.com/watch?v=yBjcmMhXSDk&t=236s)).
- [Kyle Fowler](../people/kyle-fowler.md) had Cursor's agent generate the [Scanemon](../businesses/scanemon.md) MVP in one day. [Cardstock](../businesses/cardstock.md), the same concept, took about 6 months in 2019 ([xWnqY2Mav4s](../sources/xWnqY2Mav4s.md), [5:25](https://www.youtube.com/watch?v=xWnqY2Mav4s&t=325s)).
- [Benjamin Chen](../people/benjamin-chen.md) builds a good app without the backend in 4 to 5 hours ([P4QodeA_lQ0](../sources/P4QodeA_lQ0.md), [3:46](https://www.youtube.com/watch?v=P4QodeA_lQ0&t=226s)).
- [Tim Gabe](../people/tim-gabe.md) built an internal tool for his brother's company on his phone in about 3 hours with [Lovable](../businesses/lovable.md) ([qmJVN2158Mk](../sources/qmJVN2158Mk.md), [1:39](https://www.youtube.com/watch?v=qmJVN2158Mk&t=99s)).
- App Store review, not code, is now often the slow step. [Cal Buddy](../businesses/cal-buddy.md) worked in 2 weeks but took about 2 months to go live ([GQ27QVp3SzQ](../sources/GQ27QVp3SzQ.md), [3:08](https://www.youtube.com/watch?v=GQ27QVp3SzQ&t=188s)). [Wrestle AI](../businesses/wrestle-ai.md) spent two weeks on Apple rejections after one week in Rork ([8kM-JcKpcDs](../sources/8kM-JcKpcDs.md), [3:40](https://www.youtube.com/watch?v=8kM-JcKpcDs&t=220s)).

### Plan and spec before you prompt

- Write a requirements doc first: pages, features per page, database tables, visual style and build order ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [0:59](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=59s)).
- Write the data structures as JSON examples with a note on each field, so the AI does not guess ([CwHD6Fg-Mjs](../sources/CwHD6Fg-Mjs.md), [3:59](https://www.youtube.com/watch?v=CwHD6Fg-Mjs&t=239s)).
- Use one AI as product manager and another as coder. [Alex Finn](../people/alex-finn.md) asks ChatGPT for micro steps and feeds them to Cursor ([4hMg_CZauJs](../sources/4hMg_CZauJs.md), [4:51](https://www.youtube.com/watch?v=4hMg_CZauJs&t=291s)). [Paulius Masalskas](../people/paulius-masalskas.md) gets a beginner build plan from Perplexity ([jpSY4MlWX50](../sources/jpSY4MlWX50.md), [3:43](https://www.youtube.com/watch?v=jpSY4MlWX50&t=223s)).
- Have Claude research a reference product and write the spec ([s9aLA4IOSZE](../sources/s9aLA4IOSZE.md), [7:36](https://www.youtube.com/watch?v=s9aLA4IOSZE&t=456s)).
- Tell the AI to plan for 100,000 users, so the architecture holds later ([9r0qPeSJGog](../sources/9r0qPeSJGog.md), [12:58](https://www.youtube.com/watch?v=9r0qPeSJGog&t=778s)).

### Design first, then give the AI pictures

- UI first, then the database ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [2:01](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=121s), [PIXXEAfo6MY](../sources/PIXXEAfo6MY.md), [7:37](https://www.youtube.com/watch?v=PIXXEAfo6MY&t=457s)).
- Design in Figma, then hand the screens to Claude Code or Cursor ([P4QodeA_lQ0](../sources/P4QodeA_lQ0.md), [3:46](https://www.youtube.com/watch?v=P4QodeA_lQ0&t=226s), [qYYeu0E-1SI](../sources/qYYeu0E-1SI.md), [5:19](https://www.youtube.com/watch?v=qYYeu0E-1SI&t=319s)).
- Clone from screenshots. [David Attias](../people/david-attias.md) captured every competitor screen and asked Cursor for the same screen ([orYTlk_BhW8](../sources/orYTlk_BhW8.md), [5:14](https://www.youtube.com/watch?v=orYTlk_BhW8&t=314s)). He thinks the Figma MCP cuts an MVP from 1 month to 2 weeks ([orYTlk_BhW8](../sources/orYTlk_BhW8.md), [6:48](https://www.youtube.com/watch?v=orYTlk_BhW8&t=408s)).
- Turn a spreadsheet into an app. Export it as CSV, ask the AI tool to build it, then fix each wrong calculation ([d8PdJJcEtE0](../sources/d8PdJJcEtE0.md), [6:30](https://www.youtube.com/watch?v=d8PdJJcEtE0&t=390s)).

### Prompt small and debug with evidence

- Fewer instructions per prompt give better results ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [13:57](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=837s)). Build in blocks and do not try to one-shot an app ([yBjcmMhXSDk](../sources/yBjcmMhXSDk.md), [4:54](https://www.youtube.com/watch?v=yBjcmMhXSDk&t=294s)).
- Paste console errors back into the chat. Describe errors the AI cannot see, such as a 404 ([CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [19:14](https://www.youtube.com/watch?v=CfwNxDEXe6I&t=1154s)).
- When stuck in one tool, ask Claude to fix and check the code ([DiRxTfnHTaY](../sources/DiRxTfnHTaY.md), [3:08](https://www.youtube.com/watch?v=DiRxTfnHTaY&t=188s)).

### Prototype tool first, real stack later

- Bolt for the MVP, then Cursor for production. Bolt gets you about 80% of the way ([jpSY4MlWX50](../sources/jpSY4MlWX50.md), [4:46](https://www.youtube.com/watch?v=jpSY4MlWX50&t=286s)).
- [Vadim Strizheus](../people/vadim-strizheus.md) left Lovable for GitHub and Supabase, which cost less ([QXxESN94Y6s](../sources/QXxESN94Y6s.md), [4:19](https://www.youtube.com/watch?v=QXxESN94Y6s&t=259s)).
- [Lino Leighton](../people/lino-leighton.md) spent 2 months in Lovable, threw it away and rebuilt V2 in Rork in 1 month ([RypUD_Fuaqw](../sources/RypUD_Fuaqw.md), [4:25](https://www.youtube.com/watch?v=RypUD_Fuaqw&t=265s)).
- [Presh](../people/presh.md) uses Lovable, Replit or Bolt only to test MVPs, and Claude Code with Xcode for the real apps ([SJOFUBNHYqU](../sources/SJOFUBNHYqU.md), [8:33](https://www.youtube.com/watch?v=SJOFUBNHYqU&t=513s), [11:37](https://www.youtube.com/watch?v=SJOFUBNHYqU&t=697s)).
- No-code app builders still need help for payments. George paid a $250 Fiverr developer to add payments and auth to a Rork app ([8kM-JcKpcDs](../sources/8kM-JcKpcDs.md), [3:40](https://www.youtube.com/watch?v=8kM-JcKpcDs&t=220s)).

### Distribution is the moat

- [Pat Walls](../people/pat-walls.md) argues that AI coding floods every niche with apps, so content decides who wins ([Q4k8JNYKJT0](../sources/Q4k8JNYKJT0.md), [16:52](https://www.youtube.com/watch?v=Q4k8JNYKJT0&t=1012s)).
- Many founders build the audience before the product. [Alex Finn](../people/alex-finn.md) posted for 3 years first ([4hMg_CZauJs](../sources/4hMg_CZauJs.md), [9:16](https://www.youtube.com/watch?v=4hMg_CZauJs&t=556s)). [Sarah Pearl](../people/sarah-pearl.md) read comments for "I wish this existed" ([Eg93po_DAYo](../sources/Eg93po_DAYo.md), [12:57](https://www.youtube.com/watch?v=Eg93po_DAYo&t=777s)). [Coherence](../businesses/coherence.md) built the app around what went viral ([nsn94Ad47GY](../sources/nsn94Ad47GY.md), [3:44](https://www.youtube.com/watch?v=nsn94Ad47GY&t=224s)).
- Lino rebuilds the product only after marketing is stable at $5K to $10K/month ([RypUD_Fuaqw](../sources/RypUD_Fuaqw.md), [11:27](https://www.youtube.com/watch?v=RypUD_Fuaqw&t=687s)).
- Without vibe coding, ideas stall. [Max Hirsch](../people/max-hirsch.md)'s earlier app stalled because he did not know how to build it. Claude Code on a $15 plan unblocked [Maxed AI](../businesses/maxed-ai.md) ([aLidq3_FwW0](../sources/aLidq3_FwW0.md), [3:58](https://www.youtube.com/watch?v=aLidq3_FwW0&t=238s)).

### Taste is the other moat

- Tim Gabe built one alarm app at four levels of design input. A bare prompt scored 5/15. Overloading the AI with every reference scored 4/15. Human art direction scored 15/15 ([YS7uOXjmJTA](../sources/YS7uOXjmJTA.md), [1:51](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=111s), [5:21](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=321s), [13:04](https://www.youtube.com/watch?v=YS7uOXjmJTA&t=784s)).
- Pat says [Cat on Chair](../businesses/cat-on-chair.md) spread partly because its handcrafted look does not feel vibe coded ([V_4kiR3R4QU](../sources/V_4kiR3R4QU.md), [13:35](https://www.youtube.com/watch?v=V_4kiR3R4QU&t=815s)).

## Concrete examples with numbers

| Builder | Tools | Result | Source |
|---|---|---|---|
| [Alex Finn](../people/alex-finn.md), [Creator Buddy](../businesses/creator-buddy.md) | Cursor, then Windsurf | $100K ARR in 15 minutes on launch day, $300K ARR in 2 weeks (2025-01) | [4hMg_CZauJs](../sources/4hMg_CZauJs.md) [0:53](https://www.youtube.com/watch?v=4hMg_CZauJs&t=53s) |
| [Sarah Pearl](../people/sarah-pearl.md), [Stella](../businesses/stella.md) | Claude, Claude Code, Google AI Studio | MVP in ~2 days, $340K/month app (2026-07) | [Eg93po_DAYo](../sources/Eg93po_DAYo.md) [6:39](https://www.youtube.com/watch?v=Eg93po_DAYo&t=399s) |
| [CJ Zafir](../people/cj-zafir.md), [CodeGuide](../businesses/codeguide.md) | Cursor, Windsurf, Bolt landing page | $42K MRR after ~3 months (2025-05) | [0T55DRYqeeA](../sources/0T55DRYqeeA.md) [1:36](https://www.youtube.com/watch?v=0T55DRYqeeA&t=96s) |
| [Gil Hildebrand](../people/gil-hildebrand.md), [Subscribr](../businesses/subscribr.md) | Claude Code writes ~90% of the code | $30K/month micro SaaS (2025-12) | [7KqlwjBM_tM](../sources/7KqlwjBM_tM.md) [13:16](https://www.youtube.com/watch?v=7KqlwjBM_tM&t=796s) |
| [Christian](../people/christian.md) and [Braylin](../people/braylin.md), [3AK](../businesses/3ak.md) | Rork, Claude Code | Built in ~2 weeks, $10K in month one | [DiRxTfnHTaY](../sources/DiRxTfnHTaY.md) [1:47](https://www.youtube.com/watch?v=DiRxTfnHTaY&t=107s) |
| [Cedric Roberge](../people/cedric-roberge.md), [Pep AI](../businesses/pep-ai.md) | Replit, Claude as "senior developer" | Built in ~2 weeks, $30K/month in 35 days (2026-05) | [vbEKEWtnndU](../sources/vbEKEWtnndU.md) [3:25](https://www.youtube.com/watch?v=vbEKEWtnndU&t=205s) |
| [Connor Burd](../people/connor-burd.md), [Payout](../businesses/payout.md) | Claude Code, Next.js, Expo | $20K/month app built in 14 days (2025-10) | [CwHD6Fg-Mjs](../sources/CwHD6Fg-Mjs.md) [11:54](https://www.youtube.com/watch?v=CwHD6Fg-Mjs&t=714s) |
| [Hassam](../people/hassam.md), [LaunchFast](../businesses/launchfast.md) | Cursor Max ($200/month) | Tool built in 48 hours for a partner, $25K/month (2026-01) | [FCGpgPZqmkY](../sources/FCGpgPZqmkY.md) [4:44](https://www.youtube.com/watch?v=FCGpgPZqmkY&t=284s) |
| [Sam Adeniyi](../people/sam-adeniyi.md), [Algrow](../businesses/algrow.md) | ChatGPT code pasted into Notepad, then Cursor | MVP in ~1 week, ~$13K-$14K in 4 weeks (2026-01) | [9r0qPeSJGog](../sources/9r0qPeSJGog.md) [4:03](https://www.youtube.com/watch?v=9r0qPeSJGog&t=243s) |
| [David Attias](../people/david-attias.md), [Stoppr](../businesses/stoppr.md) | Cursor at $20/month | $12K/month, 35% margin (2025-10) | [orYTlk_BhW8](../sources/orYTlk_BhW8.md) [7:05](https://www.youtube.com/watch?v=orYTlk_BhW8&t=425s) |
| [Jack Sweeney](../people/jack-sweeney.md), [Coherence](../businesses/coherence.md) | Cursor, Claude Code, Codex, no code by hand | $85K in 8 months, coding agents $300/month (2025-11) | [nsn94Ad47GY](../sources/nsn94Ad47GY.md) [5:15](https://www.youtube.com/watch?v=nsn94Ad47GY&t=315s), [11:02](https://www.youtube.com/watch?v=nsn94Ad47GY&t=662s) |
| [Zac Cherin](../people/zac-cherin.md), [Hiro Analytics](../businesses/hiro-analytics.md) | Moved from Snowflake and Retool to Claude Code | $1M SaaS (2026-06) | [NPpky92ZfjA](../sources/NPpky92ZfjA.md) [4:27](https://www.youtube.com/watch?v=NPpky92ZfjA&t=267s) |
| [Rob Hallam](../people/rob-hallam.md), [Shipper](../businesses/shipper.md) | Sells a vibe-coding builder, credits from $25/month | $50K/month (2026-05) | [Nnpz1wsTjBI](../sources/Nnpz1wsTjBI.md) [0:53](https://www.youtube.com/watch?v=Nnpz1wsTjBI&t=53s) |

Market data cited by Shipper: Base44 hit $3M ARR in 6 months, and Lovable hit $1M ARR in a week (2026-05) ([Nnpz1wsTjBI](../sources/Nnpz1wsTjBI.md), [4:18](https://www.youtube.com/watch?v=Nnpz1wsTjBI&t=258s)). Some agencies built on Lovable make over $200K a month from internal tools (2025-04) ([qmJVN2158Mk](../sources/qmJVN2158Mk.md), [1:39](https://www.youtube.com/watch?v=qmJVN2158Mk&t=99s)).

Typical tool costs: Cursor $20 to $200/month, Claude Code Max about $200/month ([9r0qPeSJGog](../sources/9r0qPeSJGog.md), [12:08](https://www.youtube.com/watch?v=9r0qPeSJGog&t=728s), [d8PdJJcEtE0](../sources/d8PdJJcEtE0.md), [7:17](https://www.youtube.com/watch?v=d8PdJJcEtE0&t=437s)). [3AK](../businesses/3ak.md) says an app can reach the App Store for less than $500 (2026-06) ([DiRxTfnHTaY](../sources/DiRxTfnHTaY.md), [3:24](https://www.youtube.com/watch?v=DiRxTfnHTaY&t=204s)).

## Disagreements

> Conflict: plan or just build. [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [CwHD6Fg-Mjs](../sources/CwHD6Fg-Mjs.md) and [s9aLA4IOSZE](../sources/s9aLA4IOSZE.md) write a spec or data model first. [yBjcmMhXSDk](../sources/yBjcmMhXSDk.md) makes no mockups and picks competitor screens in Canva, and [SJOFUBNHYqU](../sources/SJOFUBNHYqU.md) says do not overthink the MVP.

> Conflict: more context helps or hurts. [L_FY6aW9cJ4](../sources/L_FY6aW9cJ4.md) feeds long structured markdown prompts, and [orYTlk_BhW8](../sources/orYTlk_BhW8.md) feeds every competitor screen. [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md) found that loading every reference at once scored below a bare prompt.

> Conflict: product first or marketing first. [8BtHk-oNlN0](../sources/8BtHk-oNlN0.md) ships an MVP in two weeks and runs ads right away, and [Q4k8JNYKJT0](../sources/Q4k8JNYKJT0.md) charges from day one on the web. [RypUD_Fuaqw](../sources/RypUD_Fuaqw.md) and [Eg93po_DAYo](../sources/Eg93po_DAYo.md) post content before they build.

## Sources

- Build process and prompting: [CfwNxDEXe6I](../sources/CfwNxDEXe6I.md), [CwHD6Fg-Mjs](../sources/CwHD6Fg-Mjs.md), [4hMg_CZauJs](../sources/4hMg_CZauJs.md), [jpSY4MlWX50](../sources/jpSY4MlWX50.md), [orYTlk_BhW8](../sources/orYTlk_BhW8.md), [yBjcmMhXSDk](../sources/yBjcmMhXSDk.md), [s9aLA4IOSZE](../sources/s9aLA4IOSZE.md), [d8PdJJcEtE0](../sources/d8PdJJcEtE0.md), [9r0qPeSJGog](../sources/9r0qPeSJGog.md), [PIXXEAfo6MY](../sources/PIXXEAfo6MY.md), [P4QodeA_lQ0](../sources/P4QodeA_lQ0.md), [qYYeu0E-1SI](../sources/qYYeu0E-1SI.md), [dWeoSKLt_fc](../sources/dWeoSKLt_fc.md), [L_FY6aW9cJ4](../sources/L_FY6aW9cJ4.md)
- Tools and stacks: [QXxESN94Y6s](../sources/QXxESN94Y6s.md), [RypUD_Fuaqw](../sources/RypUD_Fuaqw.md), [SJOFUBNHYqU](../sources/SJOFUBNHYqU.md), [8kM-JcKpcDs](../sources/8kM-JcKpcDs.md), [DiRxTfnHTaY](../sources/DiRxTfnHTaY.md), [GQ27QVp3SzQ](../sources/GQ27QVp3SzQ.md), [nsn94Ad47GY](../sources/nsn94Ad47GY.md), [xWnqY2Mav4s](../sources/xWnqY2Mav4s.md), [axH1e2cZSrw](../sources/axH1e2cZSrw.md), [aLidq3_FwW0](../sources/aLidq3_FwW0.md), [NPpky92ZfjA](../sources/NPpky92ZfjA.md), [7KqlwjBM_tM](../sources/7KqlwjBM_tM.md), [vbEKEWtnndU](../sources/vbEKEWtnndU.md), [zpTXi8WxeM0](../sources/zpTXi8WxeM0.md), [5u9u8yzPEpA](../sources/5u9u8yzPEpA.md), [8BtHk-oNlN0](../sources/8BtHk-oNlN0.md), [FCGpgPZqmkY](../sources/FCGpgPZqmkY.md), [0T55DRYqeeA](../sources/0T55DRYqeeA.md)
- Distribution and taste: [Q4k8JNYKJT0](../sources/Q4k8JNYKJT0.md), [Eg93po_DAYo](../sources/Eg93po_DAYo.md), [V_4kiR3R4QU](../sources/V_4kiR3R4QU.md), [YS7uOXjmJTA](../sources/YS7uOXjmJTA.md), [qmJVN2158Mk](../sources/qmJVN2158Mk.md), [Nnpz1wsTjBI](../sources/Nnpz1wsTjBI.md), [D4fkiQfzw_I](../sources/D4fkiQfzw_I.md)

## Related

- Topics: [AI apps](ai-apps.md), [No-code](no-code.md), [MVP](mvp.md), [Prototyping](prototyping.md), [Solo founders](solo-founders.md), [Distribution](distribution.md), [AI agents](ai-agents.md)
- Businesses: [Lovable](../businesses/lovable.md), [Shipper](../businesses/shipper.md)
