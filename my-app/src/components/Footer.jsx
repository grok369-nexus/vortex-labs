import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      if (!supabase) return;

      let { data, error } = await supabase.from("footer").select("*").single();
      if (!error) setFooter(data);
    };
    fetchFooter();
  }, []);

  return (
    <footer className="border-t border-cyan-400/20 px-5 py-3 text-xs text-zinc-500 shadow-[0_-4px_16px_rgba(0,207,255,0.04)] lg:ml-64 lg:px-8">
      {footer ? (
        <p>
          &copy; {footer.year} {footer.text}
          <span className="mx-2 text-zinc-700">|</span>
          {footer.status}
        </p>
      ) : (
        <p>&copy; 2026 Vortex Dynamics <span className="mx-2 text-zinc-700">|</span> All systems operational</p>
      )}
    </footer>
  );
}
