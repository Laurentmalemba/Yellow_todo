import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316', // Customize your primary orange shade
        secondary: '#E5E7EB', // Light gray
        alternate: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
};

export default config;