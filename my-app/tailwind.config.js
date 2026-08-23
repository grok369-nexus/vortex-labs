// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scan all JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#1E1E1E",
        "brand-primary": "#34D399",
        "brand-graphite": "#27272A",
        "brand-silver": "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
      boxShadow: {
        panel: "0 8px 24px rgba(0, 0, 0, 0.22)",
        "sidebar-hover": "inset 3px 0 0 #34D399",
        banner: "0 4px 16px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
