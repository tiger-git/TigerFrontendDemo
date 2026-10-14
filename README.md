# Tiger Drive

React 19, TypeScript, Vite, Material UI, and React Router form the frontend foundation. The current app provides a responsive navigation shell and a file-management view backed only by labeled local sample data; it has no backend, authentication, upload, or persistence yet.

## Architecture

```text
src/
  app/                 # App providers, route composition, shared MUI theme
  layouts/             # Cross-route application shell and navigation
  features/
    files/             # File-management pages and future domain logic
    auth/              # Future registration, login, and session workflows
  shared/              # Add only stable, genuinely cross-feature code
  main.tsx             # Browser entry point
```

Keep feature UI, types, API adapters, validation, and tests with the feature that owns them. Add shared code only when more than one feature needs the same stable behavior. Keep API integration behind feature-level boundaries; do not treat local sample data as persisted data.

## Project Documentation

Keep product-level facts in `.github/docs/product.description.md`. Store each iteration request under `.github/docs/features/feature_YYYYMMDD_<topic>.md`, `refactors/refactor_YYYYMMDD_<topic>.md`, or `fixes/fix_YYYYMMDD_<topic>.md`. Its paired plan goes under `.github/docs/plans/plan_<type>_YYYYMMDD_<topic>.md`.

Use `.github/instructions/analyze.instructions.md` to analyze raw requirements and produce a plan. The frontend project instructions coordinate planning and implementation when code changes are requested. After implementation, explicitly reference `.github/instructions/sync_docs.instructions.md` when you want verified changes integrated into the product description. Documentation sync is optional and never an automatic side effect of implementation or a commit gate.

See [.github/docs/README.md](.github/docs/README.md) for the naming convention and lifecycle.

## Commands

- `npm run dev` starts the local Vite development server.
- `npm run lint` checks ESLint rules.
- `npm run build` runs TypeScript project checks and creates a production build.
- `npm run preview` serves the production build locally.
