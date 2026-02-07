import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 md:px-10">
        <header className="mb-14 flex items-center justify-between">
          <p className="text-sm font-medium tracking-wide text-slate-300">Guest App Template</p>
          <Link
            href="/api/health"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
          >
            Health
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Ship guest apps faster</h1>
            <p className="mt-4 text-slate-300">
              This template includes auth scaffolding, tenant-ready schema, CI/CD defaults, and Vercel + Neon deployment
              plumbing.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">What is included</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Next.js App Router + TypeScript</li>
              <li>Drizzle ORM + Neon serverless driver</li>
              <li>Auth.js starter with GitHub provider</li>
              <li>RBAC and tenant-safe query utilities</li>
              <li>GitHub Actions CI and deploy workflow</li>
            </ul>
          </article>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Auth" body="JWT sessions with Auth.js route handlers and middleware guard ready." />
          <Card title="Data" body="Tenant-aware schema and DB client setup with migration scripts." />
          <Card title="Ops" body="Health endpoint, tests, and CI checks for stable pull request flow." />
        </section>
      </div>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </article>
  );
}
