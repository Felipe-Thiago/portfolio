import { mtConfig } from '@material-tailwind/react';

const config = {
  content: ["./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"],
  plugins: ["@tailwindcss/postcss", mtConfig],
};

export default config;
