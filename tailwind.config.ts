import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navybluelight: '#1B263B',
        navybluedark: '#141D2F',
        cosmicgreen: '#00FF7F',
        cosmicgreendark: '#00DE6F',
        gold: '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        cosmic: ['var(--font-oxanium)'],
      },
    },
  },
  plugins: [],
}
export default config
