/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008751',
        secondary: '#FFFFFF',
        accent: '#E6BE8A',
        dark: '#1a1a1a',
        light: '#f8f9fa',
        gray: '#6c757d',
      },
    },
  },
  plugins: [],
}