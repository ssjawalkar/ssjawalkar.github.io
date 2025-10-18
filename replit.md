# Portfolio Website - Samihan Jawalkar

## Overview
This is a portfolio website for Samihan Jawalkar, a Software Engineer & DevOps Architect. The site showcases professional information, projects, skills, and contact details.

## Project Status
Successfully migrated from Lovable to Replit fullstack environment on October 18, 2025.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Express.js (minimal backend for serving the application)
- **Routing**: React Router (wouter for future enhancements)
- **Build Tool**: Vite

## Project Structure
```
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/   # UI components (Hero, About, Projects, etc.)
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities
│   │   └── hooks/        # Custom React hooks
│   ├── public/           # Static assets
│   └── index.html        # Entry HTML file
├── server/               # Backend server
│   ├── index.ts          # Express server entry point
│   ├── routes.ts         # API routes (minimal for now)
│   ├── storage.ts        # Storage interface (not used yet)
│   └── vite.ts           # Vite development server setup
├── shared/               # Shared types between frontend and backend
└── db/                   # Database files (not used yet)
```

## Key Components
- **Hero**: Introduction and main call-to-action
- **About**: Professional background and bio
- **Projects**: Showcase of work
- **Skills**: Technical competencies
- **Experience**: Work history
- **Contact**: Contact form and information
- **Footer**: Site footer with links

## Development
The project runs on port 5000 with hot module reloading enabled.

### Commands
- `npm run dev` - Start development server (Express + Vite)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Migration Notes
- Converted from Lovable (frontend-only) to Replit fullstack structure
- Added Express server to serve the application
- Maintained all existing UI components and functionality
- Updated configuration files for fullstack development
- All dependencies installed and working correctly

## Recent Changes
**October 18, 2025**
- Migrated project structure from Lovable to Replit
- Created server infrastructure with Express
- Updated Vite configuration for fullstack development
- Configured TypeScript for client and server separation
- Fixed CSS rendering issues:
  - Removed conflicting App.css styles that were limiting layout
  - Updated Tailwind config to scan correct client/ directory
  - Added `allowedHosts: true` to Vite config for Replit preview compatibility
- Verified application is running correctly with full styling
