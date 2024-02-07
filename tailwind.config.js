const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      colors: {
        'chatbot-background': '#F9FAFB',
        'spark-violet-light': '#8A98D6',
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        openSans: ['OpenSans', ...defaultTheme.fontFamily.sans],
        modernEra: ['ModernEra', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xssm: ['0.813rem', '1.125rem'], // ['13px', '18px'],
        smbase: ['0.938rem', '1.25rem'], // ['15px', '20px'],
        baselg: ['1.05625rem', '1.375rem'], // ['17px', '22px'],
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

