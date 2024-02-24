import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/libraries/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--font-primary)'
    },
    colors: {
      // default
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',

      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      black: 'var(--dark)',
      white: 'var(--white)',

      body: 'var(--body)',
      link: 'var(--link)',
      'link-hover': 'var(--link-hover)',
      'btn-text': 'var(--btn-text)',

      danger: 'var(--danger)',
      'danger-secondary': 'var(--danger-secondary)',
      warning: 'var(--warning)',
      'warning-secondary': 'var(--warning-secondary)',
      'warning-v2': 'var(--warning-v2)',
      'warning-secondary-v2': 'var(--warning-secondary-v2)',

      gray: {
        DEFAULT: 'var(--color-gray-0)',
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)'
      },

      cyan: {
        DEFAULT: 'var(--color-cyan)'
      }
    },
    extend: {
      boxShadow: {
        primary: 'var(--sw-primary)',
        secondary: 'var(--sw-secondary)',
        danger: 'var(--sw-danger)',
        cyan: 'var(--sw-cyan)',
        btn: 'var(--sw-btn)',
        card: 'var(--sw-card)'
      },
      spacing: {
        '0.5': '0.125rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem'
      },
      fontSize: {
        '11': '11px',
        '13': '13px',
        '17': '17px'
      }
    }
  },
  plugins: []
};
export default config;
