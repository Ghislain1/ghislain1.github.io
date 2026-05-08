# AGENTS.md - Project Instructions

## Project Overview
Angular-based résumé/portfolio website with Bootstrap 5 styling. Deployed to GitHub Pages.

## Tech Stack
- **Framework**: Angular 21.2.0
- **Styling**: SCSS + Bootstrap 5.3.8
- **Language**: TypeScript 5.9.2
- **Package Manager**: npm

## Build Commands
- `npm start` - Start dev server with live reload
- `npm run build` - Production build to `dist/ghislain-resume/`
- `npm run watch` - Watch mode development build

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── about/          # About section component
│   │   ├── awards/         # Awards section component
│   │   ├── education/      # Education section component
│   │   ├── experience/     # Experience section component
│   │   ├── interests/      # Interests section component
│   │   ├── navbar/         # Navigation bar component
│   │   └── skills/         # Skills section component
│   ├── app.component.*     # Root component
│   └── app.routes.ts       # Routing config (if exists)
├── assets/img/             # Images
├── index.html              # Entry HTML
├── main.ts                 # Bootstrap file
└── styles.scss             # Global styles
```

## Component Pattern
Each component follows Angular standalone component structure:
- `*.component.ts` - TypeScript logic
- `*.component.html` - Template
- `*.component.scss` - Component-scoped styles

Components are generated with:
- Style: SCSS
- Tests: skipped (`skipTests: true` in angular.json)

## Development Notes
- Components use Angular standalone API (no NgModule)
- Bootstrap 5 loaded globally via `angular.json`
- No test files (intentionally skipped)
- GitHub Actions auto-deploys to Pages on push to `main`

## Common Tasks
- **Add new section**: Create component in `src/app/components/`, import in parent
- **Style changes**: Edit component SCSS or `src/styles.scss` for globals
- **Update content**: Modify component HTML/templates directly
- **Add images**: Place in `src/assets/img/`

## Lint/Typecheck
No dedicated lint or typecheck scripts configured. Angular CLI handles type checking during build.
