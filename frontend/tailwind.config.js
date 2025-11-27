/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0d0630',
          blue: '#156fb0',
          light: '#608ba2',
          cream: '#fffcf7',
          cyan: '#97f9f9',
        },
      },
    },
  },
  plugins: [],
}

