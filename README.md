# digital-twin

Steven Chou's Digital Twin packaged as a reusable Codex skill.

This repo turns the existing local `digital-twin` skill into a portable skill package with a clearer operating model:

- route tasks across Steven's personal systems
- retrieve prior knowledge before acting
- write durable outputs back into the knowledge base
- run a post-task learning loop so each task leaves reusable assets behind

## Structure

```text
digital-twin/
├── SKILL.md
├── WORKFLOW.md
├── examples.md
├── capabilities/
│   ├── codebase-research.md
│   ├── content-creation.md
│   ├── learning-loop.md
│   ├── resume-craft.md
│   ├── site-improvement.md
│   └── wiki-management.md
├── references/
│   ├── style-guide.md
│   └── tag-taxonomy.md
└── assets/
    └── article-template.md
```

## Design

This version borrows the strongest part of the Hermes philosophy without copying the full runtime:

- `retrieve -> act -> write back -> learn`
- outputs become files, not only chat history
- repeated tasks produce stable playbooks and skip rules
- the wiki stays the source of truth

The skill is intentionally file-first. It assumes Steven's long-term workflow is:

`raw material -> compile -> wiki -> Q&A/enhancement -> publish or reuse`

## What Changed

- Added a dedicated `learning-loop` capability
- Tightened the wiki workflow around retrieval-first and explicit output sinks
- Upgraded content creation so raw notes, transcripts, and rough ideas follow the same pipeline
- Reframed the top-level skill as a small operating system, not just a router
- Added a public-facing workflow doc that explains the operating loop

## Suggested Install

If you want this repo to become the source of truth, point Codex at this folder and install or sync the skill from here instead of editing only the local copy under `~/.codex/skills/`.

## Publish Readiness

Before pushing to GitHub, sanity-check:

- `SKILL.md` reads cleanly as the entrypoint
- each capability file is independently understandable
- examples match the real workflow you want to run
