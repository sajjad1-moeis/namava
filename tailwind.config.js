/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "8px",
            md: "10px",
         },
      },
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "800px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }
      },
      extend: {
         colors: {
            primary: "#2b73e3",
            secondary: "#f7f7f7",
            success: "#198754",
            info: "#0dcaf0",
            warning: "#f39c12",
            danger: "#dc3545",
            light: "#f8f9fa",
            white: "#fff",
            purple: "#6e41c0",
            dark: "#212529",
            darkBlue: "#28293d",
            silver: "#3A4D69",
            blueText: "#2b73e3",
         },
      },
   },
   plugins: [],
};
