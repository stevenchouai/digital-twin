# Elon Musk Digital Twin Demo

This folder contains a pre-configured digital twin environment designed to simulate Elon Musk's operating model.

It demonstrates how `digital-twin` can be loaded with someone else's thinking frameworks, decision rules, and knowledge base, so that when given a task, the agent acts according to *their* logic, not a generic AI's logic.

## What's inside?

### 📋 Configuration
- `AGENTS.md`: Defines Elon's core personality, communication style (direct, no-nonsense), and primary cognitive framework (First Principles).
- `FIRST_PROMPT.md`: A sample task you can run immediately.

### 📚 Knowledge Wiki (4 pages)
The wiki is the twin's "working memory" — compiled, structured rules extracted from raw materials.

| Wiki Page | What It Captures |
|-----------|-----------------|
| `wiki/management.md` | Management rules, the 5-step Algorithm, Idiot Index, with real SpaceX/Tesla case studies |
| `wiki/physics-principles.md` | First Principles thinking + the 5 Engineering Rules |
| `wiki/decision-making.md` | Probability thinking, risk tolerance, decision speed, common decision traps |
| `wiki/communication-style.md` | Radical directness, email rules, meeting minimalism, time compression philosophy |

### 📝 Raw Materials (4 sources)
These are the "original documents" — the kind of unstructured input you'd collect about any person you want to clone.

| Raw Source | Why It Was Collected |
|-----------|---------------------|
| `raw/thoughts/starship-update.txt` | Shows Musk's real-time engineering feedback style: identify waste → propose fix → compress timeline |
| `raw/thoughts/tesla-production-hell.txt` | His most famous mistake and how he learned from it — proves the Algorithm's step order matters |
| `raw/thoughts/spacex-culture.txt` | Management philosophy in practice, not just theory. The Idiot Index as a daily metric |
| `raw/thoughts/ai-risk-stance.txt` | First Principles applied to an entirely new domain (AI safety), showing framework transferability |

### 🔍 Deep Dive
- **[`SHOWCASE.md`](./SHOWCASE.md)**: Full breakdown of why each resource was collected, how they connect to each other, and a **Before vs After** comparison showing how the twin's output quality changes with proper wiki loading.

## How to run the Demo

1. Open this directory in your favorite AI IDE (like Cursor or Windsurf).
2. Open `FIRST_PROMPT.md`.
3. Highlight the prompt and ask the Agent to execute it.
4. Watch how it retrieves the `wiki/management.md` and `AGENTS.md` before it writes the email!

## What to look for

After running the demo, check whether the output:
- ✅ Starts with the problem, not a polite greeting
- ✅ Uses specific Musk concepts (Idiot Index, delete-before-optimize)
- ✅ Compresses the timeline aggressively
- ✅ Signs off with just "Elon", no "Best regards"
- ❌ If it says "Dear Team" or "I'd like to suggest" — the wiki wasn't loaded properly
