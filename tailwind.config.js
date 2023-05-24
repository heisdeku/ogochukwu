/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      base: "#141414",
      "primary-300": "#FF5219",
      "gray-400": "#808080",
      "secondary-300": "#F8A80D",
      "secondary-500": "#FEF6E6",
      white: "#fff",
    },
    fontFamily: {
      satoshi: "Satoshi",
    },
    extend: {
      lineHeight: {
        text: "19px",
        22: "22px",
      },
      fontSize: {
        "3.2xl": "32px",
      },
      borderRadius: {
        tiny: "6px",
      },
      margin: {
        1.6: "6px",
      },
      height: {
        btn: "62px",
      },
    },
  },
  plugins: [],
};
