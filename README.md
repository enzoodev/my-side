# MySide

This is the repository of a technical test for a position as a frontend software engineer at MySide.

## 🚀 Live Demo

Access the live application: [my-side-test.vercel.app/](https://my-side-test.vercel.app/)

## 🛠️ Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that adds static typing to the code.
- **TanStack Query**: Library for managing asynchronous states.
- **Redux**: State management library for handling complex state and side effects.
- **Styled-Components**: Library for styling components using tagged template literals.
- **Jest**: Testing framework for running and organizing unit and integration tests.
- **React Testing Library**: Utility for testing React components with a focus on user interactions.
- **ESLint**: Tool for static code analysis to help maintain good practices.
- **Prettier**: Code formatting tool.

## ⚙️ Features

- **Products Management**: View and filter products. fetch products by page and category dynamically and see product details.
- **Shopping Cart Management**: Add, remove, and update products in the shopping cart. Persistent cart state with Redux, ensuring that cart changes are reflected across the application and maintained across sessions.
- **State Management**: Using TanStack Query for requests and caching, and Redux for managing complex application state and side effects.
- **Responsiveness**: Interface optimized for different screen sizes.
- **Custom Design**: Styling with Styled-Components for a modern and consistent UI.
- **Testing**: Comprehensive testing using Jest and React Testing Library to ensure functionality and reliability.


## 📦 Project Structure

```bash
src/
├── __tests__/           # Global unit tests for all modules of project
├── @types/              # Global types for libs
├── components/          # Reusable components
│   ├── elements/        # Generic components used throughout the application
│   └── modules/         # Module-specific components
├── domain/              # Domain logic and entities
│   ├── api/             # API data and request types, organized by module
│   └── entities/        # Data entities used throughout the application
├── enums/               # Enums used in the project
├── hooks/               # Custom hooks, organized by module, isolating business logic
├── pages/               # Application pages
├── query/               # API request functions, organized by module
├── services/            # Services and business logic
├── store/               # Store management with redux
├── styles/              # Style files (CSS)
└── utils/               # Utility functions
```

## 📚 Documentation

### Installation

To run the project locally, follow the steps below:

1. Clone the project:

```bash
git clone https://github.com/enzoodev/my-side.git
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

### Deployment

The deployment is handled using [Vercel](https://vercel.com/), ensuring continuous integration and automated delivery. Any changes to the main branch automatically trigger a new build and deployment.
