/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '120': '40rem',
        '150': '45rem',
      },
    },
  },
  plugins: [
  ],
  
}

