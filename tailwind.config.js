/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        "alo-bg": "#0E0F12",
        "alo-panel": "#111827",
        "alo-gold": "#C6A75E",
        "alo-text": "#EDEDED",
        "alo-muted": "#A1A1AA"
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      transitionTimingFunction: {
        linear: "linear"
      },
      transitionDuration: {
        slow: "400ms"
      },
      keyframes: {
        "hero-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" }
        }
      },
      animation: {
        "hero-zoom": "hero-zoom 6s linear forwards"
      }
    }
  },
  plugins: []
};

