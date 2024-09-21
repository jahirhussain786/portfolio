/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000F0F",
        secondary: "#B9DBDB",
        tertiary: "#004444",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      animation: {
        "bounce-arrow": "bounce-arrow 2s infinite",
      },
      keyframes: {
        "bounce-arrow": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(10px)" },
          "60%": { transform: "translateY(5px)" },
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "teal-glow": "0 0 15px rgba(79, 209, 197, 0.7)", // Intense glow
        "teal-glow-md": "0px 0px 24px 10px rgba(94, 234, 212, 0.91)", // Medium glow
        "teal-glow-sm": "0px 0px 10px 2px rgba(94, 234, 212, 0.99)",
      },
      screens: {
        ms: "320px",
        "1ms": "375px",
        xs: "450px",
        lp: "1440px",
        "3xl": "1536px",
        // sm: "640px",
        // md: "640px",
        // lg: "640px",
        // xl: "640px",
        // xxl: "640px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg1.png')",
      },
    },
  },
  plugins: [],
};
