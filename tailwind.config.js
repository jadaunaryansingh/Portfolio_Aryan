/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5e9d4",
        "paper-dark": "#e8d5b0",
        "paper-darker": "#d4bc8a",
        ink: "#111111",
        "ink-light": "#2a2a2a",
        "ink-faded": "#4a4040",
        brown: "#5c4b2d",
        "brown-light": "#7a6040",
        gold: "#c9a227",
        "gold-light": "#e8c04a",
        "gold-dark": "#9a7a10",
        cream: "#faf3e0",
        sepia: "#704214",
      },
      fontFamily: {
        abril: ["var(--font-abril)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        bodoni: ["var(--font-bodoni)", "serif"],
        baskerville: ["var(--font-baskerville)", "serif"],
        "source-serif": ["var(--font-source-serif)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/textures/paper-bg.svg')",
      },
      animation: {
        "ticker-scroll": "tickerScroll 30s linear infinite",
        "stamp-appear": "stampAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "ink-drip": "inkDrip 0.6s ease-out forwards",
        "page-drop": "pageDrop 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "grain": "grain 0.5s steps(1) infinite",
        "float": "float 6s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
      },
      keyframes: {
        tickerScroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        stampAppear: {
          "0%": { transform: "scale(2) rotate(-20deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(-5deg)", opacity: "1" },
        },
        inkDrip: {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0% 0)" },
        },
        pageDrop: {
          "0%": { transform: "translateY(-60px) rotateX(10deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotateX(0deg)", opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(1%, 2%)" },
          "30%": { transform: "translate(-3%, 1%)" },
          "40%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "60%": { transform: "translate(3%, 0%)" },
          "70%": { transform: "translate(0%, -1%)" },
          "80%": { transform: "translate(-2%, 2%)" },
          "90%": { transform: "translate(1%, -3%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      dropShadow: {
        newspaper: "4px 4px 8px rgba(0,0,0,0.4)",
        ink: "1px 1px 0px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
