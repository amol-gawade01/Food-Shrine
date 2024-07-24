const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'search':"url('./Public/Assets/search.png')",
        'search2':"url('./Public/Assets/search2.png')",
        'sort':"url('./Public/Assets/sort.png')",
        'downarrow':"url('./Public/Assets/downarrow.png')",
        'brick':"url('./Public/Assets/brickwall.jpg')"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        orange: {
         default:'#fe6232'
        }
    },
    
  },
  plugins: [],
}
}
