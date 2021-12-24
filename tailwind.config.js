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
        'steam':'#353230'
       },
       minHeight:{
         'lg': '280px',
         'sm': '164px'
       },
       maxWidth:{
        '2lg': '580px',
        'lg':  '280px',
        '2sm': '456px',
        'sm':  '164px'
       }
    },
    scale: {
      '35': '.35',
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
