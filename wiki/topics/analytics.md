---
type: topic
title: "Analytics"
sources: [0pp4X58q_0s, DPb-M0Vt4uI, NPpky92ZfjA, OV09yPLf8BI, SuUJgmbQrVc, T5zMsTw8GWQ, VGJWRjz6nq8, VZ1XspToV1E, YA3QpYIKqNI, d8PdJJcEtE0, lXGmWdFLsuM, mOpYezjqU9c, rCV-TVCnF6Q]
updated: 2026-10-26
---

This page collects what sources say about analytics: how founders measure funnels, attribute growth and pick the metrics that decide what to build.

## Definition

Analytics here means event tracking, funnel and retention data, and attribution that tell a founder where users drop off and which channel or creator brings paying users.

## Repeated patterns

- **Find the biggest drop-off and fix it first.** [Yev](../people/yev.md) maps every step from content to paywall and points the whole team at the worst one. ([lXGmWdFLsuM](../sources/lXGmWdFLsuM.md), [3:30](https://www.youtube.com/watch?v=lXGmWdFLsuM&t=210s)) [Mauro Botanes](../people/mauro-botanes.md) instruments every onboarding screen: funnels show where users drop, interviews show why. ([OV09yPLf8BI](../sources/OV09yPLf8BI.md), [9:53](https://www.youtube.com/watch?v=OV09yPLf8BI&t=593s)) Prop GPT tracks onboarding drop-off and feature clicks in PostHog. ([rCV-TVCnF6Q](../sources/rCV-TVCnF6Q.md), [6:50](https://www.youtube.com/watch?v=rCV-TVCnF6Q&t=410s))
- **Read the gap between two funnel steps.** High install-to-trial with low trial-to-paid means users want the promise but the product does not deliver. ([rCV-TVCnF6Q](../sources/rCV-TVCnF6Q.md), [5:37](https://www.youtube.com/watch?v=rCV-TVCnF6Q&t=337s)) [Tim Gabe](../people/tim-gabe.md) warns that a high onboarding completion rate can measure need, not what happens after. ([YA3QpYIKqNI](../sources/YA3QpYIKqNI.md), [1:35](https://www.youtube.com/watch?v=YA3QpYIKqNI&t=95s))
- **Pick the metric that leads revenue, not vanity metrics.** For a gym app, activation is a logged workout. ARPU by country sets what to pay creators per download. ([OV09yPLf8BI](../sources/OV09yPLf8BI.md), [7:33](https://www.youtube.com/watch?v=OV09yPLf8BI&t=453s), [8:59](https://www.youtube.com/watch?v=OV09yPLf8BI&t=539s)) [John McEvoy](../people/john-mcevoy.md) says monthly active users did not move the needle, but event analytics and paywall tests did. ([T5zMsTw8GWQ](../sources/T5zMsTw8GWQ.md), [13:09](https://www.youtube.com/watch?v=T5zMsTw8GWQ&t=789s))
- **Attribute every channel and creator.** Send install, paywall, trial and purchase events to the ad network. ([0pp4X58q_0s](../sources/0pp4X58q_0s.md), [9:18](https://www.youtube.com/watch?v=0pp4X58q_0s&t=558s)) Use an MMP such as AppsFlyer so TikTok learns who paid, and hire help for the setup because a misconfiguration costs a lot. ([DPb-M0Vt4uI](../sources/DPb-M0Vt4uI.md), [7:34](https://www.youtube.com/watch?v=DPb-M0Vt4uI&t=454s)) Pep AI gives each creator a code and an AppsFlyer OneLink. ([mOpYezjqU9c](../sources/mOpYezjqU9c.md), [9:00](https://www.youtube.com/watch?v=mOpYezjqU9c&t=540s)) [Vasco](../people/vasco.md) uses a UTM and a coupon per YouTube video, and an onboarding survey with creator faces. ([VZ1XspToV1E](../sources/VZ1XspToV1E.md), [5:21](https://www.youtube.com/watch?v=VZ1XspToV1E&t=321s)) Evo Marketing uses vanity domains such as flightcheatcode.com to separate its traffic from paid ads. ([VGJWRjz6nq8](../sources/VGJWRjz6nq8.md), [11:46](https://www.youtube.com/watch?v=VGJWRjz6nq8&t=706s))
- **Use the voluntary return moment.** Undertone's PostHog data showed users open the recap a median of 10 minutes after a session. The redesign built the peak there. ([YA3QpYIKqNI](../sources/YA3QpYIKqNI.md), [5:44](https://www.youtube.com/watch?v=YA3QpYIKqNI&t=344s))
- **Know the ROAS math.** Pay less per download than an average user earns: $1.50 per download against $3 per user is 2x ROAS. ([DPb-M0Vt4uI](../sources/DPb-M0Vt4uI.md), [4:23](https://www.youtube.com/watch?v=DPb-M0Vt4uI&t=263s))
- **Analytics as a product.** Some founders sell analytics: [Hiro Analytics](../businesses/hiro-analytics.md) sells reporting to email agencies, because manual reports for 20 clients are the real pain. ([NPpky92ZfjA](../sources/NPpky92ZfjA.md), [8:10](https://www.youtube.com/watch?v=NPpky92ZfjA&t=490s)) [Profit AI](../businesses/profit-ai.md) turned a client profit spreadsheet into a Shopify app. ([d8PdJJcEtE0](../sources/d8PdJJcEtE0.md), [5:35](https://www.youtube.com/watch?v=d8PdJJcEtE0&t=335s))

## Examples with numbers

- **Momego:** about 10 paywall experiments in 2021 raised conversion from 0.5% to 8%, and revenue from about $8K to over $30K/month. ([T5zMsTw8GWQ](../sources/T5zMsTw8GWQ.md), [9:33](https://www.youtube.com/watch?v=T5zMsTw8GWQ&t=573s))
- **Sizzle AI:** fixing a step with over 50% drop-off gave 2x to 3x growth, while feature work gave about 10%. In-app tests cut cost per purchase from about $500 to $300 in days (2025-06). ([lXGmWdFLsuM](../sources/lXGmWdFLsuM.md), [2:36](https://www.youtube.com/watch?v=lXGmWdFLsuM&t=156s), [18:05](https://www.youtube.com/watch?v=lXGmWdFLsuM&t=1085s))
- **Attribution gaps:** Yev says real purchases are often about double what ads report. At least 10% arrive after day 1, and 10% to 20% come from spillover such as App Store search. ([lXGmWdFLsuM](../sources/lXGmWdFLsuM.md), [22:16](https://www.youtube.com/watch?v=lXGmWdFLsuM&t=1336s))
- **Prop GPT:** 45% install-to-trial but 13% trial-to-paid before the rebuild. After it, trial-to-paid passed 50% and MRR peaked at $40K (2025). ([rCV-TVCnF6Q](../sources/rCV-TVCnF6Q.md), [3:55](https://www.youtube.com/watch?v=rCV-TVCnF6Q&t=235s), [6:50](https://www.youtube.com/watch?v=rCV-TVCnF6Q&t=410s))
- **Symmetry:** one commitment screen at the end of onboarding raised retention by 3%. Two home-screen redesigns moved nothing. ([OV09yPLf8BI](../sources/OV09yPLf8BI.md), [11:46](https://www.youtube.com/watch?v=OV09yPLf8BI&t=706s))
- **Journable:** just under $500K in Google Ads spend and about the same attributed revenue, so about break-even (2026-03). ([0pp4X58q_0s](../sources/0pp4X58q_0s.md), [6:57](https://www.youtube.com/watch?v=0pp4X58q_0s&t=417s))
- **Chart Detector AI:** April P&L of $43.7K revenue, about $20K ad spend and about $11.5K profit, a margin of about 25% (2026-07). ([DPb-M0Vt4uI](../sources/DPb-M0Vt4uI.md), [5:58](https://www.youtube.com/watch?v=DPb-M0Vt4uI&t=358s))
- **Hiro Analytics:** $0 to over $1M ARR in about 19 months (2026-06). ([NPpky92ZfjA](../sources/NPpky92ZfjA.md), [0:58](https://www.youtube.com/watch?v=NPpky92ZfjA&t=58s))

## Disagreements

- **Do high views predict sales?** Yev says the most viral videos often convert worse, and middle-virality videos can convert better. ([lXGmWdFLsuM](../sources/lXGmWdFLsuM.md), [13:54](https://www.youtube.com/watch?v=lXGmWdFLsuM&t=834s)) [Canyon](../people/canyon.md) uses 5 to 10x a creator's normal views plus 8 to 10%+ engagement as the signal to run a video as a paid ad. ([SuUJgmbQrVc](../sources/SuUJgmbQrVc.md), [50:15](https://www.youtube.com/watch?v=SuUJgmbQrVc&t=3015s))

> Conflict: [lXGmWdFLsuM](../sources/lXGmWdFLsuM.md) says virality and conversion often diverge, while [SuUJgmbQrVc](../sources/SuUJgmbQrVc.md) treats outsized views and engagement as the signal for a paid winner.

- **Is a high onboarding completion rate good news?** Tim Gabe says no: Undertone beat the average with a 10+ minute flow, yet about half of finishers never recorded a session. ([YA3QpYIKqNI](../sources/YA3QpYIKqNI.md), [0:56](https://www.youtube.com/watch?v=YA3QpYIKqNI&t=56s))

## Related

- Topics: [A/B testing](ab-testing.md), [Conversion rate optimization](conversion-rate-optimization.md), [Retention](retention.md), [Onboarding](onboarding.md), [Paywalls](paywalls.md), [Unit economics](unit-economics.md)

## Sources

- [0pp4X58q_0s](../sources/0pp4X58q_0s.md): Steve Hoyek, Journable
- [DPb-M0Vt4uI](../sources/DPb-M0Vt4uI.md): Timo Nikolai, Chart Detector AI
- [NPpky92ZfjA](../sources/NPpky92ZfjA.md): Zac Cherin, Hiro Analytics
- [OV09yPLf8BI](../sources/OV09yPLf8BI.md): Mauro Botanes, Symmetry
- [SuUJgmbQrVc](../sources/SuUJgmbQrVc.md): Canyon, SideShift
- [T5zMsTw8GWQ](../sources/T5zMsTw8GWQ.md): John McEvoy, Momego
- [VGJWRjz6nq8](../sources/VGJWRjz6nq8.md): Dawson Gibbs, Evo Marketing
- [VZ1XspToV1E](../sources/VZ1XspToV1E.md): Vasco, Arvow
- [YA3QpYIKqNI](../sources/YA3QpYIKqNI.md): Tim Gabe, Undertone redesign
- [d8PdJJcEtE0](../sources/d8PdJJcEtE0.md): Jack, Profit AI
- [lXGmWdFLsuM](../sources/lXGmWdFLsuM.md): Yev, Sizzle AI
- [mOpYezjqU9c](../sources/mOpYezjqU9c.md): Cedric Roberge, Pep AI
- [rCV-TVCnF6Q](../sources/rCV-TVCnF6Q.md): Eyal and Yahli Hazan, Prop GPT
