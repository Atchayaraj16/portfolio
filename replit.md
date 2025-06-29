# Portfolio Application - Modern Web Development Stack

## Overview

This is a modern full-stack web application built as a personal portfolio website for Atchaya Raj. The application showcases a professional portfolio with interactive features, built using React.js on the frontend and Express.js on the backend, with PostgreSQL as the database layer.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Build System**: ESBuild for server bundling

### Development Tools
- **Package Manager**: npm with lockfile version 3
- **TypeScript Configuration**: Strict mode with modern ES modules
- **Database Migrations**: Drizzle Kit for schema management
- **Development Server**: tsx for TypeScript execution in development

## Key Components

### Frontend Components
1. **Portfolio Page** (`client/src/pages/portfolio.tsx`)
   - Main portfolio showcase with sections for hero, about, skills, projects, and contact
   - Interactive animations and scroll effects
   - Mobile-responsive design with hamburger menu
   - Loading screen and back-to-top functionality

2. **UI Component Library** (`client/src/components/ui/`)
   - Comprehensive set of reusable components (buttons, cards, forms, dialogs, etc.)
   - Built on Radix UI primitives for accessibility
   - Consistent styling with Tailwind CSS and CSS variables

3. **Utility Functions** (`client/src/lib/`)
   - Query client configuration for API requests
   - Utility functions for class name management
   - Toast notification system

### Backend Components
1. **Server Setup** (`server/index.ts`)
   - Express server with middleware for JSON parsing and logging
   - Error handling middleware
   - Development/production environment handling

2. **Route Management** (`server/routes.ts`)
   - Centralized route registration
   - HTTP server creation and configuration

3. **Data Storage** (`server/storage.ts`)
   - Abstract storage interface for CRUD operations
   - In-memory storage implementation for development
   - User management functionality

### Database Schema
- **Users Table** (`shared/schema.ts`)
  - Basic user model with id, username, and password fields
  - Zod schema validation for type safety
  - Drizzle ORM integration for PostgreSQL

## Data Flow

1. **Client-Server Communication**
   - RESTful API architecture with `/api` prefix for all backend routes
   - JSON-based request/response format
   - Credential-based authentication for session management

2. **Database Operations**
   - Drizzle ORM provides type-safe database queries
   - Schema-first approach with automatic TypeScript types
   - Migration system for database version control

3. **State Management**
   - React Query handles server state caching and synchronization
   - Form state managed by React Hook Form
   - Local component state for UI interactions

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Class Variance Authority**: Component variant management

### Data and Forms
- **React Hook Form**: Performant form library
- **Zod**: Schema validation library
- **TanStack React Query**: Server state management
- **Date-fns**: Date manipulation utilities

### Development
- **Vite**: Fast build tool with HMR
- **Replit Plugins**: Development environment integration
- **ESBuild**: Fast JavaScript bundler for production

### Database and Backend
- **Neon Database**: Serverless PostgreSQL
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Express Session**: Session management middleware

## Deployment Strategy

### Development Environment
- **Hot Module Replacement**: Vite provides instant updates during development
- **TypeScript Compilation**: Real-time type checking and compilation
- **Database**: Local development with environment variable configuration

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Hosting**: Configured for Node.js deployment with static file serving

### Build Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

## Changelog
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.