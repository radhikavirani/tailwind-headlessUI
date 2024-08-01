import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#288CD5',
        'secondary': '#D57028',
        'greay': '#5C5C5C',
        'TextBox': '#288cd54d',
        'TextGreay': '#F9F9F9',
        'BgBlue' : '#20222F',
        'IconBg' :'#FAFAFA',
      },
      borderRadius: {
        '16': '16px'
      },
    },
  },
  plugins: [],
};
export default config;
