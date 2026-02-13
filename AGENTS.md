# AGENTS.md (contextmenu repo)

Repo-level guidance for agents working in `/Users/metehan/Projects/easysqlco/contextmenu`.
This file is additive to the workspace root `AGENTS.md`.

## Purpose
- This repository publishes a reusable React context menu component library as an npm package.
- The package is part of a larger React application ecosystem.
- The component is designed to be flexible and support customizable context menus across multiple use cases.

## Monorepo / Workspace Model
- This repository uses npm workspaces.
- Workspace-level shared files live at repo root:
  - `package.json`
  - `node_modules/`
  - `eslint.config.mjs`
  - `tsconfig.json`
- Workspace reference: [npm workspaces docs](https://docs.npmjs.com/cli/v11/using-npm/workspaces)

## Dependency Placement
- Root `package.json` contains common dev dependencies shared across `lib` and `example`.
- Any non-shared dependency should be added only to the package that uses it (targeted dependency ownership).

## Directory Roles
- `lib/`
  - Source of exported/published component libraries in this repository.
  - Each child folder under `lib/` corresponds to a component library exposed for consumption.
- `example/`
  - Demo/usage app.
  - React app scaffolded with Vite.
  - Imports components from `lib/` to demonstrate integration and usage patterns.

## Context Menu Design Context (`lib/src/index.ts`)
- Public API surface:
  - `useContextMenu`
  - `ContextMenu`
  - `ContextMenuItem`
  - `ContextMenuSeparator`
- `useContextMenu<T>(targetRef?)` is the state/control layer:
  - Tracks `isOpen`, `position` (`x`,`y`), and generic `target` payload.
  - If `targetRef` is provided, attaches a native `contextmenu` listener to open at cursor position.
  - Exposes `open(event, ...params)` for manual open flows and target payload injection.
  - Closes/clears on outside click.
- `ContextMenu` is a controlled presentational container (`isOpen` + `position`, optional `size`).
- `ContextMenuItem` supports `disabled` and optional icon rendering (`icon`, `iconPosition`).
- `ContextMenuSeparator` is a visual divider item.
- Styling/consumer contract:
  - Import package CSS from `@easysqlco/contextmenu/dist/css/contextmenu.css`.
  - Icon rendering uses Font Awesome class names when `icon` is provided.

## Testing Standard
- Use React Testing Library for React component tests.

## Context7 Requirement
- Before making code changes, giving recommendations, or performing reviews for `lib` package code, consult Context7 MCP for the latest best practices.
- Apply this to all mainstream frameworks and dependencies used by the `lib` package.
- Use this flow: `mcp__context7__resolve-library-id` + `mcp__context7__query-docs`.

## Agent Editing Guidance
- Keep this file concise, explicit, and operational.
- Treat this file as living architecture documentation.
- When new architecture details are provided, update this file incrementally to keep it accurate and unambiguous.
