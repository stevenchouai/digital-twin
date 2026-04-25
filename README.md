<div align="center">
  <img src="./assets/banner.png" alt="Digital Twin Banner" width="800" />

  <h1 align="center">digital-twin</h1>
  <p align="center">
    <strong>Your Personal Agent Operating Layer.</strong><br/>
    Build an AI that inherits your logic, style, and memory, instead of just answering prompts.
  </p>

  <p align="center">
    <a href="https://github.com/stevenchouai/digital-twin/stargazers"><img src="https://img.shields.io/github/stars/stevenchouai/digital-twin?style=flat-square" alt="Stars" /></a>
    <a href="https://github.com/stevenchouai/digital-twin/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" /></a>
    <a href="https://stevenchouai.github.io/digital-twin/"><img src="https://img.shields.io/badge/docs-live-brightgreen?style=flat-square" alt="Docs" /></a>
  </p>
</div>

## 🚀 Why `digital-twin`?

Most AI agents start from scratch every time you talk to them. They don't know what you know, how you think, or where you save things. 

**`digital-twin` is different.** It’s not just a set of prompts. It’s an **operating model** that gradually externalizes your workflow so an agent can inherit it.

- 🛑 **Traditional AI:** Prompt -> Answer -> End.
- 🟢 **Digital Twin:** Understand Intent -> Retrieve your Knowledge -> Route to your Skills -> Execute -> **Write Back & Learn**.

## ✨ Core Features

- **🧠 Deep Retrieval:** Pulls from your personal `wiki/` and past `agent-learnings/` before acting.
- **🛠 Capability Routing:** Uses specific workflows (Skills) for writing, coding, or researching instead of a generic mega-prompt.
- **💾 Write-back System:** Generates real files (markdown, code) in your file system, not just chat bubbles.
- **🔄 Learning Loop:** Extracts new rules and preferences from every session so it gets smarter next time.

## 🌟 Showcase: The "Elon Musk" Digital Clone

We don't just talk about it—we built a demo to prove it. Check out the [Elon Musk Digital Twin Demo](./examples/elon-musk) to see how the system uses Elon's public speeches, tweets, and first-principles thinking to operate just like him.

<div align="center">
  <a href="./examples/elon-musk"><strong>👉 Explore the Elon Musk Demo</strong></a>
</div>

## 🏗 Architecture Workflow

```mermaid
graph TD
    A[User Intent] --> B(1. Understand Intent)
    B --> C(2. Retrieve Context)
    C -->|Reads wiki/ & learnings/| D(3. Route to Capability)
    D --> E(4. Execute & Write Back)
    E -->|Saves files| F(5. Learning Loop)
    F -->|Updates rules| C
```

## 🏁 Quick Start (Build Your MVP)

You don't need a massive database to start. You can build your MVP in 3 steps:

### 1. Initialize the Workspace
Start with the [`playground/`](./playground) folder. It provides a minimal structure:
- `AGENTS.md`
- `raw/thoughts/` (raw materials)
- `wiki/` (knowledge base)
- `agent-learnings/` (memory)

### 2. Run Your First Task
Use [`playground/FIRST_PROMPT.md`](./playground/FIRST_PROMPT.md) in Cursor, Claude, or your LLM runner of choice.
You will see it generate actual files (a blog post, a learning note) instead of just chatting.

### 3. Clone Yourself
Replace the files in `playground/raw/thoughts/` and `wiki/` with your own notes, transcripts, and rules. Watch the twin adapt to you.

## 📚 Documentation

Dive deeper into the philosophy and architecture:
- [📖 **Documentation Website**](https://stevenchouai.github.io/digital-twin/)
- [`THESIS.md`](./THESIS.md): The core philosophy behind the Personal Agent Operating Layer.
- [`WORKFLOW.md`](./WORKFLOW.md): How the 5-step loop actually runs under the hood.
- [`SKILL.md`](./SKILL.md): How to define specific capabilities.

## 🤝 Contributing
Contributions are welcome! Please read our contributing guidelines and submit PRs.

## 📄 License
This project is licensed under the MIT License.
