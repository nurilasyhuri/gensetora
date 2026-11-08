/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        genset: {
          tosca: '#009498',
          'tosca-hover': '#007D81',
          'tosca-dark': '#063336',
          'tosca-surface': '#0A4347',
          navy: '#0A4347',
          'navy-dark': '#063336',
          'navy-surface': '#0A4347',
          yellow: '#F5B82E',
          'yellow-hover': '#E5A71D',
          white: '#FFFFFF',
          mist: '#EFF8F8',
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
