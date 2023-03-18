/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
      "pink": "var(--pink)",
      "dark-pink": "var(--dark-pink)",
      "nyellow": "var(--nyellow)",
      "cream": "var(--cream)",
      "dark-gray": "var(--dark-gray)",
      "syellow": "var(--syellow)",
      "w": "var(--w)",
      "b": "var(--b)",
      "l-yellow": "var(--l-yellow)",
      "xl-yellow": "var(--xl-yellow)",
      "s-yellow": "var(--s-yellow)",
      "light-gray": "var(--light-gray)",
  }
},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}