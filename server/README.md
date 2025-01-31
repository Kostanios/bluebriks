
# Fastify Server

This is a Fastify server project set up with TypeScript. It provides a fast, reliable web framework for building APIs and services. This starter template includes common tools such as `tsc`, `nodemon`, and `jest` for building, testing, and running the server.

## Features

- Fastify framework for API development
- TypeScript support
- Jest for unit testing
- Prettier for code formatting
- Knex.js and PostgreSQL for database interaction

## Installation

1. Install dependencies:

    ```sh
    npm install
    ```

2. Set up environment variables:

   Create a `.env` file in the root of the project and define the following (u can use .env.example):

    ```env
    FASTIFY_ADDRESS=0.0.0.0
    FASTIFY_PORT=3006
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_HOST=postgres
    ```

   You can also use other environment variables depending on your app configuration.

## Available Scripts

The following npm scripts are available for development:

### `npm run watch`

Runs TypeScript in watch mode, which automatically recompiles code as you make changes.

### `npm run dev`

Starts the application in development mode using `nodemon` for automatic server reloads.

### `npm run format`

Formats all TypeScript files using Prettier.

### `npm run build`

Builds the application for production (compiles TypeScript into JavaScript).

### `npm run start`

Starts the application after building. Runs the compiled code from `dist/index.js`.

### `npm run dev-test`

Runs Jest in watch mode for continuous testing during development.
