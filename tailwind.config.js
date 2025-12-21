/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f2500d',
        },
        neutral: {
          primary: '#18181b',
          secondary: '#27272a',
          tertiary: '#3f3f47',
          quartinary: '#52525c',
          disable: '#9f9fa9',
          inverse: '#ffffff',
          50: '#fafafa',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        engagement: ['Engagement', 'serif'],
      },
      fontSize: {
        'display-1': ['144px', { lineHeight: '144px', letterSpacing: '-10px' }],
        'h1': ['60px', { lineHeight: '72px', letterSpacing: '-2px' }],
        'h3': ['40px', { lineHeight: '48px', letterSpacing: '-1px' }],
        'h4': ['32px', { lineHeight: '36px', letterSpacing: '-1px' }],
        'h5': ['24px', { lineHeight: '36px', letterSpacing: '-0.25px' }],
        'h6': ['20px', { lineHeight: '32px', letterSpacing: '0.5px' }],
        'body-xl': ['18px', { lineHeight: '28px', letterSpacing: '0.5px' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

