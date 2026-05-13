# Change Classification Gate

Before an agent opens a PR, it should classify the change and show evidence. This is a file-first Personal Agent Operating Layer pattern: the decision lives in the repo or PR body where the owner can inspect it.

The gate exists for one simple reason: new optional capability work must not be disguised as a bug fix.

## Classification Table

| Classification | Use when | Required evidence | PR stance |
|---|---|---|---|
| Bug fix | Promised behavior is broken. | Broken behavior, expected behavior, and the smallest code path that explains the gap. | Use `fix:` only to restore known behavior. |
| Feature | The change adds optional capability, a workflow path, config, dependency, UI, or public behavior. | Owner intent, boundaries, default behavior, and docs or tests for the new surface. | Use `feat:`. Do not relabel it as a fix because it improves something. |
| Docs / process | The change updates instructions, examples, runbooks, navigation, or repo process. | Files touched and a statement that runtime behavior is unchanged. | Use `docs:` or `chore:` depending on repo convention. |
| Unsafe / needs-owner | The request is ambiguous, privacy-sensitive, destructive, security-relevant, or depends on data the agent cannot expose. | Unknowns, possible harm, and the owner decision needed. | Stop until the owner resolves the risk. |

## Required Evidence Checklist

- [ ] User request or issue summary, without private data.
- [ ] Files inspected before classification.
- [ ] Current behavior evidence: failing test, command output, screenshot, trace, or docs contract.
- [ ] Expected behavior source: issue, docs, existing tests, comments, or stable product rule.
- [ ] Proposed change surface: files, commands, public API, config, UI, docs, and data touched.
- [ ] Non-goals, especially any optional capability not included in this PR.
- [ ] Verification plan, or reason a check is not available.
- [ ] Privacy check for logs, IDs, credentials, machine-specific paths, customer data, and unpublished repo facts.

## PR Title And Body Policy

The title must match the classification:

```text
fix(scope): restore promised behavior
feat(scope): add optional capability
docs(scope): update operating instructions
chore(scope): adjust repo process
```

The PR body must include this block near the top:

```text
Classification: Bug fix | Feature | Docs / process | Unsafe / needs-owner
Evidence:
- Current behavior:
- Expected behavior:
- Files inspected:
Scope:
- Included:
- Not included:
Verification:
- Tests, build, manual check, or reason not run:
Safety:
- Privacy scan:
- Owner decision needed:
```

For a bug fix, say what was broken and why the patch is the smallest restoration. If the work adds a new option, default, integration, command, or user-visible path, classify it as a feature.

## Stop Conditions

Stop before opening a PR when:

- The agent cannot name the existing behavior that is broken.
- The change adds optional capability but the requested label is "bug fix."
- Evidence depends on private logs, private IDs, machine-specific paths, credentials, or unpublished employer data.
- The patch would delete data, change permissions, migrate storage, or alter security boundaries without owner approval.
- The agent cannot run or describe a meaningful verification path.
- The fix requires guessing product intent instead of restoring a known contract.

## Tiny Worked Example

Proposed change: a local web search backend returns the same URL twice when two fetch paths find it.

Classification: **Bug fix**.

Evidence:

- Current behavior: duplicate URLs appear in the result list.
- Expected behavior: one result per canonical URL, based on the existing contract.
- Files inspected: backend result merge code, existing search tests, docs that describe result shape.
- Verification: add a fixture with duplicate URLs and run the search test suite.

PR title:

```text
fix(search): dedupe local result URLs
```

Not a bug fix: adding a cache, a new ranking provider, or a new search mode. Those may be useful, but they are new optional capability and should be opened as `feat:`.

For a broader reviewer checklist, pair this gate with the [Proof Chain](./proof-chain.md).
