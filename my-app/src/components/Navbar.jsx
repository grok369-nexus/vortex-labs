import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import VortexLogo from "../assets/vortex-logo.svg";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("vortex-theme") === "light");

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);
  const navItems = [
    { label: "Dashboard", to: "/", icon: "grid" },
    { label: "Our Projects", to: "/projects", icon: "layers" },
    { label: "Services", to: "/about", icon: "briefcase" },
    { label: "Settings", to: "/settings", icon: "settings" },
  ];

  function toggleTheme() {
    const nextMode = !lightMode;
    setLightMode(nextMode);
    document.body.classList.toggle("light-mode", nextMode);
    localStorage.setItem("vortex-theme", nextMode ? "light" : "dark");
  }

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-zinc-800 bg-zinc-950 px-4 py-6 lg:block">
        <Link to="/" className="mb-10 flex items-center gap-3 px-3">
          <img src={VortexLogo} alt="Vortex Dynamics" className="h-9 w-9" />
          <span className="font-semibold tracking-tight text-zinc-100">Vortex Dynamics</span>
        </Link>
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">Workspace</p>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink end={item.to === "/"} key={item.label} to={item.to} className={({ isActive }) => `sidebar-nav ${isActive ? "sidebar-nav-active" : ""}`}>
              <span className="w-5 text-center text-xs font-bold uppercase">{item.icon.slice(0, 1)}</span>
              {item.label}
            </NavLink>
          ))}
          <button type="button" onClick={toggleTheme} className="sidebar-nav w-full text-left" aria-pressed={lightMode}>
            <span className="w-5 text-center text-xs font-bold">{lightMode ? "D" : "L"}</span>
            {lightMode ? "Light mode" : "Dark mode"}
          </button>
        </nav>
        <div className="mt-8 border-t border-zinc-800 pt-5">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">Our Projects</p>
          <a className="sidebar-nav" href="https://grok369-portfolio.vercel.app" target="_blank" rel="noreferrer">
            <span className="w-5 text-center text-xs font-bold">↗</span>
            Portfolio
          </a>
        </div>
        <div className="absolute bottom-6 left-7 right-7 rounded-md border border-zinc-800 bg-zinc-900 p-3 text-xs text-zinc-500">
          <span className="mb-1 block text-emerald-400">● Systems operational</span>
          Last checked just now
        </div>
      </aside>
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-5 backdrop-blur lg:ml-64 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <img src={VortexLogo} alt="Vortex Dynamics" className="h-8 w-8" />
          <span className="font-semibold text-zinc-100">Vortex Dynamics</span>
        </div>
        <nav className="ml-auto flex items-center gap-1 sm:gap-2">
          <NavLink end to="/" className={({ isActive }) => `rounded-md px-3 py-2 text-xs sm:text-sm ${isActive ? "sidebar-nav-active" : "text-zinc-400 hover:text-zinc-100"}`}>Overview</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `rounded-md px-3 py-2 text-xs sm:text-sm ${isActive ? "sidebar-nav-active" : "text-zinc-400 hover:text-zinc-100"}`}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => `rounded-md px-3 py-2 text-xs sm:text-sm ${isActive ? "sidebar-nav-active" : "text-zinc-400 hover:text-zinc-100"}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `rounded-md px-3 py-2 text-xs sm:text-sm ${isActive ? "sidebar-nav-active" : "text-zinc-400 hover:text-zinc-100"}`}>Contact</NavLink>
        </nav>
      </header>
    </>
  );
}
