# Capability Router

A digital twin should not answer every request with the same mega-prompt. It should classify the user's intent, load the right operating procedure, produce a file-backed result, and write durable learning back into the knowledge system.

This router is the public proof that `digital-twin` is an operating layer, not just a personality prompt.

## Routing table

| User intent | Capability module | Proof artifact |
| --- | --- | --- |
| Turn raw notes, transcripts, or fragments into publishable writing | Content Creation | [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) |
| Ingest external material or maintain a personal wiki | Wiki Management | [`capabilities/wiki-management.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/wiki-management.md) |
| Research a repository, architecture, or implementation strategy | Codebase Research | [`capabilities/codebase-research.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/codebase-research.md) |
| Improve a public site, SEO surface, or portfolio narrative | Site Improvement | [`capabilities/site-improvement.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/site-improvement.md) |
| Tailor resumes, analyze job descriptions, or sharpen positioning | Resume Craft | [`capabilities/resume-craft.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/resume-craft.md) |
| Convert one-off work into reusable preferences and rules | Learning Loop | [`capabilities/learning-loop.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/learning-loop.md) |
| Review weeks or months of notes to identify changing themes | Knowledge Growth | [`capabilities/knowledge-growth.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/knowledge-growth.md) |

## Runtime protocol

Every routed task follows the same discipline:

1. **Retrieve first** — read the relevant wiki, prior outputs, and source material before generating.
2. **Route explicitly** — choose one capability module based on the user's intent instead of improvising.
3. **Execute with boundaries** — follow that module's workflow, file locations, and privacy constraints.
4. **Write back** — save useful outputs as Markdown, code, docs, or learning notes rather than leaving them in chat.
5. **Improve the router** — when a task reveals a durable preference or missing capability, update the knowledge system.

## Why this matters

The capability router makes the twin inspectable. A reviewer can see what the agent is allowed to do, which files it should touch, and how a one-off conversation becomes a reusable asset. That is the difference between an AI assistant that merely responds and a personal operating layer that compounds.
