# GenMoney - Financial Trading Platform

A financial trading platform UI built with Next.js 15 and Ant Design.

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Frontend library
- **TypeScript** - Type-safe JavaScript

### UI & Design
- **Ant Design** - Primary UI component library
- **Ant Design Charts** - Charting
- **Tailwind CSS** - Utility-first CSS framework

### Code Quality & Development
- **ESLint** - Code linting with custom rules
- **Prettier** - Code formatting
- **Husky** - Git hooks management
- **lint-staged** - Pre-commit code quality checks

## Features

### Custom pages
  - Homepage
  - The `stock and efts` page (Nothing there, please read the note at the bottom of the documentation)
  - The `Fixed Income` Page (Where the second design resides)
  - Custom 404 page

### Interactive Charts
- Multiple timeframe views (1D, 1W, 1M, 3M, 6M, 1Y, 5Y, ALL)
- Custom tooltips with price and timestamp
- Area charts with gradient fills

### Responsive Design
- Mobile-first approach
- Collapsible navigation menu
- Horizontal scrolling filter buttons

```bash

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

```
### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Odelola/genmoney.git
cd genmoney
```

2. **Install dependencies**
```bash
pnpm i
```

3. **Start development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint with auto-fix
pnpm lint:check   # Check linting without fixing
pnpm type-check   # Run TypeScript type checking
```

## Configuration

### Next.js Configuration (Custom)

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'antd/lib': 'antd/es'
    }
    return config
  },
  transpilePackages: ['antd']
}


export default nextConfig;
```

This was modified to support antdesign in NextJS 15 as NextJS 15 uses React 19 and there are issues with AntDesign 5 and React 19. https://u.ant.design/v5-for-19  

### ESLint Rules

Key linting rules enforced:
- No console.log statements in production
- Unused imports detection
- TypeScript strict type checking
- Consistent code formatting

### Responsive Breakpoints

```javascript
// Tailwind breakpoints used
sm: '640px',   // Small devices
md: '768px',   // Medium devices  
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
```

## Code Quality

### Pre-commit Hooks

Automated checks before each commit:
- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking
- **Unused Imports**: Removes unused dependencies
- **Console Detection**: Prevents console.log() in production

### Code Standards

- I used TypeScript for all new components
- I followed majority of Ant Design design patterns by customizing their components for the entire app
- Implemented mobile-first responsive design
- Wrote descriptive component props interfaces
- Used Tailwind utilities and pure css for custom styling


### Deployment Platform Used
**Vercel**

## Figma Design
https://www.figma.com/design/XkfPXJQ0R3stnZLWQ35iZh/Untitled

## Please note...
- **that you need to click the second link (Fixed Income) in the navbar to see the second design.** 
- **Just to satisfy the design when you are on the homepage the first link in the navbar is active and it is also active when you navigate to its own page**
- **I had to take little decision for some part of the design due to feasibility (not trying to go against the design :) )** 

## Support/Questions

For any question please contact me by mail at hello.odelola@gmail.com

## Thank you!!!
