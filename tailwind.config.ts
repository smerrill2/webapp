// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Simplified to cover all source files
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, black, #006400)', // Adjust colors as needed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Menlo', 'monospace'],
      },
      keyframes: {
        slideIn: {
          '0%': { 
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards'
      },
      transitionTimingFunction: {
        'bounce-ease': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      }
    },
  },
  plugins: [],
};

export default config;