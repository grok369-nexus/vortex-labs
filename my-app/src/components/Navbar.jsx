import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import VortexLogo from "../assets/vortex-logo.svg";
import supabase from "../supabaseClient";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("vortex-theme") === "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  // ✅ Fetch nav items from Supabase
  useEffect(() => {
    const fetchNavItems = async () => {
      let { data, error } = await supabase.from("navigation").select("*").order("id");
      if (!error) setNavItems(data);
    };
    fetchNavItems();
  }, []);

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
          {navItems.map((item) =>
            item.external ? (
              <a key={item.id} href={item.to} target="_blank" rel="noreferrer" className="sidebar-nav">
                <span className="w-5 text-center text-xs font-bold uppercase">{item.icon}</span>
                {item.label}
              </a>
            ) : (
              <NavLink
                end={item.to === "/"}
                key={item.id}
                to={item.to}
                className={({ isActive }) => `sidebar-nav ${isActive ? "sidebar-nav-active" : ""}`}
              >
                <span className="w-5 text-center text-xs font-bold uppercase">{item.icon}</span>
                {item.label}
              </NavLink>
            )
          )}
          <button type="button" onClick={toggleTheme} className="sidebar-nav w-full text-left" aria-pressed={lightMode}>
            <span className="w-5 text-center text-xs font-bold">{lightMode ? "D" : "L"}</span>
            {lightMode ? "Light mode" : "Dark mode"}
          </button>
        </nav>
      </aside>

      {/* Top header remains the same */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-5 backdrop-blur lg:ml-64 lg:px-8">
        {/* ... */}
      </header>
    </>
  );
}
