# indb

This repo has two parts. The `yt-captions` tool in `src/` downloads YouTube transcripts. The README documents the tool. The `wiki/` folder is an LLM wiki: a set of linked markdown pages that the LLM writes from the transcripts and keeps current. This file is the wiki schema. Read it before you answer a question about the content or change the wiki.

## Layers

1. Raw sources: `data/<channel>/md/<YYYY-MM-DD>_<video_id>_<slug>.md`. One transcript for each video, with YAML frontmatter. Never edit these files. `data/` is gitignored.
2. Wiki: `wiki/`. The LLM writes all of it. Git tracks it.
3. Schema: this file. If a convention changes, update this file.

## Wiki layout

```
wiki/
  index.md                start here: overview, catalog links, every topic and answer
  index-businesses.md     one line for each business page
  index-people.md         one line for each person page
  index-sources.md        one line for each source page, by channel, newest first
  log.md                  append-only record of ingests, queries and lint passes
  overview.md             synthesis across all sources
  sources/<video_id>.md   one page for each transcript
  businesses/<slug>.md    a company, app or product
  people/<slug>.md        a founder, creator or guest
  topics/<slug>.md        a tactic or concept, for example paywalls or meta-ads
  answers/<slug>.md       a query answer that is worth keeping
```

## Page conventions

- A slug is lowercase kebab-case ASCII: `cal-ai`, `meta-ads`. Before you make a new slug, grep the `wiki/index*.md` files for an existing one.
- Links are relative markdown links: `[Cal AI](../businesses/cal-ai.md)`. Do not use `[[wikilinks]]`.
- Each fact has a citation: a link to the source page and the YouTube timestamp link from the transcript, for example `[12:34](https://www.youtube.com/watch?v=<id>&t=754s)`.
- A metric includes the video date, because revenue and user counts change: "$30K/month (2026-05)". Do not write it as a current fact.
- If two sources disagree, keep both claims and add a line `> Conflict:` that names both sources. Do not delete the older claim.
- If three or more sources discuss a topic, the topic gets its own page. A smaller topic stays on the source pages.
- If a source features a business or a person, it gets a page. A name that a source only mentions does not get a page.
- Write plain English: short sentences, active voice, no filler.

### Frontmatter

Each page:

```yaml
type: source | business | person | topic | answer
title: "Cal AI"
sources: [RSlhgyAXsBI, 7yLgHeYeQAE]   # video IDs that this page uses
updated: 2026-10-26
```

A source page also has:

```yaml
video_id: "7yLgHeYeQAE"
channel: superwallhq            # folder name under data/
published_at: 2026-10-12
url: "https://www.youtube.com/watch?v=7yLgHeYeQAE"
raw: data/superwallhq/md/2026-10-12_7yLgHeYeQAE_meet-the-ex-wrestler-making-41k-mo-with-ai-apps.md
businesses: [fight-ai, brawler]
people: [kaden-henshaw]
topics: [influencer-marketing, paywalls, onboarding, meta-ads]
```

### Page bodies

- Source page, in this order:
  - `## Summary`: 3 to 5 sentences.
  - `## Key facts`: metrics, prices, team size, timeline.
  - `## Tactics`: what they did and why it worked.
  - `## Quotes`: at most 3, with timestamps.
  - `## Links`: business, person and topic pages.
- Business page: what it is, founders, business model, metrics with dates, growth channels, and a timeline across sources.
- Person page: who they are, their businesses, their repeated advice.
- Topic page: a definition in one sentence, the patterns that sources repeat, concrete examples with numbers, disagreements, and a list of sources.

## Workflows

### Ingest

If `pnpm yt fetch` adds transcripts, or if the user says "ingest", run this workflow.

1. List the transcripts that have no source page:
   ```sh
   for f in data/*/md/*.md; do id=$(sed -n 's/^video_id: "\(.*\)"/\1/p' "$f"); [ -f "wiki/sources/$id.md" ] || echo "$f"; done
   ```
2. For each transcript, write `wiki/sources/<video_id>.md`.
3. Update or create the business, person and topic pages that the source touches. Add the video ID to their `sources` lists.
4. Add a line for each new page to the matching `wiki/index*.md` file. If the source changes a pattern, update `overview.md`.
5. Append one line to `log.md` for each source.

For more than about 20 transcripts, split the work across subagents. Each subagent writes only its own source pages. One agent then updates the shared pages.

### Query

1. Read `wiki/index.md`. To find a business, person or source, grep its catalog. Do not read a catalog whole.
2. Read only the pages that are relevant to the question.
3. Answer with citations to wiki pages and timestamps.
4. Read a raw transcript only for a quote or a detail that the wiki does not have. If you find a missing fact, add it to the wiki.
5. If the answer is worth keeping (a comparison, an analysis, a list), offer to save it as `wiki/answers/<slug>.md`. If you save it, add it to the Answers section of `index.md` and to `log.md`.

### Lint

If the user says "lint", run this workflow. Look for and fix:

- broken relative links
- pages that no `wiki/index*.md` file lists, and pages that no other page links to
- transcripts that have no source page
- topics that three or more sources discuss but that have no page
- metrics without a date, and contradictions without a `> Conflict:` line

Append a `lint` entry to `log.md` with the result.

## Log format

Each entry starts with a fixed prefix, so `grep "^## \[" wiki/log.md | tail -5` shows the last five entries:

```
## [2026-10-26] ingest | Meet the ex-wrestler making $41k/mo with AI apps (7yLgHeYeQAE)
```
