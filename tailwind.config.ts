import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'securenext-navy': '#1a3e72',
        'securenext-navy-dark': '#0d2247',
        'securenext-silver': '#8B8E95',
        'securenext-gray': '#F5F7FA',
        'securenext-white': '#FFFFFF',
        'securenext-accent': '#1D7BFF',
        'securenext-accent-dark': '#1560CC',
        'securenext-green': '#00B050',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0px rgba(29,123,255,0.4)' },
          '100%': { boxShadow: '0 0 0 12px rgba(29,123,255,0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
