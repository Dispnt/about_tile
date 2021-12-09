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
        'background':
        {
          DEFAULT:'#f7f2f2',
          dark:'#090C10'
        } ,
        'twitter':'#98d0ff',
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
    backgroundImage: (theme) => ({
      'fofu1': "url('./img/1.png')",
      'fofu2': "url('./img/2.png')",
      'none' : "url('./img/none.png')",
     })
  },
  variants: {
    extend: {backgroundImage: ['dark'],},
  },
  plugins: [],
}
