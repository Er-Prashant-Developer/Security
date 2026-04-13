/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fc',
          100: '#e1e9f8',
          200: '#c3d3f1',
          300: '#95b3e6',
          400: '#608cd8',
          500: '#3a6bc8',
          600: '#2851a7',
          700: '#214187',
          800: '#1e3871',
          900: '#0a0f1c', // Deep Navy
        },
        gold: {
          400: '#f1d570',
          500: '#d4af37', // Premium Gold
          600: '#b8942b',
        },
        neonBlue: {
          400: '#4dffff',
          500: '#00f3ff', // Neon Blue
          600: '#00cddd',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 243, 255, 0.5)',
        goldGlow: '0 0 20px rgba(212, 175, 55, 0.4)',
      }
    },
  },
  plugins: [],
}
