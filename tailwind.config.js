export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        'primary-hover': '#535bf2',
        background: '#0f172a',
        text: '#e2e8f0'
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px -10px var(--primary)' },
          '100%': { boxShadow: '0 0 30px -5px var(--primary)' },
        }
      },
    },
  },
  plugins: [],
};