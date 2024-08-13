/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel': "url('/src/assets/img/ber.png')",
        'carousel1': "url('/src/assets/img/Capture d’écran 2024-02-20 124102.png')",
        'carousel2': "url('/src/assets/img/Capture d’écran 2024-02-20 122747.png')",
      },
      keyframes: {
        scrollX: {
          '100%': { transform: 'translateX(100%)' },   
          '0%': { transform: 'translateX(-100%)' }, 
        },
      },
      animation: {
        scrollX: 'scrollX 10s linear infinite',
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}

