---
description: Use only when the user explicitly requests reconciling implemented changes or confirmed product changes into product.description.md.
---

# 产品说明同步规范

本指令只在用户明确要求更新产品说明，或用户显式引用本文件时执行。通常可在代码评审或提交前使用，但不是强制门禁。普通实现、需求分析和测试期间不得自动触发或静默修改 `.github/docs/product.description.md`。

## 同步流程

1. 确认用户要求同步的功能范围。检查相关 staged、unstaged 和 untracked 代码变更；若 Git 信息不可用，询问或依据用户指定路径继续，不擅自扩大范围。
2. 阅读当前实现、相关类别目录中的需求与 `.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`，以及现有 `.github/docs/product.description.md`。运行或读取已有验证结果，区分已实现、未实现、已确认和待确认事实。
3. 对照代码检查产品说明中的能力、用户流程、导航、数据/API 边界、权限、安全要求和限制。只更新有代码或用户确认依据的部分。
4. 将确已实现的行为描述为“当前能力”；未实现内容明确标为“规划中”；未验证内容标为“未验证”；产品决策未定时保留为“待确认”。不要把计划或 mock 写成上线能力。
5. 只修改 `product.description.md`，除非用户明确指定其他文档。不得顺手重写原始需求、实施计划或源代码。
6. 如发现产品说明与代码冲突，但代码意图、产品决策或兼容性后果不清楚，先汇报差异并询问，不擅自决定产品行为。

## 产品说明内容边界

- 产品定位、用户和主要场景。
- 当前已实现能力与明确不可用能力。
- 已确认的核心流程、业务规则和权限边界。
- 对产品有意义的架构/API边界及外部依赖。
- 规划能力和待产品确认事项，必须与当前能力分开标注。

产品说明不承载逐文件实施步骤、每次需求的完整验收清单或重复的项目编码规范。单次工作细节仍由 `features/feature_...`、`refactors/refactor_...`、`fixes/fix_...` 与 `plans/plan_...` 文件维护。

## 输出

说明检查了哪些代码/需求/计划，哪些文档事实发生差异；同步后列出修改内容、尚未实现/待确认项和实际运行的验证命令。若无需更新，说明产品说明与代码一致的范围及未覆盖部分。
