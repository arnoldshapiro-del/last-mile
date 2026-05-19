const path = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'src/**/*.{js,jsx}')
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#161616',
        surface2: '#1f1f1f',
        border: '#262626',
        text: '#e8e8e8',
        muted: '#888888',
        green: {
          DEFAULT: '#00D9A0',
          dim: '#00A07A'
        },
        blue: {
          DEFAULT: '#4A9EFF',
          dim: '#2E7CD0'
        },
        amber: {
          DEFAULT: '#FFB44A',
          dim: '#D08F2E'
        },
        red: {
          DEFAULT: '#FF3D5A',
          dim: '#C42E48'
        },
        // Second Signal design tokens — used ONLY inside /second-signal/* via
        // the .ss-root wrapper. Class names are unique to that namespace so
        // they don't bleed into host UI.
        'bg-deep': '#0F172A',
        'bg-card': '#1E293B',
        'bg-elevated': '#293548',
        'text-primary': '#F1F5F9',
        'text-muted': '#94A3B8',
        'text-dim': '#64748B',
        accent: '#38BDF8',
        bull: {
          DEFAULT: '#16A34A',
          light: '#22C55E'
        },
        bear: {
          DEFAULT: '#DC2626',
          light: '#EF4444'
        },
        warn: '#F59E0B',
        neutral: '#475569',
        'border-default': '#334155'
      },
      fontFamily: {
        display: ['Oxanium', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 217, 160, 0.25)',
        glowAmber: '0 0 24px rgba(255, 180, 74, 0.3)',
        glowRed: '0 0 24px rgba(255, 61, 90, 0.3)'
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        pulse2: 'pulse2 2s ease-in-out infinite',
        slideUp: 'slideUp 0.3s ease-out',
        fadeIn: 'fadeIn 0.4s ease-out'
      }
    }
  },
  plugins: []
};
