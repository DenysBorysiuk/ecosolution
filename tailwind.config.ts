import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '30px',
        xl: '20px',
      },
    },
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        fira_sans: ['var(--font-fira-sans)'],
      },

      colors: {
        body: '#f3f5fa',
        primary: '#173d33',
        secondary: '#BDBDBD',
        accent: '#97D28B',
        form_bg: '#EAEDF1',
      },
    },
  },
  plugins: [],
};
export default config;
