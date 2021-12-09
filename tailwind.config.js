module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: { 
    borderRadius: {
      'none': '0',
     DEFAULT: '0.25rem',
     'lg': '32px',
     
    },
    extend: {
      colors: {
        'background': '#f7f2f2',
        'twitter':'#98d0ff'
       },
       minHeight:{
         'lg': '280px',
         'sm': '164px'
       },
       maxWidth:{
        'lg': '280px',
        'sm': '164px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
