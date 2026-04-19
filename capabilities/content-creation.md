# 内容创作

将原始笔记、语音转写、碎片想法转化为可发布或可继续打磨的中文文章。

## 适用场景

- 用户要写博客、文章、X 推文
- 用户有一篇笔记想变成正式文章
- 用户提到 `raw/thoughts/`、`Blog/Originals/` 或 journal 里的素材

## 核心原则

- 不把 spoken notes 原样抄成文章
- 先查历史是否做过相同或近似主题
- 原始资料和生成内容必须分离
- review 与 publish 是两个阶段，不要混在一起

## 工作流

### 1. 确认来源

素材来源可能是：

- `raw/thoughts/`
- `Blog/Originals/`
- `journal/`
- 用户直接贴来的文字
- 外部链接、会议记录、语音转写

### 2. 先做 retrieval 与去重

生成前先检查：

- `Blog/Published/` 是否已有同一 `source`
- 历史文章里是否已有同主题成稿
- `wiki/outputs/` 是否已有近似提炼

如果已有明确重复，优先提示复用或增量更新，而不是重新生成一篇。

### 3. 提炼 throughline

读完源笔记后，找最强的一条主线。

保留：

- Steven 的真实判断
- 反复出现的世界观
- 能推动论证的具体例子

删除或压缩：

- 口语重复
- 过渡废话
- 断裂片段
- 不改变结论的例子

### 4. 生成文章

使用 [../assets/article-template.md](../assets/article-template.md) 作为骨架，输出 Markdown：

1. frontmatter
2. 标题
3. 核心判断
4. 关键观点
5. 正文
6. 行动建议

### 5. 源文件处理

遵守 source lineage：

- 原始文件保留在原始目录或 `Blog/Originals/`
- 生成稿放到 `Blog/Published/`
- 如需归档，重命名为 `YYYY.MM.DD 原文-<文章标题>.md`

### 6. 产出后写回知识系统

如果这篇文章里出现了可复用的新判断：

- 给 wiki 增加 summary 或 output
- 必要时更新 concepts
- 给 learning loop 留下写作层经验

## 标题规则

好标题优先表达：

- 一个决策规则
- 一个世界观变化
- 一个职业原则
- 一个学习原则

避免只是复述表面话题。

## 标签规则

每篇文章建议 8 到 12 个标签，按三组组织：

- Topic
- Capability
- Context

使用 [../references/tag-taxonomy.md](../references/tag-taxonomy.md) 的受控词汇。

## 禁止事项

- 不混淆 raw 与 generated
- 不机械照搬 transcript 结构
- 不把一次聊天口吻直接当公开文章口吻
