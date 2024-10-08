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
        blink: {
          '0%, 100%': { color: 'inherit' },  // Start and end with original color
          '50%': { color: 'white' },         // Change to white in the middle
        },
      },

      animation: {
        scroll: 'scroll 20s linear infinite',
        blink: 'blink 2s ease-in-out both',
      },
      colors: {
        'danger': '#FF0500',
        'bg-danger': 'rgba(255, 5, 0, 0.1)',
        'primary': '#F46F3B',
        'tertiary': '#FDEDE7',
        'secondary': '#5B91F5',
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
        'darum-accent': '#FFF8ED',
        'tx-blue': 'rgba(91, 145, 245, 1)',
        'button-dark-brown': 'rgba(244, 111, 59, 0.1)',
        'milky-white': 'rgba(255, 248, 237, 0.5)',
        'grid-teal': 'rgba(115, 165, 175, 0.5)',
        'grid-powder': 'rgba(239, 244, 254, 1)',
        'grid-yellow': 'rgba(253, 237, 231, 1)',
        'powder-blue': 'rgba(91, 145, 245, 0.1)',
        'powder-yellow': "#FEF8F5",
        'silk-white': "#FEEAE2",
        'grey-foreground': '#F7F9FC',
        'up-coming': 'rgba(169, 87, 18, 0.1)',
        'up-coming-text': 'rgba(169, 87, 18, 1)',
        'grey': '#6B7280'
      },
      backgroundImage: {
        // 'bg-gradient-white': 'linear-gradient(180.51deg, #FEF8F5 89.96%, #FFFFFF 99.56%)',
        // 'line-gradient': 'linear-gradient(262.94deg, #C34C32 9.61%, #F46F3B 49.28%, #F4694B 89.76%)',
        'line-gradient': 'linear-gradient(to bottom, rgba(195, 76, 50, 0.1), rgba(244, 111, 59, 0.1), rgba(244, 105, 75, 0.1))',
        'bg-gradient-white': 'linear-gradient(to bottom, rgba(254, 248, 245, 1), rgba(255, 255, 255, 1))',
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
