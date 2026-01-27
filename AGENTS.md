# AGENTS.md

This document provides essential information for agentic coding agents working on this BabyLog AI project.

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Note:** This project currently has no test or lint configurations. Testing should be set up before adding new features.

## Tech Stack

- **Frontend:** React 19.2.3 with TypeScript 5.8
- **Build Tool:** Vite 6.2
- **Styling:** Tailwind CSS (via CDN)
- **Backend:** Supabase (PostgreSQL)
- **Authentication:** bcryptjs for password hashing
- **Icons:** Google Material Symbols

## Code Style Guidelines

### TypeScript Configuration

- Target: ES2022, Module resolution: bundler mode, JSX: react-jsx
- Path alias: `@/*` maps to root directory
- Allow importing `.ts` extensions directly

### Import Patterns

```typescript
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { TEXTS } from '@/constants';
import { Language, ViewState } from '@/types';
import { supabase } from '@/supabaseClient';
```

- Group external libraries first, then local imports
- Use named exports by default, default exports for main App component

### Naming Conventions

- **Components:** PascalCase (e.g., `HomeView`, `AddLayout`, `Icon`)
- **Functions/Variables:** camelCase (e.g., `handleSave`, `filteredFeedings`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `TEXTS`, `INITIAL_DATA`)
- **Types/Interfaces:** PascalCase (e.g., `Feeding`, `Diaper`, `ViewState`)
- **Booleans:** Prefix with `is`, `has`, `show`, `can` (e.g., `isLoading`, `hasData`)

### Formatting

- **Indentation:** 2 spaces (no tabs), **Semicolons:** Required
- **Quotes:** Single quotes for strings, double quotes for JSX attributes
- **Line length:** Prefer under 100 characters
- **Trailing commas:** Required in multi-line objects/arrays

### Type Definitions

- Define shared types in `types.ts`
- Use interfaces for object shapes, type aliases for unions
- Database entity types should match SQL schema

### React Patterns

- Use functional components exclusively with hooks
- Use `useMemo` for expensive computations, `useEffect` for side effects
- Implement proper cleanup in useEffect return functions
- Use Context API for global state (language, auth)

### API Route Patterns

```typescript
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### Error Handling

- Validate required parameters in API routes
- Use proper HTTP status codes (400, 401, 404, 405, 500)
- Return errors as `{ error: 'Description' }`
- Use try-catch for async operations

### Styling with Tailwind CSS

- Use utility classes consistently
- Create reusable components (Icon, Modal, FAB)
- Use semantic color tokens: `primary`, `background-light`
- Apply transitions: `transition-all`, `transition-transform`

### Database Operations

- Use Supabase client for all queries with error handling
- Use `.eq()` for filtering, `.order()` for sorting, `.select()` for column selection
- Implement CASCADE deletes for related records

### Security

- Hash passwords with bcryptjs (10 salt rounds)
- Store only password hashes, implement security questions for password reset
- Use localStorage for token-based session management
- Validate all user inputs, never expose secrets in client-side code

### Internationalization (i18n)

- Translation strings in `constants.ts` as `TEXTS` object
- Two languages: English (`en`) and Chinese (`zh`)
- Use `useLanguage()` hook for language access

### Component Best Practices

- Keep components focused and single-purpose
- Use prop interfaces for type safety
- Implement proper loading states
- Add confirmation dialogs for destructive actions

### Performance

- Use `useMemo` for expensive computations
- Implement proper key props in lists
- Avoid unnecessary re-renders with proper dependency arrays

## Testing Guidelines

No test framework configured. When adding tests: Set up Vitest or Jest, add React Testing Library, mock Supabase, aim for high coverage.

## Common Patterns

**Authentication:** Register → bcrypt hash → store in `users` table; Login → verify credentials → create token → localStorage.

**Data Fetching:** Fetch in `useEffect` on mount → state (isLoading, data, error) → show loading/error → render data.

**CRUD:** GET (fetch all), POST (create), PUT (update), DELETE (remove) - all scoped by `baby_id`.
