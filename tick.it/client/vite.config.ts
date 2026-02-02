import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  // Nur für GitHub Pages den base-Pfad setzen
  base: mode === 'production' && process.env.GITHUB_ACTIONS
    ? '/tick-it/' 
    : '/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    
    rollupOptions: {
      input: {
        main: 'index.html',
        impressum: 'impressum.html',
      },
    },
  },
  
  publicDir: 'public',
}));