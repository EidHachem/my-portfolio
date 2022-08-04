/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      beige: '#eae2b7',
      blue: '#003049',
      purple: '#5f0f40',
      orange: '#f77f00',
      yellow: '#fcbf49',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      roboto: ['Roboto', 'serif'],
    },
    extend: {
      backgroundImage: {
        // home: "url('/src/Assets/roman-synkevych-vXInUOv1n84-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
