/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        logo: {
          blue1: "#1B2F4F",
          blue2: "#0476D1",
          blue3: "#56E2F4",
          darkBlue1: "#182B46",
          darkBlue2: "#213B63",
          white: "#FEFFFE",
        },
      },
    },
  },
  plugins: [],
};
