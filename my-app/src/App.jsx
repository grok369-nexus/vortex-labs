import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="bg-brand-dark min-h-screen flex flex-col">
        {/* 🔝 Navbar */}
        <Navbar />

        {/* 📄 Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* 🔻 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
