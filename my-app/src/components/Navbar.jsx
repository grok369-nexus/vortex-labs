import React from "react";
import { Link } from "react-router-dom";
import VortexLogo from "../assets/vortex-logo.svg";

export default function Navbar() {
  return (
    <nav className="gradient-neutral p-4 flex justify-between items-center shadow-glow-teal">
      <img src={VortexLogo} alt="Vortex Dynamics Logo" className="h-10" />
      <div className="space-x-4">
        <Link to="/" className="btn-secondary-sm">Home</Link>
        <Link to="/about" className="btn-secondary-sm">About</Link>
        <Link to="/contact" className="btn-secondary-sm">Contact</Link>
      </div>
    </nav>
  );
}
