# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
React SPA for a dog waste removal service ("Poo Patrol") deployed on AWS Amplify. Built with React 18, TypeScript, Vite, and Chakra UI.

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture & Structure

### Tech Stack
- **Frontend**: React 18.2 + TypeScript
- **Build**: Vite 4.1
- **UI**: Chakra UI 2.10 with custom theming
- **Routing**: React Router DOM 6.26 with lazy loading
- **API**: Axios with AWS Lambda backend
- **Forms**: EmailJS integration
- **Payments**: PayPal React integration

### Project Structure
```
src/
├── components/      # All React components and pages
│   ├── theme.ts    # Chakra UI theme configuration
│   └── api.ts      # API service layer with Axios
├── assets/         # Images and static assets
├── types/          # TypeScript interfaces
└── main.tsx        # Application entry point
```

### Key Patterns
1. **Lazy Loading**: All route components use React.lazy() for code splitting
2. **API Service**: Centralized in `src/components/api.ts` with JWT auth and error handling
3. **Theme System**: Custom Chakra UI theme in `src/components/theme.ts`
4. **Type Safety**: TypeScript interfaces in `src/types/`

## API Configuration
- **Base URL**: `https://yoix1ne7w2.execute-api.me-south-1.amazonaws.com/dev`
- **Auth**: JWT tokens stored in localStorage
- **Error Handling**: Axios interceptors handle auth and errors

## Important Notes
- **No Testing**: No test framework configured - add tests manually if needed
- **Deployment**: AWS Amplify (see `amplify.yml`)
- **Environment**: No .env files - API URLs are hardcoded
- **Analytics**: Google Analytics 4 integrated in index.html