import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-3 text-slate-300">Signed in as: {session?.user?.email ?? "unknown"}</p>
      </div>
    </main>
  );
}
