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
          },
          colors : {
            main:'#4f6755',
            secondary:'#D7A184',
            
          }

      },
    },
    plugins: [],
  }

