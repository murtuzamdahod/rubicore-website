## Brief overview

These guidelines are for frontend development, focusing on UI consistency, component design, and performance optimization.

## UI Development

- Utilize Shadcn UI components (e.g., buttons, cards) for building the user interface.
- Maintain UI uniformity by ensuring consistent use of colors, alignment, and spacing across all components.
- Ensure the UI is responsive. Utilize the `frontend-v2/hooks/use-mobile.tsx` hook when specific mobile/desktop logic is required.

## Component Design

- Create components that are lightweight and modular.
- Decompose complex UI elements into smaller, reusable components to enhance code clarity and maintainability.

## Performance Optimization

- Employ `useCallback` and `useMemo` hooks where appropriate to optimize component rendering and prevent unnecessary re-renders.

## State Management

- Utilize Zustand for state management. Refer to the `frontend-v2/store` folder for existing implementations.
- Also create the state management solution when necessary, but ensure that it is consistent with the existing solution.

## Coding Best Practices

- Strive for clean and maintainable code by building modular components.
- Ensure that styles are applied consistently to achieve a uniform look and feel throughout the application.
- Create custom hooks and utility functions whenever it is required to make the code cleaner and more maintainable.
- Always ask the user for confirmation before implementing custom hooks or utility functions.
- Take care of all eslint errors and warnings.
