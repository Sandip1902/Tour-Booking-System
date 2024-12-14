/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500", // Orange
        secondary: "#FF6347", // Red
        background: "#FFFFFF" // White
      }
    }
  },
  plugins: []
};

