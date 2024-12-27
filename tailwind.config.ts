import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //colors: {
    //"color1" : "#740938",
    //"color2" : "#C6E7FF"
    //},
    extend: {
      spacing: {
        "5px": "5px",
        "15px": "15px",
        "25px": "25px",
        "10%" : "10%",
        "20%" : "20%",
        "60%" : "60%"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color1": "#740938",
        "color2": "#C6E7FF",
        "color3": {
          "satu": "#FBD288",
          "dua": "#006A67",
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light"],
  },
};
export default config;
