module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: { 
    borderRadius: {
      'none': '0',
     DEFAULT: '0.25rem',
     'md':'23px',
     'lg': '32px',
     'full': '9999px',
    },
    extend: {
      colors: {
        'background':
        {
          DEFAULT:'#f7f2f2',
          dark:'#090C10',
          menu:'#0000000a',
          darkmode:'#f0f2f8',
        } ,
        'menu':'#0d1117',
        'spotify':'#6ed2b7',
        'darkmode':'#0d1117',
        'twitter':'#98d0ff',
        'steam':'#353230',
       },
       width: {
        '0.25':'3px',
        '23': '5.625rem',
      },
      height:{
        '0.25':'3px',
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
       },
       spacing: {
        '85px': '85px',
        '110px': '110px',
        '55px':'55px'
      },
      blur: {
        DEFAULT: '8px',
      },
      transitionProperty: {
        'blur': 'filter'
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
