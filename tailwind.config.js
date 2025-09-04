import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['index.html', './src/**/*.{html,js,tsx}', './node_modules/preline/preline.js'];
export const theme = {
  extend: {
    animation: {
      wobble: 'wobble .5s ease-in-out',
    },
    keyframes: {
      wobble: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(-5deg)' },
        '75%': { transform: 'rotate(5deg)' },
      },
    },
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
  },
};
export const plugins = [require('preline/plugin')];
