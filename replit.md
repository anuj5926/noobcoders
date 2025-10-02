# Noobcoders.io - Replit Project Documentation

## Overview
This is a professional portfolio and service website for Noobcoders.io, a new startup specializing in Unity game development, modern web applications, and AI-powered solutions.

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
   - Disabled HMR to prevent connection issues in Replit environment

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
The application runs automatically via the "Start application" workflow. The dev server starts on port 5000.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint the codebase

## Recent Changes (October 2, 2025)

### Website Content Update for New Startup
- Updated all sections to reflect a NEW startup positioning
- Removed testimonials section (replaced with Technology Stack)
- Updated Hero section messaging for fresh startup appeal
- Modified Services section to highlight Unity, Web, and AI capabilities
- Changed Projects section to "What We Can Build" showcasing capabilities
- Updated Credibility section to focus on innovation vs experience
- Removed Team section per user request
- Fixed filter buttons in capabilities section

### Vite HMR Configuration
- Disabled HMR to resolve connection issues in Replit proxy environment
- Fixed blinking/reconnection issues in preview

## Features
The website includes:
- Hero section with startup introduction
- Services section (Unity, Web, AI focus)
- Capabilities showcase ("What We Can Build")
- Credibility section
- Technology Stack showcase
- Contact form
- Responsive navigation
- Dark themed design

## Notes
- No backend component - this is a static frontend application
- No database required
- All dependencies are managed via npm
- The application uses React Router for client-side routing
- Website positioned for a NEW startup without past client testimonials
