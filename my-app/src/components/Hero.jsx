import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import DashboardHeader from "./DashboardHeader";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      if (!supabase) return;

      let { data, error } = await supabase.from("hero").select("*").single();
      if (!error) setHero(data);
    };
    fetchHero();
  }, []);

  return (
    <div className="relative bg-zinc-950 p-10 text-center">
      {/* Keep dashboard header if you want */}
      <DashboardHeader />

      {hero && (
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-emerald-400">{hero.title}</h1>
          <p className="mt-4 text-lg text-zinc-300">{hero.subtitle}</p>
          <p className="mt-2 text-sm text-zinc-500">{hero.tagline}</p>
          {hero.image_url && (
            <img
              src={hero.image_url}
              alt={hero.title}
              className="mx-auto mt-6 max-w-md rounded-lg shadow-lg"
            />
          )}
        </div>
      )}
    </div>
  );
}
