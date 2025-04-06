/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'text-lora': '"Lora", serif',
      }
    },
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

