# Contributing

Thanks for improving `digital-twin`. This repo is a public proof-chain for a file-first Personal Agent Operating Layer, so contributions should make the operating loop easier to inspect, run, or adapt.

## Good First Contributions

- Tighten documentation where a claim is not backed by an inspectable file.
- Add small demo fixtures that show retrieval, capability routing, durable output, or write-back learning.
- Improve capability contracts without turning them into vague prompt packs.
- Fix broken links, unclear setup steps, or VitePress build issues.

## Contribution Principles

1. **Keep it file-first.** Prefer concrete files, checklists, and reproducible paths over abstract descriptions.
2. **Preserve the honest boundary.** This is a blueprint/demo workspace, not a hosted SaaS runtime.
3. **Do not add private data.** Example workspaces must use public, synthetic, or intentionally shareable material.
4. **Make proof stronger.** If a new claim appears in README or docs, link it to an artifact reviewers can inspect.
5. **Keep changes small.** One focused improvement per PR is easier to review and keeps the proof chain clean.

## Local Checks

```bash
npm install
npm run docs:build
```

The build should finish without broken internal links or VitePress errors.

## Pull Request Checklist

Before opening a PR:

- [ ] The change strengthens a documented workflow, proof asset, or adaptation path.
- [ ] No private notes, credentials, emails, phone numbers, or internal client/company details were added.
- [ ] README/docs claims link to concrete repository files where possible.
- [ ] `npm run docs:build` passes locally.

If you are adding a new demo, include the expected success/failure signals so reviewers can tell whether an agent actually completed the loop or only returned a chat answer.
