import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Card from "../components/Card";
import Alert from "../components/Alert";
import supabase from "../supabaseClient";  // ✅ NEW: import Supabase client

export default function Dashboard() {
  // ✅ NEW: state to hold projects from Supabase
  const [projects, setProjects] = useState([]);

  // ✅ NEW: fetch projects from Supabase when component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      if (!supabase) return;

      let { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("deadline", { ascending: true });
      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <DashboardHeader />

      {/* Dashboard stats cards (still static for now, can later connect to Supabase counts) */}
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Active projects</p>
          <p className="mt-2 text-3xl font-semibold text-zinc-100">{projects.length}</p> {/* ✅ NEW: dynamic count */}
          <p className="mt-1 text-xs text-emerald-400">+2 this month</p>
        </div>
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Team capacity</p>
          <p className="mt-2 text-3xl font-semibold text-zinc-100">84%</p>
          <p className="mt-1 text-xs text-zinc-400">Healthy allocation</p>
        </div>
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Open decisions</p>
          <p className="mt-2 text-3xl font-semibold text-zinc-100">04</p>
          <p className="mt-1 text-xs text-amber-400">2 need attention</p>
        </div>
      </section>

      {/* Project portfolio section */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">Project portfolio</h2>
          <p className="mt-1 text-sm text-zinc-500">Current work across the Vortex ecosystem.</p>
        </div>
        <a
          href="https://grok369-portfolio.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          View all <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* ✅ NEW: map Supabase projects instead of static array */}
      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            category={project.category}
            description={project.description}
            metric={`Progress: ${project.progress}% | Deadline: ${project.deadline}`}
          />
        ))}
      </section>

      {/* Activity and updates (still static, can later connect to Supabase alerts table) */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-zinc-100">Activity and updates</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Alert type="success">Deployment completed successfully for the client portal.</Alert>
          <Alert type="warning">The Finance workspace has two decisions awaiting review.</Alert>
          <Alert type="info">A new portfolio case study is ready to publish.</Alert>
        </div>
      </section>
    </div>
  );
}
