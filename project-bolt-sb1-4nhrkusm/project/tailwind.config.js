/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0b',
          soft: '#101012',
          card: '#0e0e10',
        },
        line: {
          DEFAULT: '#1c1c1f',
          soft: '#161618',
        },
        bone: {
          DEFAULT: '#f5f5f0',
          soft: '#c8c8c2',
          dim: '#8a8a85',
          faint: '#555550',
        },
        accent: '#c5ff3d',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
