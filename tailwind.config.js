/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'UP-COLOR': '#05599d',
        'UP-COLOR2': '#0066b2',
        'UP-COLOR3' : '#00528f',
        'UP-COLOR4' : '#e8ebfa'
      }
    },
  },
  plugins: [],
};
