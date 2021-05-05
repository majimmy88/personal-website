module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1526838223946-b4db99314705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80')",
      }),
    },
  },
  variants: {
    backgroundImage: ['responsive'],
  },
  plugins: [],
};
