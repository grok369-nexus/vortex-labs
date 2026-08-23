import React from "react";

export default function Card({ title, category = "Project", status = "Ongoing", metric, children }) {
  return (
    <div className="dashboard-card flex min-h-48 flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{category}</p>
          <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        </div>
        <span className="rounded-full border border-emerald-800 bg-emerald-950/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">{status}</span>
      </div>
      <p className="mt-5 text-sm leading-6 text-zinc-400">{children}</p>
      {metric && <div className="mt-5 border-t border-zinc-800 pt-3 text-xs text-zinc-500">{metric}</div>}
    </div>
  );
}
