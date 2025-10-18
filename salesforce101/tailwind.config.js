/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sf: {
          blue: '#0176D3',
          dark: '#032d60',
          light: '#56A3E0',
        },
      },
    },
  },
  plugins: [],
};
