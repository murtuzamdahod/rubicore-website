## Brief overview

These guidelines are for frontend development, focusing on UI consistency, component design, and performance optimization.

## UI Development

- Utilize Shadcn UI components (e.g., `Button`, `Card`) and Lucide Icons for building the user interface.
- Maintain UI uniformity by ensuring consistent use of colors, alignment, and spacing across all components.
- Ensure the UI is responsive. Utilize the `frontend-v2/hooks/use-mobile.tsx` hook when specific mobile/desktop logic is required.
- Use Tailwind CSS utility classes directly for styling.
- Wrap main section content within a `div` having `container mx-auto px-4 md:px-6` classes for consistent width and centering.
- Standard vertical padding for page sections is typically `py-16 md:py-24 lg:py-32`.
- Alternate section backgrounds using `bg-background` and `bg-muted/40` for visual separation.
- Use placeholders like `[Visual Placeholder: Description]` for missing visual assets initially.

## Component Design

- Create components that are lightweight and modular.
- Decompose complex UI elements into smaller, reusable components to enhance code clarity and maintainability.
- New pages should be composed of section-specific components located in a dedicated subdirectory within `src/components/sections/`, e.g., `src/components/sections/<page-name>/`.

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

## Development Workflow

- When creating new pages:
    1. Create the main page file (e.g., `src/app/<path>/page.tsx`).
    2. Create necessary section components (e.g., `src/components/sections/<page-name>/MySection.tsx`).
    3. Update the main page file to import and render the section components.
- Populate components with content, using placeholders where necessary (e.g., for visuals).
- Refine layout and styling based on visual feedback or requirements.

## File Naming Conventions

- Page route files: Always name `page.tsx`.
- Component files: Use PascalCase (e.g., `McpIntroductionSection.tsx`).
- Directory names: Use kebab-case (e.g., `mcp-integration`).
