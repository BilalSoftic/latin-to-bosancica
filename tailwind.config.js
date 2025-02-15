/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2547A9',
        background: '#F9F6EE',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#C2C2C2',
        grayer: '#9C9C9C',
        grayest: '#545454',
        scrollbarThumbColor: '#A6A299',
        modalBackground: ' #CBC9C3',
      },
      fontFamily: {
        satoshiLight: ['Satoshi-Light'],
        satoshiBold: ['Satoshi-Bold'],
        font1Lig: ['Font1Lig'],
        font2Lig: ['Font2Lig'],
        font3Lig: ['Font3Lig'],
      },
      borderRadius: {
        'custom-radius': '0.75rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    {
      preferredStrategy: 'pseudoelements',
    },
  ],
};
