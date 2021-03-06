const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,jpg}', './components/**/*.{js,ts,jsx,tsx,jpg}','./assets/**/*.{js,ts,jsx,tsx,jpg}'],
  darkMode: false, // or 'media' or 'class' 
  theme: {
    screens: {
      'hp-one' : '320px',
      'hp-two' : '375px',
      'hp' : '425px',
      'tablet-600' : '600px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1440px',
    },
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
      spacing: {
        '1/3': '33.33333%',
        '2/3': '66.666667%'
      },
      fontSize: {
        'super-tiny' : '.50rem',
        'tiny' : '.625rem',
      },
      keyframes: {
        'fade' : {
          '0%' : {
            opacity: '0',
            display: 'none',
          },
          '50%' : {
            opacity: '0.8',
            display: 'block',
          },
          '100%' : {
            opacity: '0',
            display: 'none',
          }
        },
        'bouncing' : {
          '0%' : {
            top: '-2px'
          },
          '25%': {
            bottom: '-2px'
          },
          '50%': {
            top: '-2px'
          },
          '75%': {
            bottom: '-2px'
          },
          '100%': {
            bottom: '0px'
          }
        },
        'sliding-down' : {
          '0%' : {
            display : 'none'
          },
          '100%' : {
            display : 'block'
          }
        },
        'sliding-up' : {
          '0%' : {
            display : 'block'
          },
          '100%' : {
            display : 'none'
          }
        }
      },
      animation: {
        'fade' : 'fade 1s ease-in-out',
        'bouncing' : 'bouncing 1.5s ease-in-out',
        'sliding-down' : 'sliding-down 3s ease-in-out',
        'sliding-up' : 'sliding-up 3s ease-in-out'
      },
      fontFamily: {
        "avenir" : ['avenir-lt-pro-black','sans-serif'],
        "oblique" : ['avenir-lt-pro-black-oblique','sans-serif'],
        "probook" : ['avenir-lt-pro-book','sans-serif'],
        "probookoblique" : ['avenir-lt-pro-book-oblique','sans-serif'],
        "proheavy" : ['avenir-lt-pro-heavy','sans-serif'],
        "proheavyoblique" : ['avenir-lt-pro-heavy-oblique','sans-serif'],
        "prolight" : ['avenir-lt-pro-light','sans-serif'],
        "prolightoblique" : ['avenir-lt-pro-light-oblique','sans-serif'],
        "promedium" : ['avenir-lt-pro-medium','sans-serif'],
        "promediumoblique" : ['avenir-lt-pro-medium-oblique','sans-serif'],
        "prooblique" : ['avenir-lt-pro-oblique','sans-serif'],
        "proroman" : ['avenir-lt-pro-roman','sans-serif'],
      },
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
        "gray-lighter-6" : "rgba(0,0,0,.32)",
        "gray-lighter-7" : "rgba(0,0,0,.06)",
        "gray-lighter-8" : "#ebebeb",
        "gray-lighter-9" : "rgba(0,0,0,.42)",
        "white-1" : "#f4f4f4",
        "white-2" : "rgba(0,0,0,.54)",
        "black-lighter-1" : "#222",
        "black-darker" : "rgba(0,0,0,0.8)",
        "orange-darker" : "#ff5252",
        "orange-lighter-1" : "#dd2c00",
        "flat-orange" : "#ffe5e5",
        "green-whatsapp" : "#25d366"
      },
      width: {
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        '450'  : '450px',
        '480'  : '480px',
        '560'  : '560px',
        '512'  : '512px', 
      },
      height: {
        '1/10' : '10%',
        '2/10' : '20%',
        '3/10' : '30%',
        '4/10' : '40%',
        '5/10' : '50%',
        '6/10' : '60%',
        '7/10' : '70%',
        '8/10' : '80%',
        '9/10' : '90%',
        '480'  : '480px',
        '560'  : '560px',
        '512'  : '512px', 
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1" :  "-1",
        "60" : "60",
        "70" : "70",
        "80" : "80",
        "90" : "90",
        "100": "100",
        "500" : "500",
        "1000" : "1000",
        "2000" : "2000",
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
      transitionDuration: ['hover', 'focus'],
      backgroundOpacity: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}
