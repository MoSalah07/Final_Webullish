/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#149FF3",
        "primary-text": "#313131",
        "primary-white": "#fff",
        "primary-gray": "#EDEDED",
        "primary-btn": "#4763E4",
        "primary-red": "#DC2626",
        "primary-black": "#282828",
        "primary-yellow": "#FFB506",
        "primary-green": "#00B132",
        "secondary-white": "#f9f9f9",
        "secondary-blue": "#5C73DB",
        "secondary-dark": "#263238",
        "secondary-gray": "#3E3E59",
        "secondary-red": "#FF0000",
        "text-light": "#949494",
        "text-p": "#282828",
        "text-dark": "#3E3E59",
        "border-color": "#EAECF0",
        "dark-card": "#2a2936",
      },
      borderRadius: {
        "primary-rounded": "8px",
      },
    },
  },
  plugins: [],
};
