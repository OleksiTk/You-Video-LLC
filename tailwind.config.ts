/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Глибокий чорний
        surface: "#0f0f0f", // Трохи світліший для сайдбару/карток
        primary: "#24f4fa", // Твій неоновий блакитний
        secondary: "#0a192f", // Темно-синій для хедера
        textMain: "#ffffff",
        textMuted: "#9ca3af",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
