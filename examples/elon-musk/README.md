# Elon Musk Digital Twin Demo

This folder contains a pre-configured digital twin environment designed to simulate Elon Musk's operating model. 

It demonstrates how `digital-twin` can be loaded with someone else's thinking frameworks, decision rules, and knowledge base, so that when given a task, the agent acts according to *their* logic, not a generic AI's logic.

## What's inside?

- `AGENTS.md`: Defines Elon's core personality, communication style (direct, no-nonsense), and primary cognitive framework (First Principles).
- `wiki/`: Contains his established operating rules.
  - `management.md`: Rules about meetings, bureaucracy, and "The Idiot Index".
  - `physics-principles.md`: His approach to breaking problems down to fundamental truths.
- `raw/thoughts/`: Some raw transcripts/tweets to act as source material.
- `FIRST_PROMPT.md`: A sample task you can run.

## How to run the Demo

1. Open this directory in your favorite AI IDE (like Cursor or Windsurf).
2. Open `FIRST_PROMPT.md`.
3. Highlight the prompt and ask the Agent to execute it.
4. Watch how it retrieves the `wiki/management.md` and `AGENTS.md` before it writes the email!
