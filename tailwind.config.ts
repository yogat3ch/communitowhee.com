import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          
"primary": "#d43b65",
          
"primary-content": "#100103",
          
"secondary": "#f28f9a",
          
"secondary-content": "#140709",
          
"accent": "#52ACF6",
          
"accent-content": "#020b15",
          
"neutral": "#667f00",
          
"neutral-content": "#040600",
          
"base-100": "#fffff4",
          
"base-200": "#deded4",
          
"base-300": "#bebeb5",
          
"base-content": "#161614",
          
"info": "#a9defe",
          
"info-content": "#0a1216",
          
"success": "#b6d175",
          
"success-content": "#0c1005",
          
"warning": "#fe733a",
          
"warning-content": "#160501",
          
"error": "#ad2433",
          
"error-content": "#f4d5d4",
          },
        },
        {
          "darkTheme": {
            "primary": "#d43b65",
            "primary-content": "#ffd1e0",
            "secondary": "#f28f9a",
            "secondary-content": "#ffe6eb",
            "accent": "#52ACF6",
            "accent-content": "#d8ebff",
            "neutral": "#667f00",
            "neutral-content": "#e6f2cc",
            "base-100": "#121212",
            "base-200": "#1c1c1c",
            "base-300": "#242424",
            "base-content": "#e0e0e0",
            "info": "#3e7ca6",
            "info-content": "#d8ebff",
            "success": "#52783a",
            "success-content": "#dff4d8",
            "warning": "#a65120",
            "warning-content": "#ffe6d8",
            "error": "#7a1d2e",
            "error-content": "#ffe6e6"
          }
        }
        
      ],
    },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
