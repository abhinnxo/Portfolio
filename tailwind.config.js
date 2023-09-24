/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        offwhite: "#d6d5c9",
        bluegreen: "#011627",
        darkgreen: "#0A100D",
        greywhite: "#B9BAA3",
        bloodred: "#902923",
        scaryblack: "#0D0D0D",
        terminalgreen: "#1FAA59",
        zestyorange: "#E07C24",
        furfle: "#8D3DAF",
        turtle: "#03C6C7",
      },
    },
  },

  plugins: [],
};
