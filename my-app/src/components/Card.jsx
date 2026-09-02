import React from "react";

export default function Card({
  title,
  category,
  status,
  metric,
  description,
  children,
}) {
  return (
    <div className="dashboard-card flex min-h-48 flex-col justify-between">
      {/* Header: category + title + status */}
      <div className="flex items-start justify-between gap-4">
        <div>
          {category && (
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400/70">
              {category}
            </p>
          )}
          <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        </div>
        {status && (
          <span className="rounded-full border border-cyan-400/40 bg-cyan-950/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
            {status}
          </span>
        )}
      </div>

      {/* Body: description or children */}
      {description && (
        <p className="mt-5 text-sm leading-6 text-zinc-400">{description}</p>
      )}
      {!description && children && (
        <p className="mt-5 text-sm leading-6 text-zinc-400">{children}</p>
      )}

      {/* Footer: metric */}
      {metric && (
        <div className="mt-5 border-t border-cyan-400/15 pt-3 text-xs text-zinc-500">
          {metric}
        </div>
      )}
    </div>
  );
}
