import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Card from "../components/Card";
import Alert from "../components/Alert";
import supabase from "../supabaseClient";

const PROJECTS_TABLE = "Projects Table";
const fallbackProjects = [
  {
    id: 1,
    name: "Movie MVP",
    category: "Product",
    description: "A lean proof-of-concept for the film platform MVP.",
    progress: 33,
    deadline: "2026-09-15",
  },
  {
    id: 2,
    name: "Branding palette",
    category: "Design",
    description: "Full identity refresh across marketing and product surfaces.",
    progress: 70,
    deadline: "2026-09-30",
  },
];

const fallbackApps = [
  { id: 1, name: "Vortex CRM", description: "Version 1.0.0" },
  { id: 2, name: "Entertainment hub", description: "Movies and music across the globe" },
];

const fallbackBlogs = [
  { id: 1, summary: "Building with Supabase", category: "Product" },
  { id: 2, summary: "Tailwind CSS Tips", category: "Design" },
];

const fallbackEvents = [
  { id: 1, title: "Hackathon Kampala", location: "Kampala", description: "AI and product building session" },
  { id: 2, title: "Vortex Launch", location: "Online", description: "Launch of our latest prototypes" },
];

export default function Dashboard() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [apps, setApps] = useState(fallbackApps);
  const [blogs, setBlogs] = useState(fallbackBlogs);
  const [events, setEvents] = useState(fallbackEvents);
  const [featureHighlights, setFeatureHighlights] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!supabase) {
        setProjects(fallbackProjects);
        return;
      }

      const { data, error } = await supabase
        .from(PROJECTS_TABLE)
        .select("*")
        .order("deadline", { ascending: true, nullsFirst: false });

      if (error) {
        console.error("Error fetching projects:", error);
        setProjects(fallbackProjects);
        return;
      }

      if (Array.isArray(data) && data.length > 0) {
        setProjects(data);
      } else {
        setProjects(fallbackProjects);
      }
    };

    const fetchApps = async () => {
      if (!supabase) {
        setApps(fallbackApps);
        return;
      }

      const { data, error } = await supabase.from("Apps").select("*");
      if (error) {
        console.error("Error fetching apps:", error);
        setApps(fallbackApps);
        return;
      }

      setApps(Array.isArray(data) && data.length > 0 ? data : fallbackApps);
    };

    const fetchBlogs = async () => {
      if (!supabase) {
        setBlogs(fallbackBlogs);
        return;
      }

      const { data, error } = await supabase.from("Blogs Table").select("*");
      if (error) {
        console.error("Error fetching blogs:", error);
        setBlogs(fallbackBlogs);
        return;
      }

      setBlogs(Array.isArray(data) && data.length > 0 ? data : fallbackBlogs);
    };

    const fetchEvents = async () => {
      if (!supabase) {
        setEvents(fallbackEvents);
        return;
      }

      const { data, error } = await supabase.from("Events Table").select("*");
      if (error) {
        console.error("Error fetching events:", error);
        setEvents(fallbackEvents);
        return;
      }

      setEvents(Array.isArray(data) && data.length > 0 ? data : fallbackEvents);
    };

    const fetchFeatureHighlights = async () => {
      if (!supabase) {
        setFeatureHighlights([]);
        return;
      }

      const { data, error } = await supabase.from("Features Table").select("*");
      if (error) {
        console.error("Error fetching feature highlights:", error);
        setFeatureHighlights([]);
        return;
      }

      setFeatureHighlights(Array.isArray(data) ? data : []);
    };

    fetchProjects();
    fetchApps();
    fetchBlogs();
    fetchEvents();
    fetchFeatureHighlights();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <DashboardHeader />

      {/* Dashboard stats cards (still static for now, can later connect to Supabase counts) */}
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="dashboard-card">
          <p className="text-xs text-zinc-500">Active projects</p>
          <p className="mt-2 text-3xl font-semibold text-zinc-100">{projects.length}</p> {/* ✅ NEW: dynamic count */}
          <p className="mt-1 text-xs text-cyan-400">+2 this month</p>
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
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,207,255,0.5)]"
        >
          View all <span aria-hidden="true">↗</span>
        </a>
      </div>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            category={project.category}
            description={project.description}
            metric={`Progress: ${project.progress}% | Deadline: ${project.deadline || "TBD"}`}
          />
        ))}
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-100">Apps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {apps.length > 0 ? (
            apps.map((app) => (
              <Card
                key={app.id}
                title={app.name}
                description={app.description}
                metric={app.link ? `Open app ↗` : "No direct link configured"}
              />
            ))
          ) : (
            <div className="dashboard-card col-span-full text-sm text-zinc-400">
              No live apps are available from the Apps table yet.
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-zinc-100">Feature highlights</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featureHighlights.length > 0 ? (
            featureHighlights.map((feature) => (
              <Card
                key={feature.id}
                title={feature.title}
                description={feature.description}
                metric={feature.created_at ? new Date(feature.created_at).toLocaleDateString() : "Live feature"}
              />
            ))
          ) : (
            <div className="dashboard-card col-span-full text-sm text-zinc-400">
              No live feature data is available from the Features Table yet.
            </div>
          )}
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-zinc-100">Latest blogs</h2>
          <div className="space-y-3">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                title={blog.summary || "Blog update"}
                category={blog.category || "General"}
                metric={blog.link ? "Read article ↗" : "No link configured"}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-zinc-100">Upcoming events</h2>
          <div className="space-y-3">
            {events.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                category={event.location || "Location TBD"}
                description={event.description}
                metric={event.date ? new Date(event.date).toLocaleDateString() : "Date TBD"}
              />
            ))}
          </div>
        </div>
      </section>

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
