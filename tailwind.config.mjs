/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        genset: {
          navy: '#101C2B',
          'navy-dark': '#0B131E',
          'navy-surface': '#162538',
          yellow: '#F5B82E',
          'yellow-hover': '#E5A71D',
          white: '#FFFFFF',
          mist: '#F3F6FA',
          slate: '#64748B',
          dark: '#0F172A',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
