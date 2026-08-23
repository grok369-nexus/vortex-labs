import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="gradient-primary text-center py-20 shadow-glow-teal">
      <h1 className="text-5xl font-orbitron text-white mb-6">
        Welcome to Vortex Dynamics
      </h1>
      <p className="text-brand-silver text-lg mb-8 max-w-2xl mx-auto">
        Building futuristic software solutions with a unified brand identity.
        Empowering schools, businesses, and communities through innovation.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="primary" size="lg">Get Started</Button>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </section>
  );
}
