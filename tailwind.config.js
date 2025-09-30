/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'couple-pink': '#FF6B81',
        'couple-lavender': '#9B5DE5',
        'couple-cream': '#FFF0F5',
        'couple-gray': '#F5F5F5',
        'couple-black': '#222222',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
