# Steven Workflow Demo

The fastest way to understand `digital-twin` is to run the `playground/` workflow. It is a small Steven-style workspace that demonstrates the operating loop without pretending to be a full hosted product.

This demo is intentionally file-based. You can run it with any capable coding agent or AI IDE that can read and write the repository.

## What It Demonstrates

```text
Input
  -> knowledge retrieval
  -> capability routing
  -> execution
  -> write-back learning
```

The demo task is simple: turn one raw thought into a publishable blog draft. The important part is not whether the draft sounds polished. The important part is whether the agent behaves like a Personal Agent Operating Layer:

- It reads the existing workspace before writing.
- It checks whether the topic has already been covered.
- It routes the request to the content creation capability.
- It writes output into the workspace.
- It saves reusable learning for the next run.

## Files Involved

| Stage | File | Role |
|-------|------|------|
| Input | [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md) | Raw thought material |
| Retrieval entry | [`playground/wiki/_index.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/_index.md) | Minimal personal wiki index |
| Prior output | [`playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md) | Existing article to compare against |
| Reusable context | [`playground/wiki/summaries/2026-04-12-agent-products.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/summaries/2026-04-12-agent-products.md) | Core judgment and reusable language |
| Memory | [`playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md) | Durable writing rules |
| Capability | [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) | Workflow for article creation |

## Run It

1. Open [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md).
2. Run that prompt inside Cursor, Claude Code, Codex, Windsurf, or another agent runner with repository file access.
3. Confirm that the agent writes a draft under `playground/Blog/Published/`.
4. Confirm that it writes a reusable learning note under `playground/wiki/outputs/agent-learnings/`.

If the agent only returns a chat response, the demo did not succeed. The whole point is to move from answer generation to asset generation.

## Operating Model Trace

| Step | Expected behavior |
|------|-------------------|
| Understand intent | Detect that the task is content creation from raw thought material. |
| Retrieve knowledge | Read `AGENTS.md`, `wiki/_index.md`, prior published work, summaries, and writing rules. |
| Route capability | Use the content creation workflow instead of improvising a generic answer. |
| Execute | Draft the article into the configured output directory. |
| Write back | Capture any new reusable writing rule or skip condition for future runs. |

## What To Customize

To turn this into your own Personal Agent OS seed, replace the content while keeping the structure:

- Put your notes, transcripts, and research in `raw/thoughts/`.
- Maintain a small `wiki/_index.md` that points the agent to current assets.
- Keep prior outputs visible so the agent can avoid repetition.
- Save durable preferences and failure modes under `wiki/outputs/agent-learnings/`.
- Add capability files when a workflow becomes repeated enough to deserve a stable protocol.

The originality of the system comes from the accumulated work trace: your judgments, rules, outputs, and learning notes. The template only provides the operating layer.
