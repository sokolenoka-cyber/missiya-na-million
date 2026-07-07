/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        secondary: 'var(--secondary)',
        blush: 'var(--blush)',
        rose: 'var(--rose)',
        lavender: 'var(--lavender)',
        'violet-deep': 'var(--violet-deep)',
        destructive: 'var(--destructive)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(155,114,207,0.25)',
        cta: '0 4px 24px -4px rgba(100,60,180,0.30)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-card': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 4px 24px -4px rgba(100,60,180,0.30), 0 0 0 0 rgba(155,114,207,0.0)' },
          '50%': { boxShadow: '0 4px 32px -2px rgba(100,60,180,0.45), 0 0 24px 4px rgba(155,114,207,0.18)' },
        },
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-card': 'float-card 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
