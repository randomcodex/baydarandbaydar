# Project Structure & Organization

This document outlines the improved folder structure and separation of concerns for the Baydar & Baydar project.

## 📁 Folder Structure Overview

```
src/
├── components/          # Reusable business logic components
│   ├── Hero/           # Hero section component with background handling
│   └── index.ts        # Components barrel exports
├── ui/                 # Basic UI building blocks
│   ├── Button/         # Button component with variants
│   ├── Card/           # Card component system
│   ├── Container/      # Layout container component
│   ├── Footer/         # Footer layout component
│   ├── Grid/           # Grid system component
│   ├── Header/         # Header/Navigation component
│   ├── Layout/         # Layout components
│   ├── Logo/           # Logo component
│   ├── Section/        # Section wrapper component
│   └── index.ts        # UI barrel exports
├── pages/              # Page-level components
│   ├── Home/           # Home page (now simplified)
│   ├── 404/            # Not found page
│   └── index.ts        # Pages barrel exports
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles and utilities
├── types/              # TypeScript type definitions
├── animations/         # Framer Motion animations
├── constants/          # App constants
├── config/             # Configuration files
└── router/             # Routing configuration
```

## 🎯 Separation of Concerns

### `/components` - Business Logic Components
- **Purpose**: Reusable components with specific business logic
- **Contains**: Components that combine multiple UI elements with application-specific behavior
- **Example**: Hero component that handles background loading and content display
- **Characteristics**: 
  - Can make API calls
  - Handle complex state management
  - Combine multiple UI components
  - Domain-specific logic

### `/ui` - Basic UI Building Blocks
- **Purpose**: Primitive, reusable UI components
- **Contains**: Buttons, Cards, Layout components, Form elements, etc.
- **Characteristics**: 
  - No business logic
  - Highly reusable across the app
  - Consistent styling patterns
  - Accept props for customization
  - Well-documented TypeScript interfaces

### `/pages` - Page-Level Components
- **Purpose**: Top-level route components
- **Contains**: Components that represent entire pages
- **Characteristics**: 
  - Import and compose components and UI elements
  - Handle page-level concerns (metadata, analytics)
  - Keep minimal logic, delegate to components

## 📦 Available Components

### UI Components (`/ui`)

#### Layout Components
- **Container**: Responsive container with size variants
- **Section**: Section wrapper with background and padding options
- **Grid**: Flexible grid system with responsive behavior
- **Layout**: Main application layout structure

#### Basic Components
- **Button**: Button with variants (primary, secondary, outline, ghost, danger)
- **Card**: Card system with Header, Body, Footer sub-components
- **Logo**: Application logo component

#### Navigation
- **Header**: Navigation header component
- **Footer**: Application footer

### Business Components (`/components`)
- **Hero**: Hero section with background image handling, animations

## 📋 Component Guidelines

### UI Components (`/ui`)
- Should be generic and reusable across the entire application
- No business logic or API calls
- Accept props for customization
- Include comprehensive TypeScript interfaces
- Have consistent styling patterns using design tokens
- Follow accessibility best practices

### Business Components (`/components`)
- Can contain business logic and state management
- May handle data fetching or API interactions
- Compose multiple UI components
- Specific to application domain
- Should be reusable across different pages

### Page Components (`/pages`)
- Represent routes in the application
- Handle page-level concerns (metadata, analytics, SEO)
- Import and compose other components
- Keep minimal logic, delegate to components
- Focus on layout and content structure

## 🔄 Migration Summary

### What Changed:

1. **Created `/components` folder** - For business logic components
2. **Extracted Hero component** - From Home page to reusable component with proper props interface
3. **Added comprehensive UI components**:
   - Button with multiple variants and loading states
   - Card system with Header, Body, Footer
   - Container with size variants
   - Section with background and padding options
   - Grid system with responsive behavior
4. **Updated TypeScript configuration** - Added `@components/*` path mapping
5. **Improved Home page** - Now uses Hero component with clean prop interface
6. **Better barrel exports** - Organized exports by component type and functionality
7. **Fixed build issues** - Resolved TypeScript configuration and import errors

### Benefits:
- ✅ **Better separation of concerns** - Clear distinction between UI, business logic, and pages
- ✅ **More reusable components** - Components can be used across different pages
- ✅ **Cleaner page components** - Pages focus on composition rather than implementation
- ✅ **Easier testing and maintenance** - Smaller, focused components
- ✅ **Consistent component patterns** - Standardized prop interfaces and styling
- ✅ **Better TypeScript support** - Comprehensive type definitions
- ✅ **Improved developer experience** - Clear folder structure and imports
- ✅ **Scalable architecture** - Easy to add new components and features

## 🚀 Usage Examples

### Using Hero Component
```tsx
import { Hero } from '@components/Hero'

<Hero
  title="Your Title"
  subtitle="Your Subtitle"
  description="Your description"
  backgroundImage="/path/to/image.jpg"
  containerId="custom-hero-id"
/>
```

### Using UI Components
```tsx
import { Button, Card, CardBody, Container, Grid, GridItem } from '@ui'

<Container size="lg">
  <Grid columns={3} gap="lg" responsive>
    <GridItem>
      <Card variant="wine">
        <CardBody>
          <Button variant="primary" size="lg" fullWidth>
            Click me
          </Button>
        </CardBody>
      </Card>
    </GridItem>
  </Grid>
</Container>
```

### Creating Layout Sections
```tsx
import { Section, Container, Grid } from '@ui'

<Section background="gray" padding="xl">
  <Container>
    <Grid columns={2} gap="lg">
      {/* Content */}
    </Grid>
  </Container>
</Section>
```

## 📦 Import Paths

- `@components/*` - Business logic components
- `@ui/*` - Basic UI components  
- `@pages/*` - Page components
- `@hooks/*` - Custom hooks
- `@utils/*` - Utility functions
- `@styles/*` - Styles and SCSS
- `@types/*` - TypeScript types
- `@animations/*` - Framer Motion animations

## 🏗️ Component Development Guidelines

### When to create a UI component:
- You find yourself repeating similar JSX patterns
- The component has clear, reusable styling
- It represents a fundamental UI building block
- Multiple pages or components would benefit from it

### When to create a business component:
- The component combines multiple UI elements with specific business logic
- It handles data fetching or complex state management
- It's specific to your application domain but reusable across pages
- It encapsulates a complete feature or user interaction

### Component Props Best Practices:
- Use TypeScript interfaces for all props
- Provide sensible defaults
- Use union types for variant props
- Include optional className prop for extensibility
- Document complex props with JSDoc comments

## 🎨 Styling Guidelines

- Use SCSS modules or scoped SCSS files
- Follow BEM naming convention for CSS classes
- Use design tokens (CSS custom properties) for consistency
- Implement responsive design with mobile-first approach
- Include focus and accessibility states

This improved structure provides a solid foundation for scaling the Baydar & Baydar application with maintainable, reusable components.
