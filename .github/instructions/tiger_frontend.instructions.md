---
description: "Use when building, reviewing, or refactoring this React, TypeScript, Vite, and Material UI frontend; covers product-quality implementation, architecture, UI, accessibility, and validation."
applyTo: "src/**/*.ts, src/**/*.tsx, src/**/*.css, index.html, vite.config.ts, eslint.config.js, package.json, tsconfig*.json, .github/docs/**/*.md"
---

# React Frontend Project Guidelines

## Repository Architecture

- Keep application bootstrap, providers, route definitions, and the shared MUI theme in `src/app/`.
- Keep route composition explicit in `src/app/`: public auth pages should sit outside the authenticated application shell, while protected application routes should share the shell behind an auth boundary once authentication exists. Keep the not-found route outside feature layouts.
- Treat route guards as the authorization boundary. Navigation visibility is a usability affordance, not access control; derive labels/paths/icons from `src/app/navigation.ts` and never infer permission from whether a menu item is hidden.
- Keep primary navigation grouped and configuration-driven as sections grow. Add nested menus, breadcrumbs, or role-aware filtering only when real workflows require them; do not add placeholder destinations or duplicate route labels in page headers.
- Use MUI `Menu` for contextual actions (for example, a file row's actions or an account menu), not as a second global navigation system. Keep menu actions keyboard accessible, anchored to their trigger, and labeled; destructive actions require a clear confirmation flow.
- Put feature-owned pages, components, hooks, API adapters, schemas, and tests under `src/features/<feature>/`; keep a feature self-contained until another feature genuinely needs the same capability.
- Put cross-route application shells in `src/layouts/`. Put stable, domain-neutral UI and utilities in `src/shared/` only when there is real reuse; do not create speculative layers.
- Keep route-level page composition thin. Feature behavior and data contracts belong to their feature, and network access belongs behind that feature's API/service boundary.
- Use MUI as the default component system. Add routes and navigation items only for implemented workflows; do not present inert controls or imply authentication, persistence, or backend connectivity that does not exist.
- Map date-keyed work-item identifiers such as `feature_20261014_user` to readable code paths such as `src/features/user/` or `src/features/auth/`; documentation dates and categories are workflow metadata, not source directory names.

## Requirement Workflow

- Iteration requests live in `.github/docs/features/feature_YYYYMMDD_<topic>.md`, `.github/docs/refactors/refactor_YYYYMMDD_<topic>.md`, or `.github/docs/fixes/fix_YYYYMMDD_<topic>.md`. Their paired plans live in `.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`, with identical type, date, and topic.
- Product-level facts and the current feature inventory live only in `.github/docs/product.description.md`; do not create separate durable feature documents or duplicate the full request there.
- When an implementation request refers to a feature/refactor/fix document, read that request and `product.description.md`. If its paired plan is absent or materially stale, follow `.github/instructions/analyze.instructions.md` to create/update the plan before implementation. Then implement in the plan's order and verify each meaningful step.
- For an analysis-only request, follow `.github/instructions/analyze.instructions.md` and stop after producing the plan; do not modify application code.
- Update `product.description.md` only when the user explicitly asks to synchronize documentation and references `.github/instructions/sync_docs.instructions.md`. During ordinary implementation, analysis, or testing, do not silently update it. Project conventions in this file remain authoritative.
- If the task leaves a material product, security, or data-contract decision open, state the assumption or ask a focused question before implementing behavior that depends on it.
- Keep plans aligned with actual scripts and touched behavior; update implementation status only when the user asks to maintain the plan during implementation or explicitly requests documentation synchronization.

## Project Direction

- Treat this as a real product frontend, not a disposable demo. Before implementing a feature, identify its user, primary task, important states, and the smallest complete user flow.
- When product references are provided or research is requested, study relevant, credible examples for their interaction patterns and information hierarchy. Distinguish verified observations from assumptions; use references as learning material, not as a source to copy code, branded assets, or entire visual designs.
- Prefer a working, coherent vertical slice over decorative screens, placeholder controls, or invented functionality. Make mock data explicit and do not imply that it is persisted or connected to a real service.

## Technology Boundaries

- Use React function components, TypeScript, and Vite. Preserve the existing project setup and conventions unless a concrete requirement justifies changing them.
- Material UI is the default component library for application UI. Use the shared theme in `src/app/theme.ts`; add packages only when a concrete workflow needs them.
- Use MUI theme tokens and shared theme configuration for repeated colors, typography, spacing, and component defaults. Use `sx` for local one-off styling; promote repeated styling into the theme or a reusable component. Avoid parallel design-token systems.
- Add dependencies only when they solve a concrete product need. Prefer established, maintained packages compatible with the current React, TypeScript, and Vite versions; explain meaningful trade-offs before introducing a major library.

## React And TypeScript

- Keep components focused and props explicitly typed. Avoid `any`; use `unknown` at untrusted boundaries and narrow it before use.
- Prefer deriving values during render over storing duplicate state. Keep state as close as practical to the components that own it, and use effects only to synchronize with external systems.
- Do not add memoization or state-management libraries by default. Introduce them only when a measured performance issue or a real cross-feature coordination need warrants it.
- Separate domain behavior from presentation when that makes behavior reusable or independently testable. Organize by feature when the application grows; do not create empty layers, generic wrappers, or speculative abstractions for the starter.

## Product UI And Accessibility

- Use MUI components consistently for standard controls and layout where they fit. Use semantic HTML for document structure and native browser behavior; make any non-MUI UI exception intentional and visually consistent.
- Support narrow and wide viewports, keyboard interaction, visible focus, meaningful labels, and appropriate accessible names. Do not communicate status or errors through color alone.
- Implement the states relevant to each workflow, including loading, empty, validation, success, and failure states. Keep forms usable with clear labels, field-level feedback, and submission feedback.
- Prefer responsive layouts and theme-based variants over scattered hard-coded dimensions. Avoid one-off visual polish that weakens readability, consistency, or task completion.

## Current Product Scope

- The current shell provides a responsive navigation drawer and a file-management starter view with explicitly labeled local sample data. It is not connected to an API and does not provide real upload, sharing, registration, or login.
- Implement future registration and login under a dedicated authentication feature, and file operations under the files feature. Keep auth/session concerns separate from file presentation and define server contracts at the API boundary when they become available.

## Quality And Validation

- Keep network and other external-data handling at clear boundaries. Validate and narrow external data before relying on it; never put credentials or secrets in frontend source or client-exposed environment variables.
- Add or update focused tests for meaningful business rules and user interactions when test infrastructure is available. Do not add a test framework solely for a trivial change without explaining the need.
- Before considering a change complete, run the narrowest relevant checks. The repository currently provides `npm run lint` and `npm run build`; report checks that could not be run and do not claim unverified behavior.
- Keep changes scoped to the requested behavior. Preserve existing user changes, public interfaces, and project conventions unless the task explicitly requires changing them.