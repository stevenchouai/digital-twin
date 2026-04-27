# Workflow

这个文档解释的不是“agent 怎么跑起来”，而是 `digital-twin` 为什么应该存在。

## 从 Prompt 到 Harness，再到 Digital Twin

如果回看这一轮 AI 工程的演化，会发现 leverage 的位置一直在外移。

### Prompt Engineering
重点是把一句话说对，让模型在当前任务里表现更好。

### Context / Tools
模型是否有能力，不只取决于 prompt，还取决于它能不能看到正确资料、调用正确工具。

### Skills
把高频任务封装起来，把 prompt、约束、模板、参考文档、工具用法组合成一个可复用模块。

### Harness Engineering
关注点不再是“怎么写 prompt”，而是“怎么设计一个 agent 可以稳定工作的环境”。

### Digital Twin
继续沿着这条线往前走，但把中心从“某个任务”切到“某个人”。

## Core Loop

```text
User request
  -> understand intent
  -> retrieve prior assets
  -> route to the right capability
  -> execute in the real workspace
  -> write durable output
  -> distill reusable learning
```

![Digital Twin operating loop](/visuals/operating-loop.svg)

这个 loop 的重点不是“让 AI 看起来更像你”，而是让每次高价值任务都进入同一个可复用链路：先读已有资产，再选择能力模块，然后产出文件，最后把新的规则沉淀下来。

## Asset Map

![Digital Twin asset map](/visuals/asset-map.svg)

`digital-twin` 不是把所有东西塞进一个 prompt，而是把人的长期资产拆成可读、可写、可复用的文件层：raw notes、wiki、published site、skills、learning notes。这样 agent 每完成一次任务，都能让系统变得更清楚一点。

## 四个关键设计

### 1. Retrieval First
在做实质工作前，优先读取历史记录和已形成的判断。

### 2. Capability Routing
Digital Twin 先按任务意图路由，再进入对应模块，而不是靠一个巨大 prompt 同时处理所有事情。

### 3. Write Back
真正高价值的结果，不应该只存在于聊天记录里，应该成为文件系统中的资产。

### 4. Learning Loop
任务结束后，提取新偏好和规则写回系统。
