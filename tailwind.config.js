/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      zoom: {
        'from': {
          opacity: '0',
          transform: 'scale(0.9)',
        },
        'to': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      zoom: 'zoom 1s forwards',
    }
  },
  plugins: [],
}
