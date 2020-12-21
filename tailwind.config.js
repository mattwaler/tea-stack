module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
