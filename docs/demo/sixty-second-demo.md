# 60-Second Demo Card

In 60 seconds, you can check whether the Steven workflow is an inspectable agent loop: it should read existing context, route to a capability, write a durable draft, and save reusable learning.

This is a public blueprint and local demo workspace. It is not a hosted runtime, and it does not expose Steven's private vault.

## Open These Files In Order

Before running anything, open these existing files:

1. [`playground/FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/FIRST_PROMPT.md) - the task the agent is asked to execute.
2. [`playground/AGENTS.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/AGENTS.md) - the workspace rules the agent should follow.
3. [`playground/wiki/_index.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/_index.md) - the retrieval entry point.
4. [`playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/raw/thoughts/2026-04-23-why-most-ai-feels-generic.md) - the raw input.
5. [`playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/Blog/Published/2026-04-10-ai-workflow-is-the-product.md) - a prior article the agent should compare against.
6. [`playground/wiki/summaries/2026-04-12-agent-products.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/summaries/2026-04-12-agent-products.md) - reusable context for the topic.
7. [`playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](https://github.com/stevenchouai/digital-twin/blob/main/playground/wiki/outputs/agent-learnings/2026-04-15-writing-rules.md) - existing durable writing rules.
8. [`capabilities/content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) - the workflow contract the task should route to.

For the longer walkthrough, use [Steven Workflow Demo](/demo/steven-workflow). For the claim-by-claim map, use [Proof Chain](/demo/proof-chain).

## Pass / Fail Checklist

After running `playground/FIRST_PROMPT.md` in a file-capable agent or AI IDE, judge the run by file evidence, not by how polished the chat answer sounds.

| Requirement | Pass | Fail |
|---|---|---|
| Retrieval | The run uses `playground/wiki/_index.md`, the prior article, the summary, and the writing rules before drafting. | It only reads the raw thought file or jumps straight to a generic answer. |
| Routing | The run follows `capabilities/content-creation.md`: check source lineage, compare prior work, extract a throughline, then draft. | It treats the prompt as free-form chat and never applies the content creation contract. |
| Durable output | A new draft appears under `playground/Blog/Published/`. | The output exists only in the chat transcript. |
| Write-back | A new reusable rule, preference, or skip condition appears under `playground/wiki/outputs/agent-learnings/`. | The run ends without updating future context. |

If any row fails, the demo did not prove the operating loop yet. That is useful signal: the workflow contract, index, or agent runner needs to be tightened.

## What This Proves

It proves the repo is more than a slogan. A visitor can inspect the prompt, retrieval entry, source material, prior output, capability contract, and write-back locations as files. A successful run leaves artifacts in the workspace, so the claim can be checked without trusting a marketing page.

## What It Does Not Prove Yet

It does not prove there is a hosted app, autonomous scheduler, private memory service, production connector stack, or guaranteed success with every model. The public repo proves a file-first blueprint and a runnable local workflow pattern.
