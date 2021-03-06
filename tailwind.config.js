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
            height: "height , max-height",
            width: "width",
         },
         boxShadow: {
            header: "0 7px 8px 0 rgb(0 0 0 / 4%)",
         },
         maxHeight: {
            sm: "420px",
         },
         minHeight: {
            sm : "350px"
         },
         maxWidth: {
            sm: "350px",
         },
         width: {
            sm: "420px",
            md: "830px",
         },
      },
      fontFamily: {
         sans: ["Vazir"],
      },
   },
   variants: {
      extend: {
         padding: ["first"],
      },
   },
   plugins: [],
};
