# Try It

这个文档只做一件事：帮你从 0 跑出你自己的 digital twin MVP。

## Step 1: 拿最小工作区起步

打开 [`playground/`](./playground)。

这里已经给你放好了最小必要结构：

- `raw/thoughts/`
- `wiki/_index.md`
- `wiki/summaries/`
- `wiki/outputs/agent-learnings/`
- `Blog/Published/`
- `AGENTS.md`

你现在的目标不是设计完美系统，而是先跑通第一次 write-back。

## Step 2: 跑第一次任务

复制 [`playground/FIRST_PROMPT.md`](./playground/FIRST_PROMPT.md) 里的 prompt。

这次运行成功后，你应该看到：

- `Blog/Published/` 下多出一篇新的草稿
- `wiki/outputs/agent-learnings/` 下多出一条新的规则

如果没有新文件，只是多了一段聊天答案，这次就不算成功。

## Step 3: 换成你自己的内容

把这些东西换成你自己的：

- `raw/thoughts/` 里的素材
- `wiki/_index.md` 里的知识入口
- `Blog/Published/` 里的历史输出
- `agent-learnings/` 里的已有规则

做到这里，你就已经有了自己的最小 twin，不再只是跑 demo。

## 每一步你会得到什么

### Step 1 之后

你得到一个可操作的最小 knowledge base skeleton。

### Step 2 之后

你得到一次完整的 `read -> write -> learn` 闭环。

### Step 3 之后

你得到一个开始围绕你自己工作的 local system。

## 最有价值的反馈

如果你试了，最有帮助的反馈不是“挺好”，而是这种：

- `它还是太像回答，不像 workflow`
- `它没有真的用到我已有的资料`
- `它写回了文件，但没有形成可复用资产`
- `learning loop 太弱，我下次不会真的受益`

因为这些反馈，直接指向 twin 还没成立的地方。
