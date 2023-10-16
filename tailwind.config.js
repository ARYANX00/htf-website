/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stars:
          "url('C:/Users/khanu/OneDrive/Desktop/htf-2/htf-website/public/images/Stars-AboutUs.png')",
      },
      colors: {
        custom: {
          500: "#76A3BE", // Define your custom color here
        },
      },
    },
  },
  plugins: [],
};
