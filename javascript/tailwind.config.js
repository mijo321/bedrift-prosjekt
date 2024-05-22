/* tailwind.config.css */
module.exports = {
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
    purge: [],
    darkMode: false,
    theme: {
      extend: {
        // Add custom styles here
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.scrollbar-hide': {
            'scrollbar-width': 'none', /* Firefox */
            '-ms-overflow-style': 'none', /* IE 10+ */
          }
        }
        addUtilities(newUtilities);
      }
    ]
  }
  