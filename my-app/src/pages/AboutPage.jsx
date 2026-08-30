import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import supabase from "../supabaseClient";

const fallbackAboutItems = [
  {
    id: 1,
    title: "Research and positioning",
    category: "Strategy",
    metric: "Clarity-first",
    description: "We help teams identify the right opportunity, sharpen the message, and remove false urgency from decision-making.",
  },
  {
    id: 2,
    title: "Product systems",
    category: "Execution",
    metric: "Faster delivery",
    description: "We design lean operating systems so cross-functional teams can move from planning into delivery with fewer bottlenecks.",
  },
  {
    id: 3,
    title: "Momentum reporting",
    category: "Visibility",
    metric: "Actionable",
    description: "Dashboards, status loops, and regular reviews turn scattered signals into decisions teams can actually act on.",
  },
];

export default function AboutPage() {
  const [aboutItems, setAboutItems] = useState(fallbackAboutItems);

  useEffect(() => {
    const fetchAbout = async () => {
      if (!supabase) {
        setAboutItems(fallbackAboutItems);
        return;
      }

      let { data, error } = await supabase.from("about").select("*");
      if (!error && Array.isArray(data) && data.length > 0) setAboutItems(data);
      else setAboutItems(fallbackAboutItems);
    };
    fetchAbout();
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Services</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-50">Built for useful momentum.</h1>
      </div>

      {aboutItems.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          category={item.category}
          metric={item.metric}
          description={item.description}
        />
      ))}
    </div>
  );
}
