"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("ui-theme");
    const nextIsLight = stored !== "dark";
    setIsLight(nextIsLight);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", isLight);
    window.localStorage.setItem("ui-theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <main className={isLight ? "min-h-screen bg-white text-slate-900" : "min-h-screen bg-slate-950 text-slate-100"}>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 md:px-10">
        <header className="mb-14 flex items-center justify-between">
          <p className={isLight ? "text-sm font-medium tracking-wide text-slate-600" : "text-sm font-medium tracking-wide text-slate-300"}>Guest App Template</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsLight((current) => !current)}
              className={
                isLight
                  ? "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400"
                  : "rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
              }
            >
              {isLight ? "Dark" : "White"}
            </button>
            <Link
              href="/api/health"
              className={
                isLight
                  ? "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400"
                  : "rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
              }
            >
              Health
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className={isLight ? "rounded-2xl border border-slate-200 bg-slate-50 p-6" : "rounded-2xl border border-slate-800 bg-slate-900/50 p-6"}>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Ship guest apps faster</h1>
            <p className={isLight ? "mt-4 text-slate-600" : "mt-4 text-slate-300"}>
              This template includes auth scaffolding, tenant-ready schema, CI/CD defaults, and Vercel + Neon deployment
              plumbing.
            </p>
          </article>

          <article className={isLight ? "rounded-2xl border border-slate-200 bg-slate-50 p-6" : "rounded-2xl border border-slate-800 bg-slate-900/50 p-6"}>
            <h2 className="text-xl font-semibold">What is included</h2>
            <ul className={isLight ? "mt-4 space-y-2 text-slate-600" : "mt-4 space-y-2 text-slate-300"}>
              <li>Next.js App Router + TypeScript</li>
              <li>Drizzle ORM + Neon serverless driver</li>
              <li>Auth.js starter with GitHub provider</li>
              <li>RBAC and tenant-safe query utilities</li>
              <li>GitHub Actions CI and deploy workflow</li>
            </ul>
          </article>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <Card
            isLight={isLight}
            title="Auth"
            body="JWT sessions with Auth.js route handlers and middleware guard ready."
          />
          <Card isLight={isLight} title="Data" body="Tenant-aware schema and DB client setup with migration scripts." />
          <Card isLight={isLight} title="Ops" body="Health endpoint, tests, and CI checks for stable pull request flow." />
        </section>
      </div>
    </main>
  );
}

function Card({ isLight, title, body }: { isLight: boolean; title: string; body: string }) {
  return (
    <article className={isLight ? "rounded-xl border border-slate-200 bg-slate-50 p-5" : "rounded-xl border border-slate-800 bg-slate-900/40 p-5"}>
      <h3 className="font-semibold">{title}</h3>
      <p className={isLight ? "mt-2 text-sm text-slate-600" : "mt-2 text-sm text-slate-300"}>{body}</p>
    </article>
  );
}
