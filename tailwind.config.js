module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1526838223946-b4db99314705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80')",
      }),
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-out',
      },
    },
  },
  variants: {
    backgroundImage: ['responsive'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
};
