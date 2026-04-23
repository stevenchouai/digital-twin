# Workflow

这个文档解释的不是“agent 怎么跑起来”，而是 `digital-twin` 为什么应该存在。

## 从 Prompt 到 Harness，再到 Digital Twin

如果回看这一轮 AI 工程的演化，会发现 leverage 的位置一直在外移。

### Prompt Engineering

重点是把一句话说对，让模型在当前任务里表现更好。

解决的问题：

- 意图表达
- 输出格式
- 单次任务质量

它很重要，但它仍然主要是 `one-shot optimization`。

### Context / Tools

后来大家发现，模型是否有能力，不只取决于 prompt，还取决于它能不能看到正确资料、调用正确工具。

解决的问题：

- 检索外部信息
- 读文件和环境
- 与真实系统交互

### Skills

再往后，大家开始把高频任务封装起来，把 prompt、约束、模板、参考文档、工具用法组合成一个可复用模块。

解决的问题：

- 重复劳动
- 任务可复用性
- 质量基线

### Harness Engineering

最近更进一步的判断是：真正决定 agent 能不能可靠工作的，往往不是模型本身，而是模型外面的那层系统。

解决的问题：

- 执行环境
- 权限和边界
- 验证和反馈回路
- 计划、审查、恢复、写回

这时工程关注点已经不再是“怎么写 prompt”，而是“怎么设计一个 agent 可以稳定工作的环境”。

### Digital Twin

`digital-twin` 继续沿着这条线往前走，但把中心从“某个任务”切到“某个人”。

它要解决的问题是：

- AI 为什么每次都像第一次认识你
- 为什么好的结果总停留在聊天里
- 为什么工作方法很难跨任务复用
- 为什么 agent 能帮你干活，却很难越来越贴近你的判断方式

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

这条链路里，真正关键的不是“回答得像不像人”，而是“做完之后系统有没有变得更强一点”。

## 它要解决的三个缺口

### 1. Stateless

普通 AI 往往只对当前对话负责。

Digital Twin 要先读已有系统，再决定怎么做。

### 2. Generic

普通 AI 默认使用通用做法。

Digital Twin 要尽量沿用已有偏好、目录结构、写作声音、命名规则和质量标准。

### 3. Non-durable

普通 AI 的好回答很容易留在聊天里。

Digital Twin 要把结果写成以后还能找得到、还能继续用的文件化资产。

## 四个关键设计

### 1. Retrieval First

在做实质工作前，优先读取：

1. workspace `AGENTS.md`
2. `wiki/_index.md`
3. `wiki/outputs/` 里的历史报告、Q&A、learning notes
4. 相关 concepts 或 summaries
5. 最后才回到 raw materials

这样做的目的不是形式正确，而是避免重复劳动，避免忽略已经形成的判断。

### 2. Capability Routing

不是所有任务都该按同一种方法做。

写文章、刷新 wiki、研究代码库、改网站、做简历，本质上是不同工作流。Digital Twin 先按任务意图路由，再进入对应模块，而不是靠一个巨大 prompt 同时处理所有事情。

### 3. Write Back

真正高价值的结果，不应该只存在于聊天记录里。

每次任务最好至少留下下面三类资产中的一种：

- `knowledge asset`: 概念页、摘要、研究笔记
- `delivery asset`: 文章草稿、网站文案、简历改稿、分析报告
- `operating asset`: 规则、模板、命名约定、skip 条件、失败模式

第三类最容易被忽视，但它最能决定一个 twin 会不会越用越像你。

### 4. Learning Loop

任务结束后，不是机械写总结，而是问四个问题：

1. 这次暴露了什么稳定偏好
2. 哪一步该固定成默认规则
3. 哪种错误以后应该直接跳过
4. 哪个结果值得变成模板或 playbook

只有当答案对未来真的有帮助时，才把它写回系统。

## 为什么这才叫 Digital Twin

这里的 twin，不是指“说话像我”。

更准确地说，它是：

- 更像我的工作方式
- 更像我的判断路径
- 更像我对质量和结构的要求
- 更像我会怎样把一次任务变成长期资产

所以它不是一个 persona shell，而是一个 gradually externalized operating model。

## 这套方法的真正目标

目标不是让 AI “更像一个人”。

目标是让 AI 越来越能继承一个人的：

- 工作上下文
- 决策偏好
- 质量标准
- 方法论资产

当这些东西被持续外化到文件、规则、技能、workflow、learning notes 里，digital twin 才开始成立。

## Public Boundary

这个公开仓库不会暴露 Steven 的私人知识库内容。

它公开的是方法，不是隐私：

- 如何让 AI 先读再做
- 如何把结果从聊天写回文件系统
- 如何把 repeated tasks 变成 durable workflows
- 如何让“像你”来自工作痕迹，而不是角色扮演

这也是这个 repo 对外最有价值的地方。
