# Wiki 管理

管理 Steven 的知识 wiki：ingest 新资料、查询已有知识、做健康检查，并让 wiki 成为数字分身的长期工作记忆。

## 前提

仅在存在 `AGENTS.md` 和 `wiki/` 的知识库工作区启用。

## 设计原则

- wiki 是 source of truth
- retrieval-first，不是空想式回答
- 历史 outputs 与 concepts 同样重要
- ingest 只处理增量，不重复劳动

## 推荐目录

```text
raw/
├── thoughts/
├── seeds/
wiki/
├── _index.md
├── _log.md
├── concepts/
├── entities/
├── summaries/
└── outputs/
```

推荐在 `wiki/outputs/` 下继续细分：

- `wiki/outputs/qa/`
- `wiki/outputs/research/`
- `wiki/outputs/agent-learnings/`
- `wiki/outputs/health-checks/`

## 操作 A：Ingest

### 扫描规则

对 `raw/thoughts/` 和 `raw/seeds/`：

- 读前几行
- 如果存在 `ingested:` frontmatter，跳过
- 否则加入队列

对 journal：

- 只读最近窗口，不要求 `ingested`
- 提取值得沉淀为 wiki 资产的内容

### 处理规则

每篇新资料都要完成：

1. 理解核心问题与核心判断
2. 生成 `wiki/summaries/` 条目
3. 更新相关 `wiki/concepts/`
4. 必要时补 `wiki/entities/`
5. 在源文件添加 `ingested:`
6. 更新 `_index.md` 与 `_log.md`

## 操作 B：Query

查询顺序不是只看概念页，而是：

1. `wiki/_index.md`
2. 相关 concepts
3. 相关 outputs
4. 相关 summaries
5. 必要时再回源文件

回答结构：

1. 先结论
2. 再依据
3. 最后建议

有持久价值时，写入 `wiki/outputs/qa/`。

## 操作 C：Health Check

健康检查重点：

- 概念冲突
- 被频繁提及但未建页的概念
- 孤立页面
- outputs 与 concepts 脱节
- 已有工作流里的重复规则或冲突规则

结果写入 `wiki/outputs/health-checks/health-check-YYYY-MM-DD.md`

## 和学习闭环的关系

wiki 不只是存知识，也要存“数字分身如何工作”。

当你发现：

- 用户新的长期偏好
- 更好的 ingest 规则
- 更稳的命名规则
- 明确的 skip 条件

把它写进 `wiki/outputs/agent-learnings/`，而不是只留在当前对话。

## 禁止事项

- 不删除已有 wiki 页面
- 不改写 raw 原文，除非添加必要 frontmatter
- 不把一次性的临时想法伪装成稳定概念
