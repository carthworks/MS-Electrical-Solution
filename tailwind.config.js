/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#16B832',
          'green-dark': '#119628',
          'green-soft': '#ECFDF0',
          yellow: '#FFC400',
          'yellow-soft': '#FFFBEB',
          charcoal: '#24272B',
          'charcoal-light': '#3C4147',
          bg: '#F7F9F7',
          red: '#D92D20',
          'red-soft': '#FEF3F2',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(36, 39, 43, 0.06), 0 1px 2px -1px rgba(36, 39, 43, 0.04)',
        'card-hover': '0 12px 28px -8px rgba(36, 39, 43, 0.12), 0 4px 10px -4px rgba(22, 184, 50, 0.08)',
        sticky: '0 4px 20px -4px rgba(36, 39, 43, 0.08)',
      },
    },
  },
  plugins: [],
};
