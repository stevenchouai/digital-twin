# Capability contract demo

Agent autonomy is useful only when a reviewer can see its limits before it acts.

The failure mode is familiar: an agent gets a broad instruction, skips the local context, writes to whatever path seems plausible, and produces a polished answer that is hard to audit. A capability contract makes the run inspectable before execution. It says what the user asked for, what evidence must be read, what the agent may write, what is out of bounds, and how a reviewer should judge the result.

This page uses the public `playground/` workflow as the demo case. It is a blueprint workspace, not a hosted runtime.

## Sample task

Turn one raw thought into a blog draft inside the playground.

The public input is [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md). The agent should use the [content creation capability](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md), compare against prior public demo assets, write a draft under `playground/Blog/Published/`, and leave a reusable learning note when the run exposes a future-facing writing rule.

## Contract before execution

| Contract field | Public-safe run contract | Evidence |
|---|---|---|
| User intent | Convert one raw thought into a publishable blog draft without duplicating an existing article. | [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md) |
| Capability route | Use content creation. Do not route to resume work, site work, codebase research, or a generic chat answer. | [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) |
| Required evidence | Read the playground rules, wiki index, raw thought, prior published post, summary note, and existing writing rules before drafting. | [`playground/AGENTS.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/AGENTS.md), [`wiki/_index.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/_index.md), [`Blog/Published/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/Blog/Published), [`wiki/summaries/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/wiki/summaries), [`agent-learnings/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/wiki/outputs/agent-learnings) |
| Read-only boundary | Treat raw thoughts, prior posts, summaries, wiki index, and capability files as evidence. They may be cited and compared, not rewritten during this run. | [Steven Workflow Demo](/demo/steven-workflow) |
| Safe outputs | Create a Markdown blog draft and, when useful, a reusable writing rule. A chat-only answer is a failed run. | [`playground/Blog/Published/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/Blog/Published), [`agent-learnings/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/wiki/outputs/agent-learnings) |
| Write-back target | Write only under `playground/Blog/Published/` and `playground/wiki/outputs/agent-learnings/` unless the user explicitly expands scope. | [`playground/AGENTS.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/AGENTS.md) |
| Privacy boundary | Use only public demo files in this repository. Do not read private notes, local machine paths, credentials, employer material, application data, or personal contact details. | [Proof Chain boundary](/demo/proof-chain#honest-boundary) |
| Stop condition | If required evidence is missing, the task is ambiguous, or the only possible output would cross the privacy boundary, stop and ask instead of improvising. | [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md) |

## Reviewer pass/fail checklist

Use this before trusting the output:

- [ ] **Contract stated first**: the agent declared the intent, evidence, safe outputs, write targets, privacy boundary, and checks before editing files.
- [ ] **Evidence inspected**: the run referenced the playground rules, wiki index, prior public assets, and content capability before drafting.
- [ ] **Route was explicit**: the task was handled as content creation, not as a free-form chat response.
- [ ] **Writes stayed bounded**: new files appeared only in the allowed playground output locations.
- [ ] **Raw evidence stayed intact**: source notes and prior assets were not rewritten to make the output look cleaner.
- [ ] **Durable output exists**: the result is a file-backed draft, plus a learning note when the run produced a reusable rule.
- [ ] **Privacy held**: the run did not pull in private notes, credentials, local paths, employer facts, application data, or personal contact details.

One failed check is enough to reject the run. The contract is not a bureaucracy layer; it is the smallest review artifact that proves the agent knew its operating boundary before taking action.

## Why this matters

Capability routing is easy to describe in the abstract. The contract makes it concrete: a reviewer can inspect the intended route, the evidence set, the writable surface, and the pass/fail checks before letting the agent operate.

That is the difference between "an agent wrote something" and "an agent acted inside a bounded Personal Agent OS loop." For the full claim map, continue to the [Proof Chain](/demo/proof-chain).
