/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#2874E1',
      lightBlue: '#99C3FF',
      navy:'#0B264E',
      secondary: '#F8991D',
      smokeWhite: '#d5d5d5',
      smokegrey: '#FAFAFA',
    },
    extend: {
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
};
