import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function LandingPage() {
  return (
    <div>
      {/* 🎨 Hero Section */}
      <Hero />

      {/* 📦 Feature Cards */}
      <section className="flex flex-wrap justify-center gap-6 p-10">
        <Card title="Technology">Cutting-edge solutions for modern apps.</Card>
        <Card title="Achievement">Delivering excellence in every project.</Card>
        <Card title="Innovation">Future-ready designs and experiences.</Card>
      </section>

      {/* ⚠️ Alerts */}
      <section className="p-6 flex flex-col gap-4">
        <Alert type="success" size="lg">✅ Deployment Successful!</Alert>
        <Alert type="warning">⚠️ Check your configuration.</Alert>
        <Alert type="error">❌ Something went wrong.</Alert>
        <Alert type="info">ℹ️ New update available.</Alert>
      </section>
    </div>
  );
}
