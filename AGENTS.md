# AGENTS.md - Project Instructions

## Project Overview
Angular-based résumé/portfolio website with Bootstrap 5 styling. Deployed to GitHub Pages.

## Tech Stack
- **Framework**: Angular 21.2.0 (Standalone Components)
- **Styling**: SCSS + Bootstrap 5.3.8
- **Language**: TypeScript 5.9.2
- **Package Manager**: npm
- **Routing**: Angular Router

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
│   ├── models/
│   │   └── resume.model.ts # TypeScript interfaces
│   ├── app.component.*     # Root component with router outlet
│   └── app.routes.ts       # Angular routing configuration
├── assets/img/             # Images
├── index.html              # Entry HTML with app-root
├── main.ts                 # Bootstrap file with router provider
└── styles.scss             # Global styles
```

## Component Pattern
Each component follows Angular standalone component structure:
- `*.component.ts` - TypeScript logic with typed data
- `*.component.html` - Template with control flow syntax (@for, @if)
- `*.component.scss` - Component-scoped styles

## Best Practices Applied
- **Standalone components**: No NgModules, direct imports
- **Typed data models**: Interfaces in `src/app/models/`
- **Control flow syntax**: Using `@for` and `@if` instead of *ngFor/*ngIf
- **Router integration**: Proper navigation with RouterLink and fragment support
- **Component composition**: AppComponent uses router-outlet for child components

## Common Tasks
- **Add new section**: Create component in `src/app/components/`, add route in `app.routes.ts`
- **Update content**: Modify component TypeScript data or HTML templates
- **Style changes**: Edit component SCSS or `src/styles.scss` for globals
- **Add images**: Place in `src/assets/img/`

## Development Notes
- Components use Angular standalone API with typed data
- Bootstrap 5 loaded globally via `angular.json`
- No test files (intentionally skipped)
- GitHub Actions auto-deploys to Pages on push to `main`

## Lint/Typecheck
Run `npm run build` to type-check. Angular CLI handles type checking during build.
