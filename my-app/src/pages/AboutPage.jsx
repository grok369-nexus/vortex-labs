import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import supabase from "../supabaseClient";

export default function AboutPage() {
  const [aboutItems, setAboutItems] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      let { data, error } = await supabase.from("about").select("*");
      if (!error) setAboutItems(data);
    };
    fetchAbout();
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Services</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-50">Built for useful momentum.</h1>
      </div>

      {/* ✅ Dynamic cards */}
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
