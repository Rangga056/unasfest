import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 769px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 3px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 8px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 15px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
        'none': 'none',
      },
      innerShadow: {
        'inner-shadow': 'inset 0 -55px 30px rgba(100, 0, 0, 0.5)',
      },
      color: {
        all: "#1F1E23",
      },
      lineClamp: {
        8: "8",
        9: "9",
        10: "10",
      },
      width: {
        "323": "20.188rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        bungee: ["var(--font-bungee)"],
      },
      colors: {
        "active-blue": "#004AAD",
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
        page: {
          green: "#2A9763",
          white: "#fff7e8",
          black: "#1f1e23",
          lightBlack: "#1F1E23",
          blue: "#004AAD",
          btnBlue: "#2380FC",
          lightblue: "#E0FBFF",
          yellow: "#F3BB1C",
          purple: "#853EB6",
        },
      },
      backgroundImage: {
        "unasfest-committee":
          "url('/assets/images/about-us/unasfest-committee-bg.png')",
        "footer-wave": "url('/assets/images/footer/FooterIntersect.png')",
        "water-pool": "url('/assets/images/about-us/water-bg.jpeg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 3px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 8px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 15px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-2xl': {
          textShadow: '0 25px 25px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
} satisfies Config;

export default config;
