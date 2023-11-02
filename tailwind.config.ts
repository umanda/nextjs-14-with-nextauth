import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
            'bg-drawify-gradient-text': "bg-gradient-to-br from-violet-600 via-pink-600 to-blue-600",
            'hero-pattern': "url('/img/hero-pattern.svg')",
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['var(--font-poppins)'],
        },
    }
},
  plugins: [],
  
}
export default config
