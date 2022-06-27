/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");


const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  })
})
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'tcg': '#F28C28',
    },
    extend: {},
  },
  plugins: [MyClass, require('flowbite/plugin')]
}

