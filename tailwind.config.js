import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./index.html', "./src/**/*.{js,jsx,ts,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    colors: {
      primary: '#09B9E1',
      lightBlue: '#99C3FF',
      navy:'#12151C',
      secondary: '#00ABAD',
      smokeWhite: '#d5d5d5',
      smokegrey: '#FAFAFA',
    },

  },
  plugins: [],
});
