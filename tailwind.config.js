module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: {
          DEFAULT: "#3c4b6d",
        },
      },
      transitionProperty: {
        height: "height",
      },
      boxShadow: {
        header: "0 7px 8px 0 rgb(0 0 0 / 4%)",
      },
      maxHeight: {
        sm: "420px",
      },
    },
    fontFamily: {
      sans: ["Vazir"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
