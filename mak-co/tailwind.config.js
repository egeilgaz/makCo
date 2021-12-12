module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
        colors:{
          primary:{
            100: "#f8f9fa"
          }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
