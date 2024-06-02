# Ubiquiti Assignment

### A few notes to the reviewers

This project is a React application built with TypeScript and Vite. It uses the `@vitejs/plugin-react` for Fast Refresh and `vite-plugin-svgr` for handling SVGs. The project is set up with ESLint for linting and Prettier for code formatting. The project uses a combination of `vitest` and `react-testing-library` for testing.
It uses a pre-commit hook with Husky to run type checks, linting, formatting and testing committing. The same jobs in the same order are run on the CI pipeline using Github Actions. When a new release is created, the app will deploy to Github Pages which is a separate workflow. 

#### What can be done to further improve the project:
- Add more tests to increase the coverage over the components
- Add more support for accessibility (I didn't prioritize this because the app is supposed to be used as an internal tool)
- Add some more animations to make the app more interactive

## Installation

To install the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/maroparo/ubiquiti.git
```

2. Navigate into the project directory:

```bash
cd ubiquiti
```

3. Install the dependencies:
```shell
yarn install
```

## Usage

To run the project in development mode, use the following command:
```shell
yarn run dev
```

## Running Tests:

To run the tests in watch mode, use the following command:
```shell
yarn run test
```

To run the tests in CI mode, use the following command:
```shell
yarn run test:ci
```
