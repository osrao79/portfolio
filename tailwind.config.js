/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Custom brand fonts
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["IBM Plex Sans", "Inter", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
