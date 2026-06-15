/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Breakpoints derived from the real frame widths in Figma:
    // Phone 393 / Tablet 768 / Desktop 1440 / Wide 1920
    screens: {
      sm: '480px',
      md: '768px', // tablet frame
      lg: '1024px',
      xl: '1440px', // desktop frame
      '2xl': '1920px', // wide frame
    },
    extend: {
      colors: {
        // Names mirror the Figma "Fons&colors" variables
        white: '#ffffff',
        black: '#1c221b',
        fiolet: '#6637ed', // purple
        green: '#ceff1b', // lime
        pink: '#fbd2ff',
      },
      fontFamily: {
        display: ['Caprasimo', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // [size, { lineHeight }] — from Figma type styles
        h1: ['135px', { lineHeight: '124px' }],
        'h1-tablet': ['75px', { lineHeight: '80px' }],
        'h1-mob': ['55px', { lineHeight: '58px' }],
        h2: ['50px', { lineHeight: '60px' }],
        'h2-mob': ['30px', { lineHeight: '42px' }],
        h3: ['35px', { lineHeight: '46px' }],
        desc: ['20px', { lineHeight: '27px' }],
        'text-link': ['16px', { lineHeight: '18px', fontWeight: '500' }],
        'btn': ['20px', { lineHeight: '24px', fontWeight: '700' }],
        body: ['16px', { lineHeight: '20px', fontWeight: '500' }],
      },
      spacing: {
        'card': '24px', // padding-card
        'block': '80px', // padding-block
      },
      borderRadius: {
        card: '24px',
      },
      maxWidth: {
        container: '1280px', // inner container at 1440 (80px gutters)
      },
    },
  },
  plugins: [],
}
