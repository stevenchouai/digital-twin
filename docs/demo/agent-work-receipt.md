# Agent work receipt

An agent work receipt is a short note you fill out after an agent run. It helps a reviewer see what was requested, what files were read or changed, what evidence supports completion, and what still needs human review.

It is not a guarantee that the agent was correct. It is a review aid.

Use this after running the [Steven Workflow Demo](/demo/steven-workflow) with `playground/FIRST_PROMPT.md`.

## What to check after the playground run

After you run `playground/FIRST_PROMPT.md`, check the workspace before you judge the answer:

1. A new draft exists under `playground/Blog/Published/`.
2. A new learning note exists under `playground/wiki/outputs/agent-learnings/`.
3. The draft was based on `playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`.
4. The run used `playground/wiki/_index.md`, prior published work, summaries, and writing rules before drafting.
5. The draft explains how it differs from the prior article `playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`.
6. The learning note records a reusable writing rule or skip condition for the next run.
7. `git diff` or your editor shows only the files you expected the agent to create or edit.

If the agent only returns a chat answer and writes no files, the playground run did not complete the workflow.

## Copyable template

```markdown
# Agent Work Receipt

## Run

- Date:
- Runner:
- Prompt used:
- Workspace:

## Request

What did the user ask the agent to do?

## Files The Agent Said It Read

| File | Why it mattered |
|------|-----------------|
|  |  |

## Files Created Or Changed

| File | Created or changed? | What changed |
|------|---------------------|--------------|
|  |  |  |

## Evidence To Check

- [ ] A new draft exists under `playground/Blog/Published/`.
- [ ] A new learning note exists under `playground/wiki/outputs/agent-learnings/`.
- [ ] The draft uses the source file named in the prompt.
- [ ] The draft checks against prior published work instead of repeating it.
- [ ] The learning note is reusable for a later run.
- [ ] The diff contains only expected files.

## Still Needs Human Review

- [ ] The draft is factually correct.
- [ ] The draft is not overclaiming what the repo or demo can do.
- [ ] The writing quality is good enough to publish or continue editing.
- [ ] The learning note is specific enough to help the next run.

## Honest Boundary

This receipt makes the work easier to inspect. It does not prove that the agent is correct, complete, or safe to publish without review.
```

## Filled example: playground first prompt

This is an example receipt for a successful local run of `playground/FIRST_PROMPT.md`. It uses only public repo files. It does not claim that a hosted runtime exists.

The exact output filenames may differ in your run. The important check is that the agent writes a new draft under `playground/Blog/Published/` and a new learning note under `playground/wiki/outputs/agent-learnings/`.

### Run

- Date: 2026-05-10
- Runner: Local coding agent or AI IDE with repository file access
- Prompt used: [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md)
- Workspace: `playground/`

### Request

Turn `playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md` into a publishable blog draft. Before writing, read the local instructions, wiki index, prior published work, and learning notes. After drafting, write a reusable learning note.

### Files The Agent Said It Read

| File | Why it mattered |
|------|-----------------|
| [`playground/AGENTS.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/AGENTS.md) | Defines the playground workspace rules and write-back expectation. |
| [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md) | Contains the user request and success condition. |
| [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md) | Provides the raw thought material for the draft. |
| [`playground/wiki/_index.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/_index.md) | Points the agent to the relevant local context. |
| [`playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md) | Lets the agent check whether the topic repeats prior work. |
| [`playground/wiki/summaries/2026-04-12-agent-products.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/summaries/2026-04-12-agent-products.md) | Supplies reusable language and core judgment. |
| [`playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md) | Preserves prior writing rules for this workspace. |
| [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) | Gives the article workflow and output contract. |

### Files Created Or Changed

| File | Created or changed? | What changed |
|------|---------------------|--------------|
| `playground/Blog/Published/2026-04-23-why-most-ai-feels-generic.md` | Created by the run | Blog draft based on the raw thought file. |
| `playground/wiki/outputs/agent-learnings/2026-04-23-writing-from-generic-ai-note.md` | Created by the run | Reusable rule about turning raw anti-generic-AI notes into a sharper article. |

### Evidence To Check

- [ ] `git status --short playground/Blog/Published playground/wiki/outputs/agent-learnings` shows one new draft and one new learning note.
- [ ] The new draft names or clearly uses `playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md` as its source.
- [ ] The new draft does not simply repeat `playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`.
- [ ] The new learning note is a reusable rule, not a one-line summary of the finished article.
- [ ] The run did not edit private notes, secrets, unpublished vault files, or unrelated directories.

### Still Needs Human Review

- [ ] Whether the draft is accurate and worth publishing.
- [ ] Whether the distinction from the prior article is strong enough.
- [ ] Whether the new learning note should stay as written, be merged into an existing rule, or be deleted.

### Honest Boundary

This receipt makes the run auditable by pointing to files and checks. It does not prove that the agent made the right editorial judgment.
