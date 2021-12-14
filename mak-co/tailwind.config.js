module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
        colors:{
          primary:{
            100: "#f8f9fa"
          }
      },
      width:{
        100:'46.8rem',
        128:'55rem',
        256:'62rem',
        257:'70rem',
        258:'75rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
