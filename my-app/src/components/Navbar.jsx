import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import VortexLogo from "../assets/vortex-logo.svg";
import supabase from "../supabaseClient";

const defaultNavItems = [
  { id: "dashboard", label: "Dashboard", to: "/", icon: "D" },
  { id: "landing", label: "Landing", to: "/landing", icon: "H" },
  { id: "projects", label: "Projects", to: "/projects", icon: "P" },
  { id: "about", label: "About", to: "/about", icon: "A" },
  { id: "contact", label: "Contact", to: "/contact", icon: "C" },
];

export default function Navbar() {
  const [lightMode, setLightMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("vortex-theme") === "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(defaultNavItems);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
    localStorage.setItem("vortex-theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  useEffect(() => {
    const fetchNavItems = async () => {
      if (!supabase) {
        setNavItems(defaultNavItems);
        return;
      }

      const { data, error } = await supabase.from("navigation").select("*").order("id");
      if (!error && Array.isArray(data) && data.length > 0) {
        const normalized = data
          .filter((item) => item && item.label)
          .map((item) => {
            const label = item.label.trim();
            const suggestedPath =
              item.to && item.to.trim()
                ? item.to.trim()
                : label.toLowerCase() === "blogs"
                  ? "/blogs"
                  : label.toLowerCase() === "events"
                    ? "/events"
                    : label.toLowerCase() === "landing"
                      ? "/landing"
                      : label.toLowerCase() === "projects"
                        ? "/projects"
                        : label.toLowerCase() === "about"
                          ? "/about"
                          : label.toLowerCase() === "contact"
                            ? "/contact"
                            : "/";

            return {
              ...item,
              label,
              to: suggestedPath,
              icon: item.icon || label.charAt(0).toUpperCase(),
              external: Boolean(item.external),
            };
          });

        const mergedNavItems = [...defaultNavItems];
        normalized.forEach((item) => {
          const alreadyExists = mergedNavItems.some(
            (navItem) => navItem.label === item.label || navItem.to === item.to
          );

          if (!alreadyExists) {
            mergedNavItems.push(item);
          }
        });

        setNavItems(mergedNavItems.length > 0 ? mergedNavItems : defaultNavItems);
      } else {
        setNavItems(defaultNavItems);
      }
    };

    fetchNavItems();
  }, []);

  function toggleTheme() {
    setLightMode((current) => !current);
  }

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-cyan-400/15 bg-zinc-950 px-4 py-6 lg:block">
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

      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-cyan-400/15 bg-zinc-950/90 px-5 shadow-[0_4px_18px_rgba(0,0,0,0.2)] backdrop-blur lg:ml-64 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <Link to="/" className="flex items-center gap-3">
            <img src={VortexLogo} alt="Vortex Dynamics" className="h-8 w-8" />
            <span className="font-semibold text-zinc-100">Vortex</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="btn-secondary rounded-md px-3 py-2 text-xs lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            Menu
          </button>
          <button type="button" onClick={toggleTheme} className="btn-secondary hidden rounded-md px-3 py-2 text-xs lg:inline-flex">
            {lightMode ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-cyan-400/15 bg-zinc-950 px-5 py-3 lg:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                end={item.to === "/"}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `sidebar-nav ${isActive ? "sidebar-nav-active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
