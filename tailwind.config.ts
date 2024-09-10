import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './app/(*)/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        IntegralCF: ['var(--IntegralCF)'],
        Montserrat: ['var(--Montserrat)'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "strong-purple": "#7F56D9",
        "main-purple": "#6941C6",
        "light-purple": "#F9F5FF",
        "main-gray": "#475467",
        "strong-gray": "#0C111D"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      width: {
        'zero': '0px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "banner": {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
              transform: 'translateX(-51%)'
          }
        },
        "banner-full": {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
              transform: 'translateX(-100%)'
          }
        },
        "check-animate": {
          '0%': {
            left: '2.5%'
          },
          '20%': {
            left: '75%',
          },
          '100%': {
            left: '75%',
          },
        },
        "match": {
          '0%': {
            opacity: '0',
          },
          '20%': {
            opacity: '0',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
        },
        "change-background": {
          '0%': {
            backgroundColor: 'white',
          },
          '20%': {
            backgroundColor: '#EBEBEB80',
          },
          '30%': {
            backgroundColor: '#EBEBEB80',
          },
          '32%': {
            backgroundColor: 'white',
          },
          '100%': {
            backgroundColor: 'white',
          }
        },
        'small-check': {
          '0%': {
            opacity: '0',
          },
          '20%': {
            opacity: '1',
          },
          '30%': {
            opacity: '1',
          },
          '32%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          }
        },
        'expandToFullWidth': {
          'from': {
            width: '50%',
          },
          'to': {
            width: '100%',
          }
        },
        "shrinkToZero": {
          'from': { opacity: '0' },
          'to': { width: '0%', opacity: '0', display: 'none' }
        },
        "slide": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "dashboard-bounce": {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5px, 5px) rotate(1deg)' },
          '50%': { transform: 'translate(-5px, 10px) rotate(-1deg)' },
          '75%': { transform: 'translate(-10px, 5px) rotate(0deg)' },
        },
        "scrollY": {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // Adjust this based on the content height
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "banner": "banner 16s linear infinite",
        "banner-full": "banner-full 32s linear infinite",
        "check-animate": "check-animate 5s ease-out infinite",
        "match": "match 5s ease-out infinite",
        "change-background": "change-background 8s ease-out infinite",
        "small-check": "small-check 8s ease-out infinite",
        "expandToFullWidth": "expandToFullWidth 0.5s forwards",
        "shrinkToZero": "shrinkToZero 0.5s forwards",
        "slide": 'slide 20s linear infinite',
        "dashboard-bounce": 'dashboard-bounce 20s ease-in-out infinite',
        "scrollY": 'scrollY 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config