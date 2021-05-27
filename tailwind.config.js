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
        "red-darker" : "#d1211b",
        "red-darker-1" : "#B80B2A",
        "gray-lighter" : "#EFEFEF",
        "gray-lighter-1" : "rgba(0,0,0,0.62)",
        "gray-lighter-2" : "#333333",
        "gray-lighter-3" : "rgba(0,0,0,.4)",
        "gray-lighter-4" : "rgba(0,0,0,.08)",
        "gray-lighter-5" : "rgba(0,0,0,.12)",
        "black-lighter-1" : "#222",
        "black-darker" : "rgba(0,0,0,0.8)",
        "orange-darker" : "#ff5252",
        "orange-lighter-1" : "#dd2c00",
        "flat-orange" : "#ffe5e5",
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
