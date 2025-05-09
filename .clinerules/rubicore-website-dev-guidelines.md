## Brief overview
These guidelines are specific to the development of the RubiCore Next.js/React website. They cover content updates, component usage, error handling, and planned future enhancements based on the ongoing project.

## Project Context
- **Frameworks & Libraries:** Next.js, React, TypeScript, Tailwind CSS.
- **Content Source:** All website text content updates are derived from `rubicore_website_content_draft.md`.
- **Key UI Component:** `FeatureStatusBadge` (from `src/components/ui/feature-status-badge.tsx`) is used to display statuses like "Coming Soon", "Planned for 2025", "Roadmap", "Beta", "New".
  - When integrating this badge into text, ensure string literals in JSX are converted to JSX fragments (`<>...</>`) to correctly embed the component.
  - Example: `This feature is (<FeatureStatusBadge status="Coming Soon" />)`
- **Styling:** Uses Tailwind CSS. The `cn` utility from ` "@/lib/utils"` is available for conditional class names.
- **Icons:** Lucide React icons are used. Placeholder icons (e.g., `CheckCircle`) are acceptable initially, with the intent to replace them with more specific icons later.

## Development Workflow
- **Iterative Updates:** Website updates are performed page by page, and section by section within each page.
- **File Modification Process:**
  1. Read the target file using `read_file`.
  2. Compare its current content with the specifications in `rubicore_website_content_draft.md`.
  3. Use `replace_in_file` to apply targeted changes. For new sections or components, `write_to_file` may be used.
- **Error Resolution:**
  - Address TypeScript errors immediately after they are reported. This often involves:
    - Reading the definition of components involved in the error (e.g., `FeatureStatusBadge`).
    - Modifying component props or definitions if necessary to align with usage.
    - Correcting import statements.
- **Component Reusability:** Existing components (like section components) should be updated. New components should be created if a corresponding section does not exist.
- **Future Enhancements (MCPs):** Design improvements, logo/image/animation sourcing will involve using MCP tools like `@magicuidesign/mcp` and `@21st-dev/magic` at a later stage.

## Coding Conventions
- **JSX for Dynamic Text:** When embedding components like `FeatureStatusBadge` within text content in a component's data structure (e.g., an array of features), ensure the text is treated as JSX.
  - Example (in a `features` array): `(<>Feature X is <FeatureStatusBadge status="Coming Soon" /> and will be great.</>)`
- **Import Management:** Ensure all used components, including `FeatureStatusBadge`, are correctly imported in files where they are used.

## Handling "Coming Soon" / "Planned for 2025"
- Use the `FeatureStatusBadge` component.
- Ensure the `status` prop passed to `FeatureStatusBadge` is a valid type as defined in its interface. If new statuses like "Planned for 2025" are needed, update the `FeatureStatusBadgeProps` interface and the component's switch-case logic to support the new status and assign appropriate styling.
