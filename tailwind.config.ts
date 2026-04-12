import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fera-navy': '#1A1A2E',
        'fera-gold': '#C8A96E',
        'fera-ivory': '#F5F5F0',
        'fera-muted': '#6B6B6B',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
