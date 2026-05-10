# 5-minute twin demo

This is the shortest public path for answering: "Can I actually see how this works?"

Yes. This repo is a blueprint and demo workspace, not a hosted digital-twin runtime. The point of this page is to show the loop with files you can inspect:

```text
knowledge files -> capability -> prompt -> durable output -> write-back learning
```

You only need this repo and an AI IDE or coding agent that can read and write local files.

## What you will use

| Part | File | What to check |
|------|------|---------------|
| Workspace rules | [`playground/AGENTS.md`](../../playground/AGENTS.md) | The sample workspace tells the agent to retrieve context first, write files, and save reusable rules. |
| Knowledge index | [`playground/wiki/_index.md`](../../playground/wiki/_index.md) | The index points to existing articles, summaries, and learning notes. |
| Raw input | [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](../../playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md) | This is the rough source material for the run. |
| Prior output | [`playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`](../../playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md) | The agent should compare against this before drafting, so it does not repeat the same point. |
| Reusable context | [`playground/wiki/summaries/2026-04-12-agent-products.md`](../../playground/wiki/summaries/2026-04-12-agent-products.md) | This gives reusable language like "answer machine" and "asset-building machine." |
| Existing learning | [`playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](../../playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md) | This shows how durable writing preferences are stored. |
| Capability | [`capabilities/content-creation.md`](../../capabilities/content-creation.md) | This is the workflow contract for turning raw notes into a publishable article. |
| Starter prompt | [`playground/FIRST_PROMPT.md`](../../playground/FIRST_PROMPT.md) | This is the ready-made prompt for the run. |

## Minute 1: inspect the knowledge

Open [`playground/wiki/_index.md`](../../playground/wiki/_index.md). Notice that it is not a giant database or hidden memory service. It is a small map of files the agent should read before acting.

Then skim the raw thought file and the existing writing rule:

- [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](../../playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md)
- [`playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](../../playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md)

The important idea: the agent should inherit working context from files, not from a one-off chat history.

## Minute 2: choose a capability

For this demo, choose [`capabilities/content-creation.md`](../../capabilities/content-creation.md).

That capability tells the agent to:

- check existing work before creating a new article
- extract the strongest throughline instead of mechanically rewriting a transcript
- keep raw material separate from generated output
- write reusable lessons back into the workspace when the run reveals a stable rule

This is the "skill" part of the twin. It is a plain Markdown workflow file that a builder can inspect, edit, or replace.

## Minutes 3-4: run the prompt

Use an AI IDE or coding agent with this repository open. Paste this prompt:

```text
Use only the public sample files in this repository.

Treat playground/ as the sample workspace.
First read:
- playground/AGENTS.md
- playground/wiki/_index.md
- playground/Blog/Published/
- playground/wiki/summaries/
- playground/wiki/outputs/agent-learnings/

Then use capabilities/content-creation.md to turn
playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md
into a publishable blog draft.

Requirements:
- do not mechanically rewrite the raw transcript
- compare against the existing published article before drafting
- write the draft under playground/Blog/Published/
- write any reusable writing rule under playground/wiki/outputs/agent-learnings/
- if you only return a chat answer and do not write files, the run failed
```

If you want the shortest version, open [`playground/FIRST_PROMPT.md`](../../playground/FIRST_PROMPT.md) and run that prompt.

## Minute 5: check the write-back

After the run, inspect the workspace. A successful run should leave durable files, not only a chat response.

| Check | Expected result |
|-------|-----------------|
| Draft output | A new Markdown draft appears under [`playground/Blog/Published/`](../../playground/Blog/Published/). |
| Learning output | A new learning note appears under [`playground/wiki/outputs/agent-learnings/`](../../playground/wiki/outputs/agent-learnings/). |
| Retrieval evidence | The agent mentions or uses the wiki index, prior article, summary, and writing rules. |
| Capability evidence | The agent follows the content-creation workflow instead of improvising a generic answer. |

The exact title of the generated draft can vary. The important test is whether the agent completed the full loop:

```text
read existing files
choose the content-creation workflow
create a durable article draft
save a reusable rule for the next run
```

## What this proves

This demo does not prove that the repo is a complete hosted product. It proves something smaller and more useful for a builder:

- the knowledge layer can be simple files
- a capability can be a readable workflow contract
- a prompt can route work through that contract
- the result can become durable workspace state
- the next run can start from the saved state instead of starting over

For a stricter reviewer path, continue to the [proof chain](/demo/proof-chain) or the full [Steven workflow demo](/demo/steven-workflow).
