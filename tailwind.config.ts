import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      colors: {
        'primary': '#F46F3B',
        'tertiary': '#FDEDE7',
        'white': '#ffffff',
        'tx-black': '#171412',
        'badge': '#00B73F',
        'bg-badge': 'rgba(0, 183, 63, 0.1)',
        'ft-black': '#232222',
        'b-white': '#E8E8E8',
        'dull-white': 'rgba(240, 240, 240, 0.6)',
        'form-border': 'rgba(217, 217, 217, 0.5)',
        'primary-light': '#FF8C39',
        'hero-black': '#232222',
        'white-red-accent': 'rgba(255, 248, 237, 1)',
        'white-blue-accent': 'rgba(239, 244, 254, 1)',
        'tx-blue': 'rgba(91, 145, 245, 1)',
        'button-dark-brown': 'rgba(244, 111, 59, 0.1)',
        'milky-white': 'rgba(255, 248, 237, 0.5)',

      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(to right, rgba(244, 105, 75, 1), rgba(244, 111, 59, 1), rgba(195, 76, 50, 1))',
        // 'bg-light-gradient': 'linear-gradient(to right, rgba(236, 106, 58, 1), rgba(249, 250, 251, 1))',
        'tx-gradient': 'linear-gradient(to right, rgba(244, 105, 75, 1), rgba(244, 111, 59, 1), rgba(195, 76, 50, 1))',
        'tx-ft-gradient': 'linear-gradient(to left, rgba(244, 105, 75, 1), rgba(244, 111, 59, 1), rgba(195, 76, 50, 1))',
        'button-gradient': 'linear-gradient(to right, rgba(195, 76, 50, 0.1), rgba(244, 111, 59, 0.1), rgba(244, 105, 75, 0.1))',
        'border-gradient': 'linear-gradient(to right, rgba(244, 111, 59, 1), rgba(252, 218, 205, 1))',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'drop-down': '0px 0px 5px 0px rgba(244, 111, 59, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;



// theme: {
//   extend: {

//   },
// },
