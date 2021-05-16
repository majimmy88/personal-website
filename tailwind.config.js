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
    minWidth: {
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
            transform: 'translateX(400px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-400px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out-left': {
          from: {
            opacity: '1',
            transform: 'translateX(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateX(100px)',
          },
        },
        'fade-out-right': {
          from: {
            opacity: '1',
            transform: 'translateX(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateX(100px)',
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left .5s ease-out',
        'fade-in-right': 'fade-in-right .5s ease-out',
      },
    },
  },
  variants: {
    backgroundImage: ['responsive'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
};
