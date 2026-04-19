# Examples

## 1. 把语音转写整理成文章

用户：
`帮我把 raw/thoughts/ 里这篇语音转写整理成博客草稿。`

期望行为：

- 先读 wiki 和历史同类输出
- 判断是否已经处理过同一 source
- 从最强观点抽 throughline
- 输出到 `Blog/Published/`
- 将可复用写作规则写入 learning note

## 2. 刷新 wiki

用户：
`最近又加了一些 seeds 和 thoughts，帮我 ingest 一下。`

期望行为：

- 扫描 `raw/`
- 区分新资料与已处理资料
- 生成 summaries，更新 concepts 和 index
- 把 ingest 决策或发现的新 schema 缺口记录到 learning note

## 3. 研究一个陌生项目

用户：
`帮我研究这个 repo，重点看它能不能增强我的工作流。`

期望行为：

- 先建立心智模型
- 提炼架构和用户价值
- 判断可迁移的方法论
- 结果写成结构化研究报告

## 4. 做一次任务后复盘

用户：
`刚才这个流程感觉还不错，你帮我沉淀成下次可复用的规则。`

期望行为：

- 进入 learning-loop
- 写下成功模式、失败模式、触发条件、skip 条件
- 存入 `wiki/outputs/agent-learnings/` 或等价目录
