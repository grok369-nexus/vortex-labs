// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scan all JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#08122B",     // Deep Navy background
        "brand-primary": "#00E6A5",  // Neon Teal
        "brand-graphite": "#6B7280", // Graphite gray
        "brand-silver": "#C0C0C0",   // Silver accent
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"], // Futuristic brand font
      },
      boxShadow: {
        "glow-teal": "0 0 15px #00E6A5",
        "glow-teal-hover": "0 0 25px #00E6A5",
        "glow-silver": "0 0 15px #C0C0C0",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #00E6A5, #6B7280, #08122B)",
        "gradient-neutral": "linear-gradient(to right, #6B7280, #C0C0C0)",
      },
    },
  },
  plugins: [],
};
