/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#2B99FF",
        lightMainColor: "64B5FF",
        backgroundColor: "#FCFFD6",
      },
      height: {
        fullScreenExceptHeader: "calc(100vh - 96px)",
        imageHeight: "454px",
      },
      width: {
        imageWidth: "100%",
      },
      flex: {
        2: "2 2 0%",
      },
      spacing: {
        "120px": "120px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
