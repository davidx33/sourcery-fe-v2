/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter') ({
      wordsets: {
        metrics: {
          words: ['YoY Headcount Growth', 'Total $ Raised', 'Recent Round $ Amount', 'Founding Year', 'Geography'],
          delay: 1,
          repeat: -1
        },
        industries: {
          words: ['Cannabis', 'Web3', 'Gaming', 'B2B SaaS', 'AI'],
          delay: 1,
          repeat: -1
        },
      }
    })
  ],
};
