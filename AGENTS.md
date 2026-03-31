# AGENTS.md

Operational guide for coding agents working in this repository.

## Project Snapshot
- Language/runtime: TypeScript 5, Next.js 16.2.1, React 19.2.4.
- Build tool: Next.js with npm.
- Styling: Tailwind CSS v4 via PostCSS (@tailwindcss/postcss).
- Backend: Supabase integration for API endpoints.
- Database: Postgres via Supabase REST API.
- Linting: ESLint with Next.js TypeScript and core-web-vitals configs.
- Path alias: `@/*` resolves to project root.

## Next.js 16 Warning
This is NOT the Next.js you know. Version 16 has breaking changes in APIs, conventions, and file structure. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Build, Lint, and Run Commands
Run from `web/` directory.

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Production server (after build)
npm start

# Lint all code
npm run lint
```

### Testing Status
No test framework is currently configured. Before adding tests:
1. Check with project maintainers for preferred testing approach.
2. Common options: Jest, Vitest, or React Testing Library.
3. Update this file with test commands once configured.

## Code Style and Conventions
These rules reflect existing code in `app/` and `components/`.

### Imports
- Use path alias `@/` for local imports: `import Component from '@/components/Component'`.
- Avoid wildcard imports in new code.
- Remove unused imports before finishing.
- Separate React and framework imports from local imports with a blank line.

### Formatting
- Use 2 spaces for indentation, no tabs (JavaScript/TypeScript standard).
- Place opening braces on the same line: `if (condition) {`.
- Keep lines reasonably readable; split long props/attributes across lines.
- Use `'use client'` directive at the very top of client components.

### Naming
- Components: `PascalCase` (e.g., `WaitlistForm`, `HeroSection`).
- Functions/variables: `camelCase` (e.g., `handleSubmit`, `isLoading`).
- Types/interfaces: `PascalCase` (e.g., `WaitlistState`, `Metadata`).
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `EMAIL_REGEX`).
- Files: `PascalCase` for components, `kebab-case` for utilities/hooks when appropriate.

### Types
- Use `type` for object shapes and unions (e.g., `type WaitlistState = {...}`).
- Use TypeScript strict mode enabled.
- Avoid `any`; use `unknown` or proper interfaces.
- Type API responses: `as { message?: string }` for quick typing, prefer proper types.
- Use `export type` for type-only exports when possible.

### Components
- Use function components with hooks exclusively (no class components).
- Server components by default; add `'use client'` only when needed.
- Destructure props in function signature: `function Component({ prop }: { prop: Type })`.
- Use `React.ReactNode` for children prop type.
- Add `role`, `aria-label`, and `aria-describedby` for accessibility.

### Error Handling
- Use `NextResponse.json()` for API route responses with status codes.
- Validate early and return early (common in API routes).
- Use try/catch for async operations with proper error states.
- Return meaningful error messages to users; log technical details separately.
- Use HTTP status codes appropriately: 400 for client errors, 500 for server errors, 503 for unavailability.

### State Management
- Use `useState` for local component state.
- Use `useFormEvent` for form submissions.
- Track loading/error/success states explicitly: `kind: 'idle' | 'success' | 'error'`.
- Clear state after successful operations.

### API Routes
- Place in `app/api/[route]/route.ts`.
- Use `async function POST(request: Request)` for HTTP methods.
- Use `await request.json()` with type casting for body parsing.
- Add `.catch(() => ({}))` for graceful JSON parsing errors.
- Use environment variables via `process.env.VAR_NAME`.

### Styling
- Use Tailwind utility classes exclusively.
- Prefer `className` over `style` prop.
- Use semantic HTML: `header`, `main`, `section`, `footer`, `nav`.
- Add `aria-hidden="true"` to decorative elements.
- Use `sr-only` class for screen-reader-only content.

### Git and Collaboration Expectations
- Keep commits atomic with imperative, descriptive messages.
- Run lint before committing: `npm run lint`.
- Build before pushing to ensure production compatibility: `npm run build`.

## Agent Checklist Before Finishing
- Code compiles and builds (`npm run build`).
- Linting passes (`npm run lint`).
- No unused imports, console.logs, or commented-out code.
- Components have proper TypeScript types.
- API routes handle errors gracefully with appropriate status codes.
- Accessibility attributes (role, aria-label, aria-describedby) are present where needed.
- Server vs client component distinction is correct.
- Next.js 16 API conventions are followed (not assumptions from older versions).
