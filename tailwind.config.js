/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cms-green': '#0F5A4A',
        'cms-green-light': '#1A7A64',
        'cms-green-dark': '#0A3D32',
        'cms-terracotta': '#C8703D',
        'cms-terracotta-light': '#D48A5C',
        'cms-sand': '#F4F0E6',
        'cms-sand-light': '#FAF8F2',
        'cms-dark': '#1C1C1C',
        'cms-dark-light': '#2D2D2D',
        'cms-gray': '#6B6B6B',
        'cms-gray-light': '#E5E5E5',
        'cms-success': '#2F7D5D',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 5.625rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sub': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.6' }],
        'section-title': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'card-title': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
