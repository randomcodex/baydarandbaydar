# Baydar & Baydar Project

## Project Structure & Organization

This project follows a structured approach for organization. GitHub Copilot should use this guide when suggesting file placements and code organization.

### Root Directory Structure
```
baydarandbaydar/
├── src/                    # Source code files
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page-level components
│   ├── utils/             # Utility functions and helpers
│   ├── services/          # API services and external integrations
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React context providers
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files
│   └── fonts/             # Font files
├── styles/                # Global styles and CSS
│   ├── globals.css        # Global CSS styles
│   ├── components/        # Component-specific styles
│   └── themes/            # Theme configurations
├── tests/                 # Test files
│   ├── __tests__/         # Jest test files
│   ├── __mocks__/         # Mock files for testing
│   └── utils/             # Test utilities
├── docs/                  # Documentation files
├── config/                # Configuration files
└── scripts/               # Build and deployment scripts
```

### File Naming Conventions

#### Components
- **React Components**: PascalCase (e.g., `UserProfile.tsx`, `NavigationBar.jsx`)
- **Component Styles**: Match component name (e.g., `UserProfile.module.css`)
- **Component Tests**: `ComponentName.test.tsx`

#### Pages
- **Page Components**: PascalCase (e.g., `HomePage.tsx`, `AboutPage.tsx`)
- **Page Styles**: Match page name (e.g., `HomePage.module.css`)

#### Utilities
- **Utility Functions**: camelCase (e.g., `formatDate.ts`, `apiHelpers.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

#### Services
- **API Services**: camelCase with Service suffix (e.g., `userService.ts`, `authService.ts`)

### Code Organization Rules for Copilot

1. **Component Placement**:
   - React components go in `src/components/`
   - Page-level components go in `src/pages/`
   - Each component should have its own folder if it includes multiple files

2. **Style Placement**:
   - Global styles in `styles/globals.css`
   - Component-specific styles in `styles/components/`
   - Use CSS modules for component styling

3. **Utility Placement**:
   - Helper functions in `src/utils/`
   - API-related utilities in `src/services/`
   - Custom hooks in `src/hooks/`

4. **Type Definitions**:
   - All TypeScript types in `src/types/`
   - Interface files named with `.types.ts` suffix

5. **Test Placement**:
   - Test files adjacent to source files or in `tests/__tests__/`
   - Mock data in `tests/__mocks__/`

### Import Path Conventions

Use these import patterns:
```typescript
import { UserProfile } from '@/components/UserProfile'


import { HomePage } from '@/pages/HomePage'


import { formatDate } from '@/utils/formatDate'


import { userService } from '@/services/userService'


import type { User } from '@/types/user.types'
```

### Technology Stack

- **Frontend**: React, TypeScript, Next.js
- **Styling**: CSS Modules, Tailwind CSS
- **Testing**: Jest, React Testing Library
- **Build Tool**: Vite/Webpack
- **Package Manager**: npm/yarn

### Development Guidelines

When GitHub Copilot suggests new files or code:
1. Follow the established folder structure
2. Use appropriate naming conventions
3. Place files in their designated directories
4. Maintain consistency with existing patterns
5. Include proper imports using the established path conventions

This structure ensures maintainable, scalable code organization that Copilot can understand and