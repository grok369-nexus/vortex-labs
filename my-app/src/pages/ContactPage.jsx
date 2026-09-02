import React from "react";
import { useState } from "react";
import Alert from "../components/Alert";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(result.message || "We could not send your message. Please try again.");
    }
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Contact</p><h1 className="mt-2 text-3xl font-semibold text-zinc-50">Get in touch.</h1><p className="mt-4 text-sm leading-6 text-zinc-400">Have an idea, question, or useful criticism? Send it through and the team will get back to you.</p><div className="mt-8 space-y-2 text-sm text-zinc-400"><p>info@vortexdynamics.com</p><p>Kampala, Uganda</p></div></div>
      <form onSubmit={handleSubmit} className="dashboard-card space-y-5">
        <input type="hidden" name="access_key" value="ae4b7ed6-e2b5-457a-9681-7c64fd3fd6b5" />
        <input type="hidden" name="subject" value="New Vortex Dynamics feedback" />
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm text-zinc-300">Name<input required name="name" className="mt-2 w-full rounded-md border border-cyan-400/30 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40" /></label>
          <label className="text-sm text-zinc-300">Email<input required type="email" name="email" className="mt-2 w-full rounded-md border border-cyan-400/30 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40" /></label>
        </div>
        <label className="block text-sm text-zinc-300">Attitude towards Vortex Dynamics<select required name="attitude" defaultValue="" className="mt-2 w-full rounded-md border border-cyan-400/30 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"><option value="" disabled>Select one</option><option>Excited</option><option>Curious</option><option>Constructive</option><option>Unsure</option></select></label>
        <label className="block text-sm text-zinc-300">Feedback<textarea required name="feedback" rows="4" className="mt-2 w-full resize-y rounded-md border border-cyan-400/30 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40" /></label>
        <label className="block text-sm text-zinc-300">Suggestions<textarea name="suggestions" rows="3" className="mt-2 w-full resize-y rounded-md border border-cyan-400/30 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40" /></label>
        {submitted && <Alert type="success" size="sm">Thanks, your feedback has been sent.</Alert>}
        {error && <Alert type="error" size="sm">{error}</Alert>}
        <button type="submit" className="btn-primary">Send feedback</button>
      </form>
    </div>
  );
}
