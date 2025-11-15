# LuxeGem AI & Development Rules

## Tech Stack Overview
- React 18 with TypeScript
- Vite as build and development tool
- Supabase for authentication, database, and backend functions
- Tailwind CSS for styling
- shadcn/ui for pre-built, customizable UI components
- React Router for navigation
- Zod for form validation
- React Query for data fetching and state management
- Radix UI primitives for unstyled, accessible components

## Library Usage Guidelines

### UI Components
- Always use shadcn/ui components for standard UI elements
- Prefer Radix UI primitives for complex, interactive components
- Customize components using Tailwind CSS classes
- Do not modify shadcn/ui component source files directly

### State Management
- Use React hooks for local component state
- Utilize React Query for server state and data fetching
- Implement global auth state using custom hooks
- Avoid prop drilling by using context when necessary

### Form Handling
- Use react-hook-form for form management
- Implement Zod schemas for form validation
- Handle form submissions with clear error messaging
- Use shadcn/ui form components for consistent styling

### Authentication
- Implement Supabase authentication
- Use custom `useAuth` hook for managing authentication state
- Protect routes that require authentication
- Implement role-based access control

### API & Data Fetching
- Use Supabase client for database operations
- Implement server-side functions for complex logic
- Use React Query for caching and managing server state
- Handle loading and error states consistently

### Styling
- Use Tailwind CSS utility classes
- Implement responsive design
- Use CSS variables for theme customization
- Avoid writing custom CSS when Tailwind can achieve the same result

### Performance
- Lazy load components and routes
- Use React.memo and useMemo for performance optimization
- Implement code splitting
- Minimize unnecessary re-renders

### Error Handling
- Use try/catch blocks for async operations
- Implement global error boundaries
- Use toast notifications for user feedback
- Log errors to console for debugging

### Accessibility
- Use Radix UI primitives which provide built-in accessibility
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers

## AI Integration Rules
- Use Lovable AI for image generation
- Implement robust error handling for AI calls
- Cache AI responses when possible
- Provide clear user feedback during AI processing
- Implement rate limiting and credit management for AI features

## Security Guidelines
- Never expose sensitive credentials in client-side code
- Use Supabase Row Level Security
- Implement proper authentication checks
- Sanitize and validate all user inputs
- Use environment variables for sensitive configuration

## Code Quality
- Follow TypeScript strict mode
- Use ESLint for code linting
- Write clear, concise comments
- Keep components small and focused
- Implement proper type definitions

## Deployment & Environment
- Use Supabase for hosting and backend services
- Implement different configurations for development and production
- Use environment-specific variables
- Implement continuous integration and deployment