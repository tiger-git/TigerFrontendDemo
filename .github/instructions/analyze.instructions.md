---
description: Analyze a user-provided feature, refactor, or bug-fix request against this repository and produce its paired implementation plan.
---

# 需求分析与计划生成规范

本指令用于用户明确要求分析需求，或项目总指令在实现前调用。将用户原始需求与当前代码和产品上下文结合，生成配对的 `plan_<type>_YYYYMMDD_<topic>.md`。本指令只分析和规划，不修改应用代码，也不更新产品说明。

## 命名规则

- 新增功能需求：`.github/docs/features/feature_YYYYMMDD_<topic>.md`。
- 重构需求：`.github/docs/refactors/refactor_YYYYMMDD_<topic>.md`。
- 缺陷修复：`.github/docs/fixes/fix_YYYYMMDD_<topic>.md`。
- 配对计划统一放在 `.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`。type、日期、topic 必须与需求完全相同，例如 `features/feature_20261014_user.md` 配 `plans/plan_feature_20261014_user.md`。
- 日期为需求建立日，使用八位 `YYYYMMDD`；topic 使用小写英文和下划线。优先遵循用户给出的有效路径。
- 同日主题冲突时先细化 topic；仍冲突时，在需求和计划文件名中同时追加相同序号，例如 `feature_20261014_user_02.md` 和 `plan_feature_20261014_user_02.md`。
- 不创建 `requirements.md` 或长期 feature 说明；只使用 `features/`、`refactors/`、`fixes/` 和 `plans/` 四个固定目录。产品级上下文统一读取 `.github/docs/product.description.md`。

## 分析流程

1. 识别用户给出的原始需求、需求文件和配对计划；读取 `.github/instructions/tiger_frontend.instructions.md`、`.github/docs/product.description.md` 及直接相关代码。
2. 需求文件位于 `features/`、`refactors/` 或 `fixes/` 时保留用户原文，不擅自改写或重命名。若用户只在对话提出需求，计划标注来源为“用户请求”，不要创建重复的原始需求文件。
3. 阅读相关路由、组件、类型、API 边界、测试、依赖和脚本；区分已实现、计划实现与未知内容，不臆测后端、持久化或产品行为。
4. 提炼目标用户、问题、流程、验收标准、范围/非目标、边界状态和涉及路径；检查可访问性、响应式、权限、安全与验证影响。
5. 对安全、数据契约、权限或核心用户流程上的重大歧义，标记待确认并指出阻塞事项，不将假设写成已批准决定。
6. 将计划写入 `.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`。若文件已存在，先核对配对 ID，保留有效决策并只更新该需求计划。

## 计划模板

```markdown
# plan_<type>_YYYYMMDD_<topic>：<简短标题>

## 工作项
- 类型：feature / refactor / fix
- 状态：待确认 / 待实施 / 实施中 / 已完成
- 原始需求：`../<category>/<type>_YYYYMMDD_<topic>.md` 或用户请求
- 产品说明：`../product.description.md`
- 分析日期：YYYY-MM-DD

## 背景与目标
...

## 范围
- 包含：...
- 不包含：...

## 用户流程与验收标准
1. ...

## 现状与方案
- 相关实现：`src/...`
- 已验证事实、假设和决策理由：...

## 实施步骤
1. [ ] ...（涉及路径、预期结果和依赖）

## 状态与边界处理
- 加载、空、成功、失败、校验、权限、安全、窄屏和键盘：...

## 数据与接口
- 类型、API、持久化契约：...
- 未知和待确认项：...

## 验证
- 自动检查：具体命令及覆盖内容
- 手工验收：可观察步骤

## 风险与未决问题
- ...
```

## 输出要求

- 先简要汇报需求判断、代码现状、假设和阻塞问题，再说明计划路径。
- 步骤必须对应实际模块/文件且可验证；不适用的章节说明原因，不留空标题。
- 用户只要求分析时，生成计划后停止，不修改代码或产品说明。实现任务由 `.github/instructions/tiger_frontend.instructions.md` 在计划确认后继续执行。
