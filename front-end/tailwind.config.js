/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'home': "url('/front-end/src/assets/17.jpg')",
          }
      },
    },
    plugins: [],
  }

