// tailwind.config.ts
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
        brand: {
          primary: '#FFD700',
          light:   '#FFE44D',
          dark:    '#B89600',
        },
        surface: {
          DEFAULT: '#0E0E0E',
          raised:  '#141414',
          overlay: '#1A1A1A',
        },
        ink: {
          DEFAULT:   '#FAFAFA',
          secondary: 'rgba(255,255,255,0.55)',
          tertiary:  'rgba(255,255,255,0.30)',
          disabled:  'rgba(255,255,255,0.15)',
        },
        linen: {
          DEFAULT: '#F4F3EF',
          border:  '#E2E0D8',
          ink:     '#1A1A1A',
          muted:   '#6B6960',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)',      'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)',      'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      height: {
        nav: '4rem',
      },
      boxShadow: {
        'glow-gold':    '0 0 40px rgba(255,215,0,0.08)',
        'glow-gold-sm': '0 0 20px rgba(255,215,0,0.06)',
        'card':         '0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)',
        'card-hover':   '0 1px 3px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:   'marquee 30s linear infinite',
        shimmer:   'shimmer 2s linear infinite',
        'fade-up': 'fade-up 0.5s ease forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config