import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Alert from "../components/Alert";
import supabase from "../supabaseClient";

const fallbackFeatures = [
  { id: 1, title: "Product Strategy", description: "Clear product direction aligned with customer needs and business goals." },
  { id: 2, title: "Launch Systems", description: "Operational workflows that move work from idea to execution without friction." },
  { id: 3, title: "Decision Clarity", description: "Simple reporting and dashboards that surface priority, risk, and momentum." },
];

const fallbackAlerts = [
  { id: 1, type: "success", message: "Client portal updates are in motion and weekly reporting is on track." },
  { id: 2, type: "warning", message: "Two decisions are still awaiting stakeholder confirmation." },
  { id: 3, type: "info", message: "New partnership opportunities are being reviewed this week." },
];

export default function LandingPage() {
  const [features, setFeatures] = useState(fallbackFeatures);
  const [alerts, setAlerts] = useState(fallbackAlerts);

  useEffect(() => {
    const fetchFeatures = async () => {
      if (!supabase) {
        setFeatures(fallbackFeatures);
        return;
      }

      const { data, error } = await supabase.from("Features Table").select("*");
      if (!error && Array.isArray(data) && data.length > 0) setFeatures(data);
      else setFeatures(fallbackFeatures);
    };
    fetchFeatures();
  }, []);

  useEffect(() => {
    const fetchAlerts = async () => {
      if (!supabase) {
        setAlerts(fallbackAlerts);
        return;
      }

      let { data, error } = await supabase.from("alerts").select("*");
      if (!error && Array.isArray(data) && data.length > 0) setAlerts(data);
      else setAlerts(fallbackAlerts);
    };
    fetchAlerts();
  }, []);

  return (
    <div>
      <Hero />

      <section className="flex flex-wrap justify-center gap-6 p-10">
        {features.map((feature) => (
          <Card key={feature.id} title={feature.title}>
            {feature.description}
          </Card>
        ))}
      </section>

      <section className="flex flex-col gap-4 p-6">
        {alerts.map((alert) => (
          <Alert key={alert.id} type={alert.type} size="lg">
            {alert.message}
          </Alert>
        ))}
      </section>
    </div>
  );
}
