# Steven Workflow Playground

这是你搭自己的 digital twin MVP 的起点，也是这个 repo 里最轻量的 Steven/self workflow demo。

这个目录存在的目的，不是展示一个完整产品，而是让你从一个最小 skeleton 开始，马上跑通 Personal Agent Operating Layer 的核心链路：

```text
输入原始素材
  -> 检索个人 wiki 和历史产出
  -> 路由到内容创作 capability
  -> 产出可发布文件
  -> 写回下次可复用的学习规则
```

## 你应该怎么用

1. 先看 [`FIRST_PROMPT.md`](./FIRST_PROMPT.md)
2. 再看这个目录已经有哪些文件
3. 跑一次
4. 然后把内容逐步替换成你自己的

## 你第一次应该观察什么

不要先盯着文章写得好不好。

先看这四件事有没有发生：

- 它先读了上下文
- 它没有机械改写
- 它把结果写回了系统
- 它留下了下次还能用的规则

跑完以后，可以用 [`../docs/demo/agent-work-receipt.md`](../docs/demo/agent-work-receipt.md) 记录这次 agent 读了哪些文件、写了哪些文件、还有哪些内容需要人工复查。

如果这四件事发生了，你就已经跑出了自己的最小 twin workflow。

## 这次 demo 的具体链路

| 阶段 | 文件 | 作用 |
|------|------|------|
| 输入 | [`raw/thoughts/2026-04-23-why-most-ai-feels-generic.md`](./raw/thoughts/2026-04-23-why-most-ai-feels-generic.md) | 原始想法素材 |
| 检索入口 | [`wiki/_index.md`](./wiki/_index.md) | 告诉 agent 先读哪些历史资产 |
| 历史判断 | [`Blog/Published/2026-04-10-ai-workflow-is-the-product.md`](./Blog/Published/2026-04-10-ai-workflow-is-the-product.md) | 防止重复写已有观点 |
| 中间知识 | [`wiki/summaries/2026-04-12-agent-products.md`](./wiki/summaries/2026-04-12-agent-products.md) | 提供 reusable language 和核心判断 |
| 写作记忆 | [`wiki/outputs/agent-learnings/2026-04-15-writing-rules.md`](./wiki/outputs/agent-learnings/2026-04-15-writing-rules.md) | 约束输出方式和写作偏好 |

如果 agent 最后只回答一段文字，而没有写入 `Blog/Published/` 和 `wiki/outputs/agent-learnings/`，说明它还停留在普通 prompt 模式，没有进入 digital twin 的 write-back loop。

## 怎么换成你自己

- 把 `raw/thoughts/` 换成你的口述、笔记、会议记录或研究材料
- 把 `wiki/_index.md` 换成你的知识入口
- 把 `Blog/Published/` 换成你自己的输出目录
- 把 `wiki/outputs/agent-learnings/` 当作 agent 的长期工作规则

目录名可以变，关键是保留这条链路：先读已有系统，再选择能力模块，然后写回结果和规则。
