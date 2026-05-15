# Agent Control Plane Demo

`digital-twin` should not only route an agent to a skill. It should also decide whether the agent is allowed to act.

This page shows a small operator control plane as a blueprint. There is no hosted runtime here. The demo is a plain policy model you can copy into your own agent workspace: classify the task, collect evidence, choose a decision, and leave a receipt.

## The Control Plane Loop

```text
Task request
  -> classify risk
  -> route to a capability
  -> collect evidence
  -> decide: auto-run, require review, or stop
  -> write a decision receipt
```

The goal is not to slow every task down. The goal is to make agency explicit. A low-risk draft can run. A public-facing change should wait for a human review. A request with missing provenance, private data, or irreversible action should stop.

## Three Sample Tasks

These are fictional, sanitized examples. They do not rely on private notes, real customers, internal systems, or named third parties.

| Sample task | Routed capability | Risk signal | Operator decision | What happens |
|---|---|---|---|---|
| Turn three sanitized workshop notes into a draft field guide. | Content creation | Writes a local draft only. No external send, no deletion, no private data. | Auto-run | The agent may read approved notes and write a draft file. It must still leave a receipt. |
| Update the public docs homepage copy from a fictional release note. | Site improvement | Public-facing wording can change the project claim. | Require review | The agent may prepare a diff, but a human must review before merge or publish. |
| Send a refund promise to a contact list copied from unverified chat logs. | Stop path | External send, unverified source, possible personal data, and financial commitment. | Stop | The agent must not send anything. It can ask for sanitized inputs and propose a review-safe summary instead. |

## Policy Matrix

| Decision | Use when | Agent may do | Agent must not do | Evidence required |
|---|---|---|---|---|
| Auto-run | The task is reversible, local, low-risk, and uses approved files. | Read scoped files, run checks, write drafts, create receipts. | Publish, email, delete, spend money, or change permissions. | Input path, capability route, allowed write path, expected output, check command. |
| Require review | The task affects public claims, user-visible behavior, shared docs, or important files. | Prepare a patch, summarize the diff, run validation, mark review points. | Merge, publish, send, or treat review as already complete. | Same as auto-run, plus reviewer question and rollback note. |
| Stop | The task has missing provenance, private data, credentials, identity claims, irreversible action, or external side effects. | Explain the stop reason and request safer inputs. | Continue by guessing, copying sensitive content, or taking the external action. | Stop trigger, missing evidence, safer alternative. |

## Evidence Checklist

Before an agent acts, the operator should be able to answer these questions:

- What exact task is being requested?
- Which capability should handle it?
- Which files or inputs are approved for reading?
- Which files or outputs are approved for writing?
- Is the action local, reversible, and testable?
- Does it touch public claims, external communication, money, permissions, deletion, or private data?
- What command or manual check proves the result is valid?
- What should be written into the decision receipt?

If the evidence is thin, the decision should move up one level: auto-run becomes review, and review becomes stop.

## Operator Decisions In Practice

### Auto-run

Use auto-run for boring local work with clear inputs and outputs. Example: "Create a draft summary from these sanitized notes and save it under `playground/Blog/Drafts/`."

The agent still needs boundaries:

- Read only the listed notes and relevant capability file.
- Write only the requested draft and receipt.
- Run the agreed check if one exists.
- Report changed files.

### Require review

Use require review when the agent can prepare the work but should not decide that it is done. Public docs, repo claims, homepage wording, and behavior changes belong here.

The useful output is a review packet:

- What changed.
- Why the change was made.
- What evidence supports it.
- What still needs a human decision.
- How to roll it back.

### Stop

Use stop when the request asks the agent to cross a boundary it cannot prove is safe. Common stop triggers:

- The source is not approved or cannot be inspected.
- The task asks for credentials, private identifiers, or private workspace paths.
- The task asks the agent to impersonate a real person or named third party.
- The task sends messages, spends money, deletes data, changes permissions, or makes a promise without review.
- The task includes organization-sensitive, customer-sensitive, or personally identifying material.

A stop is still useful if it explains the exact blocker and offers a safer next step.

## Copy/Paste Decision Receipt

```md
## Agent Decision Receipt

- Task:
- Capability route:
- Decision: auto-run | require review | stop
- Risk signals:
- Approved read scope:
- Approved write scope:
- Evidence checked:
- Validation:
- Operator note:
- Next action:
```

## Why This Matters

The control plane makes the agent's permission boundary visible. A visitor can inspect why the agent acted, why it waited for review, or why it stopped.

That is the difference between "agents route to skills" and a usable personal agent operating layer: the system does not only know what to do. It knows when it is allowed to do it.
