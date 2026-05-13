# Proof Chain

`digital-twin` is easiest to trust when each claim points to a file you can inspect. This page collects the repo's public proof files and what each one demonstrates.

## What the repo proves today

| Claim | Public file or folder | What to verify |
|------|-----------------|----------------|
| A personal agent should retrieve durable context before answering. | [Steven Workflow Demo](/demo/steven-workflow) | The demo starts from `playground/wiki/_index.md`, prior outputs, summaries, and writing rules before drafting. |
| Agent autonomy should be bounded before execution. | [Capability Contract Demo](/demo/capability-contract) | The contract declares intent, required evidence, safe outputs, write-back targets, privacy boundaries, and pass/fail checks before any file edits. |
| Capabilities should be explicit workflow contracts, not hidden prompt vibes. | [`content-creation.md`](https://github.com/stevenchouai/digital-twin/blob/main/capabilities/content-creation.md) | The capability defines inputs, context requirements, outputs, and write-back behavior. |
| The system must produce files, not only chat responses. | [`playground/Blog/Published/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/Blog/Published) | A successful run leaves a durable draft in the workspace. |
| Learning should become reusable system state. | [`agent-learnings/`](https://github.com/stevenchouai/digital-twin/tree/main/playground/wiki/outputs/agent-learnings) | A successful run captures a future-facing rule or preference. |
| A run should leave a simple review trail. | [Agent Work Receipt](/demo/agent-work-receipt) | The receipt records the request, files read or written, evidence, and items that still need human review. |
| The operating model transfers beyond Steven's own notes. | [Elon Musk Demo](/demo/elon-musk) | The same raw-source → wiki → style/decision framework structure works on a public persona demo. |

## Verification path

Use this as a reviewer checklist when evaluating the project:

1. Start with the [thesis](/guide/thesis) to understand the operating model.
2. Run the [Steven Workflow Demo](/demo/steven-workflow) and check its success checklist.
3. Fill out the [Agent Work Receipt](/demo/agent-work-receipt) for the run.
4. Inspect the linked capability file and output folders on GitHub.
5. Compare the [Elon Musk Demo](/demo/elon-musk) to confirm the pattern is not hardcoded to one personal workspace.
2. Read the [Capability Contract Demo](/demo/capability-contract) to see the boundary an agent should declare before execution.
3. Run the [Steven Workflow Demo](/demo/steven-workflow) and check its success checklist.
4. Inspect the linked capability file and output folders on GitHub.
5. Compare the [public persona demo](/demo/elon-musk) to confirm the pattern is not hardcoded to one personal workspace.
6. Treat missing write-back as a failed run, even if the chat answer looks polished.

## Repository size snapshot

This repo is intentionally small enough to audit manually. Recorded public-source snapshot, generated with `pygount --format=summary --folders-to-skip='.git,node_modules,venv,.venv,__pycache__,.cache,dist,build,.next,.tox,vendor,third_party,docs/.vitepress/dist' .` on 2026-05-04:

| Language / type | Files | Code lines | Comment / docs lines |
|---|---:|---:|---:|
| Markdown | 40 | 0 | 1,502 |
| YAML | 1 | 45 | 0 |
| JSON | 1 | 23 | 0 |
| Text only | 4 | 0 | 56 |
| Other / generated / binary | 9 | 0 | 0 |
| **Total** | **55** | **68** | **1,558** |

Notes for reviewers: pygount classifies Markdown as documentation/comment lines rather than code, which is expected for this blueprint-style repository. The build output under `docs/.vitepress/dist` is excluded so the snapshot reflects source files rather than generated output.

## Honest boundary

This repository is a blueprint and demo workspace, not a hosted SaaS runtime. The proof chain is intentionally file-first: it shows the structure, contracts, and observable files that a capable coding agent or AI IDE can execute against.
