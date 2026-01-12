import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1220',
        secondary: '#1F8BFF',
        accent: '#FF3366',
        background: '#05060A',
        surface: '#0F1720',
        foreground: '#FFFFFF',
        muted: '#0F1720',
        'muted-foreground': '#B0BAC6',
        border: '#273444'
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        sm: '0 4px 10px rgba(2,6,23,0.45)',
        md: '0 10px 30px rgba(2,6,23,0.5)',
        lg: '0 30px 80px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: [],
};

export default config;
