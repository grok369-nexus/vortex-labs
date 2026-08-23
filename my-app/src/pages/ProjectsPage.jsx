import React from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";

const projects = [
  {
    title: "Technology",
    category: "Digital infrastructure",
    description: "Dependable platforms for complex workflows and modern teams.",
    metric: "72% complete",
    status: "Ongoing",
  },
  {
    title: "Innovation",
    category: "Research and development",
    description: "New ideas moving from early experiments into useful products.",
    metric: "Milestone: Sep 04",
    status: "Ongoing",
  },
  {
    title: "Finance",
    category: "Operations",
    description: "Financial systems that give teams confidence in every decision.",
    metric: "On track",
    status: "Ongoing",
  },
  {
    title: "Community Hub",
    category: "Social impact",
    description: "A shared space for resources, collaboration, and local opportunity.",
    metric: "Discovery phase",
    status: "Planning",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mb-8 flex flex-col justify-between gap-5 border-b border-zinc-800 pb-7 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Workspace / Projects</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Our projects</h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">Track the ideas, products, and partnerships currently in motion.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500"><span className="h-2 w-2 rounded-full bg-emerald-400" /> 4 active workstreams</div>
      </section>
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="dashboard-card"><p className="text-xs text-zinc-500">Ongoing</p><p className="mt-2 text-2xl font-semibold text-zinc-100">03</p></div>
        <div className="dashboard-card"><p className="text-xs text-zinc-500">Planning</p><p className="mt-2 text-2xl font-semibold text-zinc-100">01</p></div>
        <div className="dashboard-card"><p className="text-xs text-zinc-500">Next review</p><p className="mt-2 text-2xl font-semibold text-zinc-100">Sep 04</p></div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => <Card key={project.title} {...project} />)}
      </section>
      <div className="mt-8"><Alert type="info">Want to explore the work in more detail? Visit the external portfolio for project case studies.</Alert></div>
    </div>
  );
}
