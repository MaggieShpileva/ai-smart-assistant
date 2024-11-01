import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./lib/components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
export default config;
