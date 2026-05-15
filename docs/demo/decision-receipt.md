# Decision receipt demo

A personal agent should not finish important work with only a chat answer. It should leave a short receipt the owner can inspect later.

The receipt does not need to be fancy. It should answer seven plain questions:

- What was requested?
- Which files changed?
- What evidence did the agent check first?
- What checks did it run?
- What changed as a result?
- What decision still belongs to the owner?
- What is the next step?

This repository is a blueprint for that habit. It does not claim that a hosted runtime already produces receipts automatically. The pattern is the important part: when an agent works inside files, it should leave a visible trail of what it did and what still needs human judgment.

## Copyable receipt

Use this as a template after any agent run that changes a workspace.

```md
# Agent Work Receipt

request:
  Add a public demo page that explains how an agent should leave an audit trail after it works.

files touched:
  - docs/demo/decision-receipt.md
  - docs/.vitepress/config.mts
  - docs/index.md

evidence checked:
  - README.md
  - docs/index.md
  - docs/.vitepress/config.mts
  - docs/demo/proof-chain.md
  - docs/demo/steven-workflow.md

checks run:
  - npm run docs:build

result:
  Added a standalone Decision Receipt demo page.
  Linked it from the docs navigation and sidebar.
  Added a homepage path so new visitors can find the demo quickly.

owner decision:
  Decide whether this receipt format is strict enough for future agent runs,
  or whether each capability should define its own required receipt fields.

next step:
  Reuse this receipt format after the next real workspace change.
```

## Why this matters

Without a receipt, the owner has to reconstruct the run from memory or scrollback. That is fragile. A good receipt makes the work reviewable in under a minute.

It also keeps responsibility clear. The agent can report evidence, changed files, and checks. The owner still decides whether the result should ship, whether the risk is acceptable, and what follow-up is worth doing.

## Good receipt rules

- Keep it short enough to read before moving on.
- Name files with repository-relative paths, not private local paths.
- Separate evidence from results.
- Say when no checks were run.
- Leave a real owner decision, not a fake approval line.
- Avoid private customer, employer, token, email, ticket, or internal app details.

The goal is not paperwork. The goal is a simple proof trail that survives after the chat window is gone.
