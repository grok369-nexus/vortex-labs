import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
import supabase from "../supabaseClient";

const PROJECTS_TABLE = "Projects Table";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!supabase) return;

      const { data, error } = await supabase
        .from(PROJECTS_TABLE)
        .select("*")
        .order("deadline", { ascending: true, nullsFirst: false });

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      if (Array.isArray(data)) {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  // ✅ NEW: derive counts for dashboard cards
  const ongoingCount = projects.filter(p => p.status === "Ongoing").length;
  const planningCount = projects.filter(p => p.status === "Planning").length;
  const nextReview = projects.length > 0 ? projects[0].deadline : "N/A";

  return (
    <div className="mx-auto max-w-7xl">
      <section className="mb-8 flex flex-col justify-between gap-5 border-b border-zinc-800 pb-7 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Workspace / Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Our projects
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Track the ideas, products, and partnerships currently in motion.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> {projects.length} active workstreams
        </div>
      </section>

      {/* ✅ NEW: dynamic stats cards */}
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Ongoing</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{ongoingCount}</p>
        </div>
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Planning</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{planningCount}</p>
        </div>
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Next review</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{nextReview}</p>
        </div>
      </section>

      {/* ✅ NEW: map Supabase projects */}
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            category={project.category}
            description={project.description}
            metric={`Progress: ${project.progress}%`}
            status={project.status}
          />
        ))}
      </section>

      <div className="mt-8">
        <Alert type="info">
          Want to explore the work in more detail? Visit the external portfolio for project case studies.
        </Alert>
      </div>
    </div>
  );
}
