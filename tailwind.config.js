/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15120f',
        champagne: '#f4eadc',
        pearl: '#fffaf3',
        gold: '#c79a45',
        blush: '#e9c7c1',
        sage: '#a8b7a2',
      },
      boxShadow: {
        premium: '0 24px 70px rgba(47, 35, 22, 0.14)',
        soft: '0 14px 35px rgba(47, 35, 22, 0.1)',
      },
      fontFamily: {
        display: ['PT Serif', 'Georgia', 'Cambria', 'serif'],
        body: ['PT Serif', 'Georgia', 'Cambria', 'serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(199, 154, 69, 0.28)' },
          '50%': { boxShadow: '0 0 52px rgba(233, 199, 193, 0.45)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        glow: 'glow 2.3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
