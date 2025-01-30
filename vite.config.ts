import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório de saída do build
    rollupOptions: {
      input: 'index.html', // Garantir que o input seja o index.html
    },
  },
})
