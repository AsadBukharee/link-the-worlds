
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#8F62D5',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F1AC00',
          foreground: '#000000'
        },
        destructive: {
          DEFAULT: '#EA4D4D',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#ECE8F6',
          foreground: '#003F58'
        },
        accent: {
          DEFAULT: '#F75624',
          foreground: '#FFFFFF'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#003F58'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#003F58'
        }
      },
      fontFamily: {
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8F62D5, #7091E7)',
        'gradient-card': 'linear-gradient(to bottom right, #FFFFFF, #ECE8F6)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "card-hover": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        "card-hover": "card-hover 0.3s ease forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
