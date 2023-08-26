/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './app.vue'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      borderRadius: {
        '3px': '3px',
      },
      margin: {
        'n-2': '-2px',
        'n-6': '-6px',
        'n-9': '-9px',
      },
      height: {
        '18': '4.5rem',
      },
      width: {
        '18': '4.5rem',
      },
      colors: {
        'alkali-metal': '#FF4F4F',
        'alkaline-earth-metal': '#FFAF4F',
        'transition-metal': '#FFFC4F',
        'basic-metal': '#4FFF5B',
        'metalloid': '#4FF6FF',
        'nonmetal': '#4F7FFF',
        'halogen': '#964FFF',
        'noble-gas': '#FF4FFF',
        'lanthanide': '#46E250',
        'actinide': '#3EBC46',
      },
      screens: {
        '3xl': '1832px'
      }
    },
  },
  plugins: [],
}
