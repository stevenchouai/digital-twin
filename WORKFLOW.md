# Workflow

This document explains how the public `digital-twin` package is meant to operate in practice.

The goal is not to imitate a full agent runtime. The goal is to give Steven's digital twin a durable working loop that improves over repeated use.

## Core Loop

```text
User request
  -> intent detection
  -> retrieve prior assets
  -> route to capability
  -> execute
  -> write durable output
  -> distill reusable learning
```

## Retrieval First

Before doing substantial work, the twin should prefer this lookup order:

1. workspace `AGENTS.md`
2. `wiki/_index.md`
3. `wiki/outputs/` for prior reports, Q&A, and learnings
4. relevant concept pages
5. raw materials only when needed

This prevents the twin from repeating work that already exists in the system.

## Three Long-Term Asset Types

The twin should leave behind one or more of these assets:

- `knowledge asset`
  Example: concept update, summary, research note
- `delivery asset`
  Example: article draft, website copy, resume revision
- `operating asset`
  Example: durable rule, skip condition, naming convention, failure pattern

The third category is what makes the twin improve over time.

## Wiki-Centered Operating Model

The wiki is not only a content archive. It is the twin's persistent working memory.

That means:

- repeated decisions belong in durable notes
- good outputs should be queryable later
- concepts should be updated when new evidence appears
- workflow rules should not stay trapped in chat history

## Content Pipeline

For writing-related tasks, the preferred shape is:

```text
raw material
  -> retrieval and dedupe
  -> throughline extraction
  -> draft generation
  -> write-back into wiki or Blog
  -> learning note if reusable
```

## Learning Loop

After every meaningful task, ask:

1. What stable preference showed up?
2. What rule should become default next time?
3. What should be skipped in the future?
4. What deserves to become a reusable template or playbook?

If the answer is meaningful for future work, write it down.

## What This Repo Represents

This repo is the public-facing package and explanation layer.

The real source of value is still the live local skill and the actual files inside Steven's working systems. The public package exists to make the operating model legible and shareable.
