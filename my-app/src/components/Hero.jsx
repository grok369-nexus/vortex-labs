import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import DashboardHeader from "./DashboardHeader";

const fallbackHero = {
  title: "Build useful momentum.",
  subtitle: "Strategy, product, and execution for ambitious teams.",
  tagline: "Helping teams turn ideas into measurable traction.",
  image_url: "",
};

export default function Hero() {
  const [hero, setHero] = useState(fallbackHero);

  useEffect(() => {
    const fetchHero = async () => {
      if (!supabase) {
        setHero(fallbackHero);
        return;
      }

      let { data, error } = await supabase.from("hero").select("*").single();
      if (!error && data) setHero(data);
      else setHero(fallbackHero);
    };
    fetchHero();
  }, []);

  return (
    <div className="relative bg-zinc-950 p-10 text-center">
      <DashboardHeader />

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
    </div>
  );
}
