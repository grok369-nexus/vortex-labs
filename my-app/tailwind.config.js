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
        "brand-primary": "#00CFFF",
        "brand-purple": "#7C3AED",
        "brand-graphite": "#27272A",
        "brand-silver": "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
      boxShadow: {
        panel: "0 8px 24px rgba(0, 0, 0, 0.34), 0 0 18px rgba(0, 207, 255, 0.08)",
        "sidebar-hover": "inset 3px 0 0 #00CFFF, 0 0 16px rgba(0, 207, 255, 0.14)",
        banner: "0 4px 16px rgba(0, 0, 0, 0.24), 0 0 14px rgba(124, 58, 237, 0.1)",
      },
    },
  },
  plugins: [],
};
