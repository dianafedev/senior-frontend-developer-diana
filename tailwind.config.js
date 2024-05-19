/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      '2xl': ['24px', '24px'],
      '4xl': ['28px', '24px'],
      '5xl': ['46px', '28px'],
      '6xl': ['60px', '32px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#003459",
        'primary-light': "#003440",
        'primary-text': "#002A48",
        'dark': "#00171F",
        'gray': "#667479",
        'cream': "#FCEED5",
        'cream-dark': "#FFB775",
        'blue-sea': "#00A7E7",
      },
    },
  },
  plugins: [],
}

