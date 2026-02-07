# Guest App Template (Vercel + Neon + Drizzle)

Production-oriented starter template for guest-facing application projects.

## Stack

- Next.js App Router + TypeScript
- Drizzle ORM + Neon serverless Postgres
- Auth.js starter (GitHub provider)
- Tailwind CSS
- Vitest + Playwright
- GitHub Actions CI + deploy

## Included Baseline

- Auth route scaffold (`/api/auth/*`)
- Health endpoint (`/api/health`)
- Tenant-aware schema: `users`, `tenants`, `memberships`, `audit_logs`
- Role utility (`owner/admin/member/viewer`)
- Migration and seed scripts
- CI checks and Vercel deployment workflow

## Quick Start

```bash
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Open: `http://localhost:3000`

## Required Environment Variables

Local runtime:
- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXT_PUBLIC_APP_URL`

Optional auth provider:
- `AUTH_GITHUB_ID`
- `AUTH_GITHUB_SECRET`

GitHub Actions deploy secrets:
- `DATABASE_URL`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `N8N_DEPLOY_CALLBACK_URL`
- `N8N_DEPLOY_CALLBACK_TOKEN`

## Scripts

- `npm run dev`
- `npm run check`
- `npm run db:migrate`
- `npm run db:seed`
- `npm run test:e2e`

## Ready to Push to GitHub

```bash
git init
git add .
git commit -m "Bootstrap guest app template with Drizzle and Vercel deployment"
gh repo create <owner>/guest-app-template --private --source . --remote origin --push
```

## Notes

- This template defaults to JWT sessions.
- If you need database-backed Auth.js sessions, add Drizzle adapter tables and wiring.
- For strict multi-tenant isolation, keep all domain tables scoped by `tenant_id`.
