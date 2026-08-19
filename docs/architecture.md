# Architecture

## System Overview
Three independent systems communicating over HTTP:
- Frontend (Next.js) — Vercel
- Backend (FastAPI) — Render
- Database (PostgreSQL) — Supabase

## Repository Strategy
Monorepo: frontend/ and backend/ in one GitHub repo, deployed separately.

## Content Strategy
content/ folder holds Markdown + JSON for blog posts, projects, and resources,
allowing content updates without code changes.

## Environment Variables
Each app has its own .env file, excluded from Git via .gitignore.
.env.example files document required variables without exposing secrets.