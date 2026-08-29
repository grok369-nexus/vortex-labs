import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage"; // ✅ NEW
// import SettingsPage from "./pages/SettingsPage"; // optional

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark text-zinc-100">
        <Navbar />
        <main className="min-h-[calc(100vh-7rem)] px-5 py-8 lg:ml-64 lg:px-8 lg:py-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/landing" element={<LandingPage />} /> {/* ✅ NEW */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/settings" element={<SettingsPage />} /> */}
            <Route path="*" element={<h1 className="text-red-400">404 - Page Not Found</h1>} /> {/* ✅ NEW */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
