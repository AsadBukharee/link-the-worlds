
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
        urdu: ['Jameel Noori Nastaleeq', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8F62D5, #7091E7)',
        'gradient-secondary': 'linear-gradient(to right, #F1AC00, #F7C782)',
        'gradient-card': 'linear-gradient(to bottom right, #FFFFFF, #ECE8F6)',
      },
      boxShadow: {
        'dual-color': '0 4px 20px -2px rgba(143, 98, 213, 0.3), 2px 6px 20px -4px rgba(112, 145, 231, 0.4)',
        'dual-hover': '0 8px 25px -1px rgba(143, 98, 213, 0.4), 2px 10px 25px -3px rgba(112, 145, 231, 0.5)',
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

