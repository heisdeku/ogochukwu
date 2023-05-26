/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "base-0": "#141414",
      "base-200": "#1E1E1E",
      "primary-200": "#B92E00",
      "primary-300": "#FF5219",
      "gray-100": "#333333",
      "gray-200": "#4D4D4D",
      "gray-300": "#666666",
      "gray-400": "#808080",
      "gray-500": "#E0E0E0",
      "gray-600": "#E6E6E6",
      "gray-800": "#B3B3B3",
      "gray-9": "#F2F2F2",
      "gray-10": "#FAFAFA",
      "green-200": "#27AE60",
      "secondary-300": "#F8A80D",
      "secondary-500": "#FEF6E6",
      white: "#fff",
      "status-green": "#D5F6E3",
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
      boxShadow: {
        "menu-option": "inset 0px 0.5px 1px rgba(255, 255, 255, 0.07)",
        "chat-header-overlay": "0px 4px 60px rgba(0, 0, 0, 0.05)",
        "chat-preview-shadow": "0px 4px 16px rgba(0, 0, 0, 0.03)"
      },
      gap: {
        15: "60px",
      },
    },
  },
  plugins: [],
};
