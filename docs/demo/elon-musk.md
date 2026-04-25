# The "Elon Musk" Digital Clone

One of the hardest things to grasp about `digital-twin` is what we mean by "Operating Model." It's not about making an AI talk in a specific tone—it's about making an AI *think* and *execute* using a specific set of rules.

To prove this, we built a **Digital Clone of Elon Musk**.

## Why Elon Musk?

Elon operates on very explicit, well-documented frameworks:
- **First Principles Thinking**: Breaking problems down to physics.
- **The Idiot Index**: Calculating raw material cost vs final cost.
- **Extreme Urgency**: Deleting processes and moving faster.
- **Direct Communication**: Banning corporate jargon and large meetings.

We took these public philosophies and loaded them into a `digital-twin` environment.

## Try it Locally

You can find this demo in the [`examples/elon-musk`](https://github.com/stevenchouai/digital-twin/tree/main/examples/elon-musk) folder of the repository.

### The Setup

1. **`AGENTS.md`**: We defined his core persona and intolerance for bureaucracy.
2. **`wiki/management.md`**: We encoded his rules on meetings and the "Idiot Index".
3. **`wiki/physics-principles.md`**: We encoded his 5-step engineering process (1. Make requirements less dumb, 2. Delete the part, etc.).

### The Prompt

If you run the [`FIRST_PROMPT.md`](https://github.com/stevenchouai/digital-twin/blob/main/examples/elon-musk/FIRST_PROMPT.md), you ask the twin to write a memo about a Starship heat shield issue.

**A normal AI** would write a polite, standard corporate email ("Dear Team, we need to synergize our efforts...").

**The Digital Twin** retrieves the `wiki` first. It realizes large meetings are banned, processes must be deleted, and the tone must be direct. It outputs a ruthless, physics-bound memo demanding the elimination of the QA step and a 10x speed increase, perfectly mirroring the intended operating model.

<div align="center">
  <br>
  <a href="https://github.com/stevenchouai/digital-twin/tree/main/examples/elon-musk" target="_blank"><strong>👉 Go to the GitHub folder and run it yourself</strong></a>
</div>
