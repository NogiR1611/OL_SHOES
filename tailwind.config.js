const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,jpg}', './components/**/*.{js,ts,jsx,tsx,jpg}','./assets/**/*.{js,ts,jsx,tsx,jpg}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo, 
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {  
      colors: {
        "orange" : "#ff7a0d",
        "red-darker" : "#d1211b"
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1" :  "-1",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active','visited','focus','hover','group-focus','group-hover'],
      textColor: ['active','visited','focus','hover','group-focus','group-hover'],
      borderColor: ['active','visited','focus','focus-within','hover','group-focus','group-hover'],
      borderWidth: ['active','visited','hover', 'focus'],
      borderRadius: ['active','visited','focus','hover'],
      outline: ['active','visited','focus','hover'],
      boxShadow: ['active','visited','focus','hover'],
      ringWidth: ['hover', 'active','visited','focus'],
      ringColor: ['hover', 'active','visited','focus'],
      scale: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: []
}
