# AGENTS.md

Guidance for agents working in this repo.

## Mission

`digital-twin` is a file-first Personal Agent Operating Layer blueprint. Preserve the repo's honest positioning: it is a practical template and demo system for retrieval, capability routing, durable write-back, and learning loops — not a claim that a hosted full runtime already exists.

## Repo map

- `README.md` — public product page and main proof narrative.
- `THESIS.md`, `WORKFLOW.md`, `SKILL.md` — core operating model docs.
- `capabilities/` — modular capability definitions used by the twin.
- `playground/` — Steven-style runnable workflow demo. Read `playground/AGENTS.md` before editing there.
- `examples/elon-musk/` — public demo using external public sources. Read its scoped `AGENTS.md` before editing.
- `docs/` — VitePress documentation site.
- `assets/` — public visuals used by README/docs.

## Working rules

- Keep the project file-first and inspectable. Prefer markdown artifacts, explicit capability files, and verifiable demo paths over hidden state.
- Do not introduce private Steven vault content, credentials, personal contact data, or local absolute paths into public docs.
- Maintain the distinction between blueprint/template and runtime implementation. If adding a feature claim, link it to a concrete file, demo, or command.
- Preserve bilingual examples where useful, but keep public positioning clear for English-speaking builders/recruiters.
- Use repo-relative links in docs. Avoid absolute local paths.
- Before changing scoped demo folders, read the local `AGENTS.md` in that subtree.

## Commands

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
npm run check
npm test
```

`npm run check` and `npm test` both build the VitePress docs.

## Validation

- Docs/README/capability changes: run `npm run docs:build` when feasible.
- Link-heavy changes: inspect links manually or with a markdown/link checker if available.
- New demo claims: verify the referenced files exist and the flow can be followed from README.

## Handoff checklist

- Summarize changed files with repo-relative paths.
- State validation commands and results.
- Mention any demo or docs claims that were not executed end-to-end.
