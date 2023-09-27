/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url(https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png)",
      },
    },
  },
  plugins: [],
};
