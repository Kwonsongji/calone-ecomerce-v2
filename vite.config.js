// vite config

// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Change this to your Next.js development server
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'out', // Change this to the folder you want to use for production builds
  },
};
