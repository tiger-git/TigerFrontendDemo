# 文档规范

本项目的迭代文档分为新增功能、重构和缺陷修复三类；产品级说明统一维护在 `product.description.md`。不单独维护长期 feature 文档。

## 统一结构

```text
.github/docs/
  product.description.md
  features/
    feature_20261014_user.md
  refactors/
    refactor_20261020_route_config.md
  fixes/
    fix_20261022_file_search.md
  plans/
    plan_feature_20261014_user.md
    plan_refactor_20261020_route_config.md
    plan_fix_20261022_file_search.md
```

## 命名规则

- 需求文件：`.github/docs/features/feature_YYYYMMDD_<topic>.md`、`.github/docs/refactors/refactor_YYYYMMDD_<topic>.md` 或 `.github/docs/fixes/fix_YYYYMMDD_<topic>.md`。
- 配对计划：`.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`。type、日期和 topic 与需求文件完全一致。
- 日期使用首次提出需求的日期，格式为八位 `YYYYMMDD`；topic 使用小写英文和下划线，例如 `user_profile`。
- 同日主题冲突时先细化 topic；仍冲突时，需求和计划同时追加相同序号，如 `feature_20261014_user_02.md` 和 `plan_feature_20261014_user_02.md`。
- `product.description.md` 记录产品定位、当前已实现能力、已确认规则和规划边界；不重复单项需求、验收清单或实现步骤。

## 工作流程

1. 用户提供需求文本，或维护对应的 `features/feature_...`、`refactors/refactor_...`、`fixes/fix_...` 原始需求文件。
2. 用户或项目总指令按需引用 `.github/instructions/analyze.instructions.md`。该指令结合原始需求、当前代码和 `product.description.md`，输出配对 `plans/plan_...md`；仅分析时不改应用代码。
3. 用户要求实现时，`.github/instructions/tiger_frontend.instructions.md` 确保先读取需求与计划，再按步骤修改和验证。需求只有对话文本时不重复创建原始需求文件。
4. 实现完成后，用户可主动引用 `.github/instructions/sync_docs.instructions.md`，将有代码或用户确认依据的变化整合到 `product.description.md`。同步可选，通常可在 review/commit 前进行；普通编码、分析和测试不得静默更新产品说明。

## 命名取舍

- 使用完整的 `feature`、`refactor`、`fix` 前缀，避免 `feat`、`ref` 的歧义。
- 保留 `features/`、`refactors/`、`fixes/` 分类目录，方便按工作类型筛选；配对计划集中到 `plans/`，便于检查计划状态。
- `.instructions.md` 表达可复用的按需工作规范；不再创建含义重复的 `.prompt.md` 副本。
