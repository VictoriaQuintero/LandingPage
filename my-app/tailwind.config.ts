import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors : {
        feature1 : '#0085FF',
        feature2 :'#00A424',
        feature3 :'#EB2891'
     }
    },
  },
  plugins: [],
};
export default config;
