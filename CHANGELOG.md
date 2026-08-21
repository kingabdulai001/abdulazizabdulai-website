# Changelog

All notable changes to this project are documented here.

## [Unreleased]
### Added
- Next.js frontend initialized (TypeScript, Tailwind CSS, App Router, src/ directory)
- Framer Motion installed for future animations
- Project initialized
- Folder structure established (frontend, backend, content, docs)
- Architecture and content strategy defined
- ### Added
- Backend folder with isolated Python virtual environment
- VS Code workspace settings for auto-environment activation
- ### Fixed
- Theme preference no longer resets to dark on page refresh (race condition between localStorage read/write)
- Suppressed expected hydration warning on <html> element caused by theme script running before React hydration
- 
- ### Added
- User model created (id, email, hashed_password, full_name, is_active, created_at, updated_at)
- Alembic configured to read database URL from environment settings and auto-detect SQLAlchemy models
- First database migration generated and applied, creating the `users` table in PostgreSQL
### Fixed
- Corrected placeholder password in .env that was blocking database authentication