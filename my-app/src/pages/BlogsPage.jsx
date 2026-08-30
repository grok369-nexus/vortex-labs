import React from "react";

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Insights</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-50">Blog updates</h1>
      </div>

      <div className="dashboard-card">
        <p className="text-zinc-300">
          The blog content is live in Supabase, and this page is now available so the navigation item no longer 404s.
        </p>
      </div>
    </div>
  );
}
