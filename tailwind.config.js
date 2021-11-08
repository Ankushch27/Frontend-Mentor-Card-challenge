module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'pattern-desktop': "url('/images/pattern-background-desktop.svg')",
        'pattern-mobile': "url('/images/pattern-background-mobile.svg')",
      },
      boxShadow: {
        '3xl': '0 10px 30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
