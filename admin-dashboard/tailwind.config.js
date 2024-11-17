/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all JS/TS files
  ],
  theme: {
    extend: {},
    screens: {
      xm: "367px",
      xs: "480px",
      sm: "767px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
      xxl: "1920px",
    },
  },
  plugins: [],
};
