module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#008248",
        back:"#D5EAE3"
      },
      width:{
          large:"774px"
      },
      height:{
        large:"760px"
      },
      fontWeight: {
        primarybold: 650,
      },
      fontFamily: {
        primaryFamily: ["Helvetica Neue", "Helvetica", "Arial,sans-serif"],
      },
      zIndex:{
        "-1":"-1",
      },
      margin: {
       "4.5":"1.10rem",
       "35":"8.7rem",
      },
      padding:{
        "35": "35rem"
      }
    },
  },
  variants: {},
  plugins: [],
};
