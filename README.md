# Bangsamoro Scholarship Portal (BSP)

This repository follows a monorepo structure as defined in the software architecture documentation.

## Project Structure

- `frontend/`: Next.js web application (currently Vite/React, planned to transition to Next.js).
- `backend/`: Django REST API (planned).
- `shared/`: Shared TypeScript types and utilities.
- `docs/`: Project documentation, including architecture and UI/UX specs.
- `scripts/`: Build and deployment scripts.
- `.github/`: GitHub Actions workflows.

## Getting Started

### Frontend

To run the frontend:
```bash
cd frontend
npm install
npm run dev
```

## Documentation

Comprehensive documentation is available in the `docs/` directory.
- `docs/architecture/Software-Architecture.md`: Detailed architecture overview.
- `docs/architecture/Software-Requirements.md`: Functional and non-functional requirements.
- `docs/UI-UX/Pages/`: UI/UX specifications per module.
