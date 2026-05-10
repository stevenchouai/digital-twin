# Plain-English Tour

This page is for a first-time visitor who wants to know what this repo means without installing anything.

`digital-twin` is a public blueprint and demo workspace. It is not a hosted bot, not a private clone of Steven, and not a claim that a full product runtime already exists.

## The core ideas

### Personal Agent OS

A **Personal Agent OS** is a folder structure plus rules that tell an agent how to reuse your notes, writing habits, and work patterns.

In this repo, that means files like:

- `playground/AGENTS.md`, which tells the agent how the demo workspace is organized.
- `playground/wiki/_index.md`, which points to the context the agent should read first.
- `capabilities/content-creation.md`, which describes the steps for turning rough notes into a blog draft.

The important part is not the label. The important part is that the working habits are written down where an agent can inspect them.

### Digital twin

Here, a **digital twin** is not a clone of a person and not a chatbot running on a server.

It is a file-first workspace that an agent can read and update. The "twin" part comes from the workspace carrying your working memory: notes, prior outputs, folder rules, style rules, and lessons from past runs.

The demo version lives under `playground/`. A visitor can inspect the raw input in `playground/raw/thoughts/`, the prior writing in `playground/Blog/Published/`, and the reusable lessons in `playground/wiki/outputs/agent-learnings/`.

### Capability routing

**Capability routing** means choosing the right workflow file for the task instead of putting every instruction into one giant prompt.

For example, a request to turn a rough thought into a blog post should use `capabilities/content-creation.md`. That file says what to read, how to avoid duplicates, where to write the draft, and when to save a lesson for next time.

If the task were wiki cleanup, resume work, or codebase research, it should route to a different capability file.

### Write-back

**Write-back** means the useful result is saved to files, not only returned in chat.

In the Steven workflow demo, a successful run should leave:

- a draft under `playground/Blog/Published/`
- a reusable lesson under `playground/wiki/outputs/agent-learnings/`

If the agent only replies with text in the chat window, the demo did not prove the operating loop.

### Learning loop

A **learning loop** means reviewing what changed during the task and turning the useful part into a rule the next run can reuse.

The rule might be a writing preference, a folder convention, a duplicate-check rule, or a mistake to skip next time. In this repo, those lessons are written as files under `playground/wiki/outputs/agent-learnings/`.

## 60-second tour

Open these files in order. You do not need to install anything to understand the public proof.

1. [`THESIS.md`](https://github.com/stevenchouai/digital-twin/blob/main/THESIS.md) explains why the repo exists: making a person's working method readable by an agent.
2. [`WORKFLOW.md`](https://github.com/stevenchouai/digital-twin/blob/main/WORKFLOW.md) shows the loop: understand intent, read context, choose a capability, write output, save a lesson.
3. [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) is a concrete workflow file for turning raw notes into a draft.
4. [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md) is the test prompt for the demo workspace.
5. [`docs/demo/steven-workflow.md`](/demo/steven-workflow) walks through the demo and its success checklist.
6. [`docs/demo/proof-chain.md`](/demo/proof-chain) maps each public claim to a file a reviewer can inspect.

## What to check

When you inspect the repo, look for this chain:

```text
Raw input
  -> existing notes and prior outputs
  -> chosen capability file
  -> saved draft or report
  -> saved lesson for the next run
```

That is the whole idea in plain English: keep the working system in files, make the agent read the files before acting, and save the useful result back into the same workspace.
