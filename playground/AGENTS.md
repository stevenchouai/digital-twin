# Playground AGENTS

这是一个给 `digital-twin` 试用的最小工作区。

目标不是展示花哨功能，而是让第一次体验就能感受到：

- 先检索，再行动
- 不只回答，还会写回
- 不只完成一次任务，还会留下可复用资产

## 工作区约定

- `raw/thoughts/` 放原始素材
- `Blog/Published/` 放整理后的成稿
- `wiki/_index.md` 是检索入口
- `wiki/outputs/agent-learnings/` 放复用规则
- `wiki/summaries/` 放中间层知识资产

## 本工作区里的默认动作

如果用户让你把原始素材整理成博客草稿：

1. 先读 `wiki/_index.md`
2. 再读已有文章和 learning notes
3. 判断 source 是否重复，判断主题是否已写过
4. 从原始资料里抽 throughline，而不是按 transcript 顺序改写
5. 输出到 `Blog/Published/`
6. 把这次暴露出的可复用规则写到 `wiki/outputs/agent-learnings/`

## 这个 playground 的评判标准

好的结果不是“写得通顺”。

好的结果是：

- 有检索痕迹
- 有重写判断
- 有写回结果
- 有下一次能继续用的规则
