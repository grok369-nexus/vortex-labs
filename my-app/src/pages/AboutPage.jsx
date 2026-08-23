import React from "react";
import Card from "../components/Card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Services</p><h1 className="mt-2 text-3xl font-semibold text-zinc-50">Built for useful momentum.</h1></div>
      <Card title="About Vortex Dynamics" category="Our approach" metric="Based in Kampala, Uganda">
        Vortex Dynamics builds practical software for students, businesses, and communities. We bring thoughtful product strategy, dependable technology, and clear design together so teams can make progress with confidence.
      </Card>
    </div>
  );
}
