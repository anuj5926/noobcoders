# Noobcoders.io - Replit Project Documentation

## Overview
This is a professional portfolio and service website for Noobcoders.io, a development team specializing in scalable web, mobile, and AI solutions for startups and businesses.

## Project Architecture

### Technology Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Language**: TypeScript 5.5.3
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.11
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack Query 5.56.2
- **Form Handling**: React Hook Form 7.53.0

### Project Structure
```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main landing page
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Replit Environment Setup

### Configuration Changes Made
1. **Vite Configuration** (`vite.config.ts`):
   - Changed port from 8080 to 5000 (Replit standard)
   - Changed host from `::` to `0.0.0.0` for proper binding
   - Added `strictPort: true` to ensure port 5000 is used
   - Added HMR client port configuration
   - Added preview mode configuration for production builds

2. **Workflow Configuration**:
   - Created "Start application" workflow
   - Command: `npm run dev`
   - Port: 5000
   - Output type: webview

3. **Deployment Configuration**:
   - Target: autoscale (stateless web application)
   - Build command: `npm run build`
   - Run command: `npm run preview`

## Development

### Running the Application
The application runs automatically via the "Start application" workflow. The dev server starts on port 5000 with hot module replacement enabled.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint the codebase

## Recent Changes (October 1, 2025)

### Initial Replit Setup
- Configured Vite to work with Replit's proxy environment
- Set up proper port and host configuration
- Installed all dependencies
- Verified application runs without errors
- Configured deployment settings for production

## Features
The website includes:
- Hero section with company introduction
- Services section
- Projects portfolio
- Team information
- Testimonials
- Contact form
- Responsive navigation
- Dark themed design

## Notes
- No backend component - this is a static frontend application
- No database required
- All dependencies are managed via npm
- The application uses React Router for client-side routing
