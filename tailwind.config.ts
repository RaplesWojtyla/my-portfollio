import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#FCF4FF',
        darkHover: '#2A004A',
        darkTheme: '#11001F'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 rgba(0, 0, 0, 1)',
        'white': '4px 4px 0 rgba(255, 255, 255, 1)'
      }
    },
  },
  plugins: [],
} satisfies Config;
