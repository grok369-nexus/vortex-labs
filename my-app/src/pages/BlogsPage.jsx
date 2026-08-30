import React, { useEffect, useState } from "react";
import Card from "../components/Card"; // ✅ reuse your Card component
import supabase from "../supabaseClient";

const BLOGS_TABLE = "Blogs Table";

// Fallback data (like Dashboard)
const fallbackBlogs = [
  { id: 1, summary: "Building with Supabase", category: "Product" },
  { id: 2, summary: "Tailwind CSS Tips", category: "Design" },
  { id: 3, summary: "Ugandan Tech Innovations", category: "Innovation" },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(fallbackBlogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!supabase) {
        setBlogs(fallbackBlogs);
        return;
      }

      const { data, error } = await supabase
        .from(BLOGS_TABLE)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
        setBlogs(fallbackBlogs);
        return;
      }

      setBlogs(Array.isArray(data) && data.length > 0 ? data : fallbackBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
          Insights
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-50">
          Blog updates
        </h1>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.summary || "Blog update"}
            category={blog.category || "General"}
            description={blog.description || "No description available"}
            metric={blog.link ? "Read article ↗" : "No link configured"}
          />
        ))}
      </div>
    </div>
  );
}
