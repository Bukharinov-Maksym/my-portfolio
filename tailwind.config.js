module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-green': '#33bd8b',
        'testimonial-text': '#c1cada',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}