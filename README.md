# GitHub Repositories - Trending Repos

A modern, responsive React application that displays the most starred GitHub repositories created in the last 10 days. Built with React 19, TypeScript, and SCSS, following enterprise-level best practices and design patterns.

## 🚀 Features

- **Repository Listing**: Displays trending GitHub repositories sorted by stars
- **Detailed Modal View**: Click any repository to view comprehensive details including:
  - Repository description and statistics (stars, forks, watchers, issues)
  - Repository metadata (language, branch, size, license, dates)
  - Topics/tags
  - Direct link to GitHub
- **Pagination**: Load more repositories with infinite scroll support
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Loading States**: Smooth loading indicators
- **Responsive Design**: Mobile-first design that adapts to all screen sizes
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Multi-Environment Support**: Configured for dev, SIT, preprod, and production environments

## 🛠️ Tech Stack

- **React 19.2.0** - Latest stable version with modern features
- **TypeScript 5.3+** - Strict type checking for type safety
- **SCSS/Sass** - Advanced styling with variables, mixins, and nesting
- **Vite 5.0** - Fast build tool and development server
- **GitHub API** - RESTful API for fetching repository data

## 📁 Project Structure

```
src/
├── components/              # Feature-specific components
│   ├── BottomNavigation/   # Bottom navigation bar
│   ├── ErrorBoundary/      # Error boundary component
│   ├── ErrorMessage/       # Error message display
│   ├── LoadingSpinner/     # Loading indicator
│   ├── RepositoryItem/      # Repository list item
│   ├── RepositoryModal/    # Repository detail modal
│   │   ├── ModalHeader/    # Modal header component
│   │   ├── ModalStats/     # Statistics display
│   │   ├── ModalDetails/   # Repository details
│   │   ├── ModalTopics/    # Topics/tags display
│   │   └── ModalFooter/    # Modal footer with GitHub link
│   └── index.ts            # Component barrel exports
├── shared/                 # Shared/reusable components
│   └── components/
│       └── Button/          # Reusable button component
├── features/               # Feature modules
│   └── repositories/
│       └── RepositoriesList/  # Main feature component
├── hooks/                  # Custom React hooks
│   └── useGitHubRepos.ts   # Repository fetching hook
├── service/                # API services
│   └── github.service.ts   # GitHub API service
├── utils/                  # Utility functions
│   └── date.util.ts        # Date formatting utilities
├── config/                 # Configuration
│   └── env.ts              # Environment configuration
├── types/                  # TypeScript type definitions
│   └── index.ts            # Type exports
├── styles/                 # Global styles
│   ├── _variables.scss     # SCSS variables
│   ├── _mixins.scss        # SCSS mixins
│   └── _animations.scss    # Keyframe animations
├── main.tsx                # Application entry point
└── index.scss              # Global styles entry
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "React Mobile"
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy environment file for your target environment
# Available: .env.dev, .env.sit, .env.preprod, .env.prod
```

### Environment Variables

Create environment-specific files in the root directory:

- `.env.dev` - Development environment
- `.env.sit` - System Integration Testing environment
- `.env.preprod` - Pre-production environment
- `.env.prod` - Production environment

**Required Variables:**
```env
VITE_GITHUB_API_BASE_URL=https://api.github.com/search/repositories
VITE_DAYS_AGO=10
VITE_ITEMS_PER_PAGE=30
VITE_APP_NAME=GitHub Repos
```

**Note:** All environment variables must be prefixed with `VITE_` to be exposed to the client.

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start dev server (uses .env.dev)
npm run dev:sit      # Start with SIT environment
npm run dev:preprod  # Start with preprod environment
```

### Build
```bash
npm run build        # Production build (uses .env.prod)
npm run build:dev    # Development build
npm run build:sit    # SIT build
npm run build:preprod # Pre-production build
npm run build:prod   # Production build (same as build)
```

### Other
```bash
npm run preview      # Preview production build locally
```

## 🏗️ Architecture & Design Patterns

### Component Organization
- **Feature-based**: Components organized by feature in `features/` directory
- **Component folders**: Each component in its own folder with `index.ts` export
- **Shared components**: Reusable components in `shared/components/`
- **Composition**: Large components broken into smaller sub-components

### Code Quality Practices

- **Strict TypeScript**: Full type safety with strict configuration
- **Custom Hooks**: Business logic encapsulated in reusable hooks
- **Service Layer**: API calls separated into service files
- **Error Boundaries**: React error boundaries for error handling
- **Path Aliases**: Clean imports using `@components`, `@features`, `@hooks`, etc.
- **SCSS Modules**: Organized styles with variables and mixins
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Design Patterns

- **Custom Hooks Pattern**: `useGitHubRepos` for state management
- **Service Pattern**: `github.service.ts` for API abstraction
- **Component Composition**: Modal broken into smaller components
- **Error Boundary Pattern**: Class component for error catching
- **Environment Configuration**: Centralized env management

## 🎨 Styling

The project uses SCSS with:
- **Variables**: Centralized colors, spacing, typography
- **Mixins**: Reusable style patterns (buttons, flexbox, responsive)
- **Nested Selectors**: Better organization and readability
- **Mobile-first**: Responsive design starting from mobile

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured for clean imports
- Full type coverage

### Vite
- React plugin configured
- Path aliases for runtime resolution
- Environment variable support

### Path Aliases
```typescript
@components/*  → src/components/*
@features/*    → src/features/*
@hooks/*       → src/hooks/*
@utils/*       → src/utils/*
@service/*     → src/service/*
@config/*      → src/config/*
@types         → src/types
@shared/*      → src/shared/*
@styles/*      → src/styles/*
```

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Bottom Navigation**: Fixed bottom navigation for mobile
- **Sticky Header**: Header stays visible while scrolling
- **Adaptive Layout**: Desktop layout with constrained width
- **Touch-friendly**: Large touch targets and smooth scrolling

## ♿ Accessibility

- ARIA labels and roles
- Semantic HTML elements
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 🚀 Performance

- Lazy loading images
- Optimized re-renders with React hooks
- Efficient pagination
- Minimal bundle size

## 📝 Code Quality

- **TypeScript Strict Mode**: Full type safety
- **Component-based Architecture**: Modular and reusable
- **Separation of Concerns**: Clear boundaries between layers
- **Error Handling**: Comprehensive error boundaries
- **Code Organization**: Feature-based folder structure

## 🔐 Environment Management

The project supports multiple environments:
- **Development** (`dev`): Local development
- **SIT** (`sit`): System Integration Testing
- **Pre-Production** (`preprod`): Pre-production testing
- **Production** (`prod`): Production deployment

Each environment has its own `.env` file with specific configurations.

## 📦 Build Output

The build process generates optimized production files in the `dist/` directory:
- Minified JavaScript
- Optimized CSS
- Asset optimization
- Code splitting

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript with strict typing
3. Follow component folder structure with `index.ts` exports
4. Use path aliases for imports
5. Write self-documenting code with clear naming

## 📄 License

This project is part of an assessment.

## 👤 Author

Built as part of a React development assessment.

---

**Built with ❤️ using React 19, TypeScript, and modern web technologies**

