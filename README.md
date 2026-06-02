# Mobile devices

Used vite official template with React + TypeScript + ESLint.

## Setup project

### Requirements

- Node.js 22.x or higher
- pnpm 10.x or higher

### Installation

1. Clone the repository
2. Run `pnpm install` to install the dependencies
3. Run `pnpm start` to start the development server

### Building

Run `pnpm build` to build the project for production.
You can test the production build by running `pnpm preview`.

### Linting

Run `pnpm lint` to lint the code.

## Modifications in the original template

### Biome Lint

Replaced eslint with biome lint. Because biome is easy to configure and have enabled a lot of capabilities by default.

### Ui library

Used mantine for the ui library.

### React query

Used react query for the data fetching.