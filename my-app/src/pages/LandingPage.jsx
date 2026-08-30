import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Alert from "../components/Alert";
import supabase from "../supabaseClient"; // ✅ NEW

export default function LandingPage() {
  const [features, setFeatures] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // ✅ Fetch features
  useEffect(() => {
    const fetchFeatures = async () => {
      if (!supabase) return;

      let { data, error } = await supabase.from("features").select("*");
      if (!error) setFeatures(data);
    };
    fetchFeatures();
  }, []);

  // ✅ Fetch alerts
  useEffect(() => {
    const fetchAlerts = async () => {
      if (!supabase) return;

      let { data, error } = await supabase.from("alerts").select("*");
      if (!error) setAlerts(data);
    };
    fetchAlerts();
  }, []);

  return (
    <div>
      {/* 🎨 Hero Section */}
      <Hero />

      {/* 📦 Feature Cards (dynamic) */}
      <section className="flex flex-wrap justify-center gap-6 p-10">
        {features.map((feature) => (
          <Card key={feature.id} title={feature.title}>
            {feature.description}
          </Card>
        ))}
      </section>

      {/* ⚠️ Alerts (dynamic) */}
      <section className="p-6 flex flex-col gap-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} type={alert.type} size="lg">
            {alert.message}
          </Alert>
        ))}
      </section>
    </div>
  );
}
