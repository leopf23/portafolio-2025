/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        popover: 'var(--color-popover)',
        'popover-foreground': 'var(--color-popover-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        destructive: 'var(--color-destructive)',
        'destructive-foreground': 'var(--color-destructive-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        'chart-1': 'var(--color-chart-1)',
        'chart-2': 'var(--color-chart-2)',
        'chart-3': 'var(--color-chart-3)',
        'chart-4': 'var(--color-chart-4)',
        'chart-5': 'var(--color-chart-5)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': `
          linear-gradient(to right, var(--color-border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
        `,
        'hero-gradient': `
          linear-gradient(180deg, transparent 0%, var(--color-background) 100%),
          radial-gradient(ellipse 800px 400px at 50% -20%, rgba(120, 119, 198, 0.15), transparent),
          linear-gradient(180deg, var(--color-background) 0%, var(--color-background) 100%)
        `,
        'hero-gradient-dark': `
          linear-gradient(180deg, transparent 0%, var(--color-background) 100%),
          radial-gradient(ellipse 800px 400px at 50% -20%, rgba(168, 162, 255, 0.1), transparent),
          linear-gradient(180deg, var(--color-background) 0%, var(--color-background) 100%)
        `,
        'section-gradient': `
          linear-gradient(135deg, 
            rgba(99, 102, 241, 0.05) 0%, 
            rgba(168, 85, 247, 0.05) 50%, 
            rgba(236, 72, 153, 0.05) 100%
          )
        `,
        'section-gradient-dark': `
          linear-gradient(135deg, 
            rgba(99, 102, 241, 0.1) 0%, 
            rgba(168, 85, 247, 0.1) 50%, 
            rgba(236, 72, 153, 0.1) 100%
          )
        `,
        'card-gradient': `
          linear-gradient(145deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(255, 255, 255, 0.7) 100%
          )
        `,
        'card-gradient-dark': `
          linear-gradient(145deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%
          )
        `,
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgb(120, 119, 198) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgb(255, 119, 198) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgb(255, 158, 119) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgb(119, 195, 255) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgb(158, 255, 119) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgb(255, 195, 119) 0px, transparent 50%),
          radial-gradient(at 0% 0%, rgb(195, 119, 255) 0px, transparent 50%)
        `,
        'dot-pattern': `
          radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)
        `,
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      },
      backgroundSize: {
        'grid': '50px 50px',
        'dot': '20px 20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 40px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.2)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}