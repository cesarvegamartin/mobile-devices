# Mobile devices

Used vite official template with React + TypeScript + ESLint.

This project is deployed on [mobile-devices.vercel.app](https://mobile-devices.vercel.app/)

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

## Architecture

It uses screaming architecture with domain driven design.

## Features and decisions

### Breadcrumbs and navigation

Breadcrumbs are automatically generated based on the routes. So the routes should be well structured.

Navigation is done with react router.

### Cache

It is configurable by env variable `VITE_CACHE_IN_HOURS` which is the number of hours to cache the data (in memory and in browser).

Only the number of products added in the cart is necessary to be stored in the browser cache. It is stored in a cookie with expiration time of `VITE_CACHE_IN_HOURS` hours.

### Product list

We cannot filter the products by search, so when search changes, I call the service but filtering in the frontend (to simulate the backend filtering).

### Shopping cart

I decided use tanstack reactivity to manage the cart count. It is stored in the browser cache and in memory.

The reason of that is to avoid context or any library to keep the app as simple as possible.

I decided use a cookie because it includes expiration itself and the size of the cookie is small. Also the security is not a problem because the cookie only stores the count.

The cart enpodint does not returns the count, so I increase the counter in the service. This simulates the regular backend service.

## Improvements and risks

- The cache is not persistent.
- The fetcher can be instanced only once.
- Included better ux: skeletons, empty states, etc.
- Initial loader when the backend sandbox is not ready.
- Show notifications for query error scenarios.
- Query filter can be improved to return more data.
- Environment is included in git for testing purposes. It is not a good practice and it is not necessary.