/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#132F40",
        primary_light: "#0E344B",
        badge_onsale: "#F80000",
        badge_discount: "#F3F800",
      },
    },
  },
  plugins: [],
};
