# Express PNPM Boilerplate

A minimal **Express.js** application scaffolded with **pnpm**, using **morgan** for HTTP request logging.

## Scripts

- `pnpm install` – install dependencies
- `pnpm start` – run the server (`node server.js`)
- `pnpm dev` – start server with **nodemon** for live reload
- `pnpm format` – run Prettier on the codebase
- `pnpm lint` – run ESLint for linting
- `pnpm lint:fix` – auto‑fix lint errors where possible

## Development

Edit `src/app.js` to add routes, middleware, or any other functionality. The config files:

- `.prettierrc` – Prettier formatting rules
- `.eslintrc.json` – ESLint rules with Prettier integration
- `.prettierignore` – files Prettier should ignore
- `.eslintignore` – files ESLint should ignore

Run the linter and formatter any time you modify code to keep a consistent style.

---
*Generated with [Claude Code](https://claude.com/claude-code)*
