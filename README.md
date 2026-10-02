# React Redux Counter (TypeScript)

A small React app that shows how Redux manages global state **without Redux Toolkit**. The store, actions and reducers are all written by hand, so every step of the Redux data flow is easy to see.

Built for the Week 5 Guided Learning Activity: Redux State Management.

## What this project demonstrates

- Creating a Redux store with middleware
- Writing action types, action creators and a reducer by hand
- Combining reducers with `combineReducers`
- Connecting Redux to React with `Provider`
- Reading state with `useSelector`
- Updating state with `useDispatch`
- Logging every state change with `redux-logger`
- Typing the store, state and actions with TypeScript

## Tech stack

| Tool | Purpose |
| --- | --- |
| React | UI library |
| TypeScript | Static typing |
| Vite | Dev server and build tool |
| Redux | Global state container |
| React-Redux | React bindings for Redux |
| Redux-Logger | Middleware that logs actions and state |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Tabitha2005/react-redux-app.git
cd react-redux-app
npm install
```

### Run the app

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Build for production

```bash
npm run build
```

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Type checks and creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
├── components/
│   ├── Counter.tsx            # Reads state and dispatches actions
│   └── Counter.module.css     # Scoped styles for the counter
├── store/
│   ├── actions/
│   │   └── counterActions.ts  # Action types and action creators
│   ├── reducers/
│   │   ├── counterReducer.ts  # Counter state logic
│   │   └── index.ts           # Root reducer (combineReducers)
│   └── store.ts               # Store setup, logger middleware, types
├── App.tsx
└── main.tsx                   # Wraps the app in the Redux Provider
```

## How it works

1. A button click in `Counter.tsx` calls `dispatch(increment())`.
2. The action `{ type: "INCREMENT" }` passes through the `redux-logger` middleware, which prints the previous state, the action and the next state in the browser console.
3. The root reducer sends the action to `counterReducer`, which returns a new state object.
4. `useSelector` sees the new value and React re-renders the component.

The state shape is:

```ts
{
  counter: {
    value: number
  }
}
```

## Features

- Increment the counter
- Decrement the counter
- Reset the counter to 0
- Every action is logged in the console

## Notes and lessons learned

A few things came up while building this with the latest versions of the tools:

- **Redux 5 reducer typing.** Reducers must accept `UnknownAction`, because `combineReducers` sends internal actions that a custom action type does not cover. Typing the reducer with only the counter actions caused the state type to break.
- **`createStore` is deprecated.** The activity uses it on purpose, since Redux Toolkit is not allowed here. `legacy_createStore` is the same function without the deprecation warning.
- **`redux-logger` import.** In Vite's dev server the default import returned a wrapper object and crashed with `middleware is not a function`. Using the named import `import { logger } from "redux-logger"` fixed it.
- **Type-only imports.** The Vite React TypeScript template enables `verbatimModuleSyntax`, so types such as `RootState` are imported with `import type`.

## Possible improvements

- Persist the counter in `localStorage` so it survives a page reload
- Add a `SET_VALUE` action with a number input
- Add a second reducer for user authentication
- Add unit tests for the reducer

## Author

**Tabitha2005**
GitHub: [@Tabitha2005](https://github.com/Tabitha2005)
