/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

