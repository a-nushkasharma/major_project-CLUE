/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#153361', // Define the color if it's missing
        },
      },

      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      keyframes: { 
        fade: {
          '0%': { opacity: '0.4' }, 
          '100%': { opacity: '1' },
        },
      },
      animation: { 
        fade: 'fade 1.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}
