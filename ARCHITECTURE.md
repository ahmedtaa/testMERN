# MERN Boilerplate Architecture

This document provides a detailed overview of the architecture for this MERN (MongoDB, Express.js, React, Node.js) stack boilerplate.

## High-Level Overview

The project is structured as a monorepo with two primary directories: `client` and `server`. This separation provides a clean and scalable foundation for building a full-stack web application.

- **`client/`**: A modern React frontend built with Vite and written in TypeScript. It handles the user interface and all user interactions.
- **`server/`**: A Node.js backend powered by the Express.js framework, also written in TypeScript. It manages the application's business logic, API endpoints, and database interactions.
- **Monorepo**: Both the frontend and backend code reside in the same repository, which simplifies development, dependency management, and deployment.

## Frontend (`client`) Architecture

- **Framework**: React with Vite for a fast and efficient development experience.
- **Language**: TypeScript (`.tsx` files) for type safety and improved developer experience.
- **Routing**: TanStack Router is used for type-safe, file-based routing, as seen in the `client/src/routes` directory.
- **Styling**: Tailwind CSS is used for utility-first styling, configured in `tailwind.config.js`. The project also utilizes `shadcn/ui` for a set of pre-built, accessible UI components.
- **API Communication**: `axios` is configured in `client/src/api` to make HTTP requests to the backend API.
- **State Management**: A Zustand store (`client/src/store/auth.store.ts`) is used for managing global application state, such as user authentication status.
- **Schema Validation**: Zod (`client/src/schemas`) is used for validating form data on the client-side before submission.

## Backend (`server`) Architecture

- **Framework**: Express.js running on the Node.js runtime.
- **Language**: TypeScript (`.ts` files), which are compiled to JavaScript in the `build/` directory for production execution.
- **Database**: Designed for MongoDB. Mongoose (`server/src/models/user.model.ts`) is used as the Object Data Modeling (ODM) library to define data schemas and interact with the database.
- **API Structure**: A standard and scalable RESTful API structure is followed:
  - **Routes (`server/src/routes`)**: Define the API endpoints (e.g., `/api/auth`, `/api/users`).
  - **Controllers (`server/src/controllers`)**: Contain the core logic to handle incoming requests and formulate responses.
  - **Services (`server/src/services`)**: Encapsulate the business logic that interacts with the database models, separating database operations from the controller layer.
- **Authentication**: JSON Web Tokens (JWT) are implemented for securing API endpoints. Key files include `server/src/libs/jwt.ts` for token generation and `server/src/middlewares/auth.middleware.ts` for protecting routes.
- **Configuration**: Environment variables are managed in `server/src/config/environtments.ts` to handle different settings for development, testing, and production environments.

## Tooling and DevOps

- **Linting & Formatting**: ESLint and Prettier are configured to enforce a consistent code style and catch potential errors early.
- **Git Hooks**: Husky (`/.husky`) is used to automatically run scripts (like linters and tests) before commits are made, ensuring code quality and repository health.
- **Deployment**: The presence of `vercel.json` files in both `client` and `server` directories indicates that the project is pre-configured for seamless deployment on the Vercel platform.
