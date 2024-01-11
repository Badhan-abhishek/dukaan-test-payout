import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#146EB4",
        secondary: "#1E2640",
        page: "#FFFFFF1A",
        mute: "#353C53",
        input: "#F2F2F2",
        inputText: "#808080",
        grayMute: "#D9D9D9",
        section: "#FAFAFA",
        black90: "#E6E6E6",
        black60: "#999999",
        black30: "#4D4D4D"
      },
      borderRadius: {
        "4": "4px",
      },
      fontSize: {
        amountL: [
          "2rem",
          {
            lineHeight: "2.4rem",
            fontWeight: 500,
          },
        ],
      },
      boxShadow: {
        card: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
