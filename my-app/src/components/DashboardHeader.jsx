import React from "react";
import Button from "./Button";

export default function DashboardHeader() {
  return (
    <section className="dashboard-header mb-8 flex flex-col justify-between gap-5 border-b pb-7 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Monday, August 23, 2026</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Good morning, team.</h1>
        <p className="mt-2 max-w-xl text-sm text-zinc-400">A clear view of the projects moving Vortex Dynamics forward.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">View reports</Button>
        <Button variant="primary" size="sm">New project</Button>
      </div>
    </section>
  );
}
