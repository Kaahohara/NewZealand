import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
 
  build: {
    outDir: 'dist', // Certifica que os arquivos vão para a pasta dist
    rollupOptions: {
      input: 'index.html', // Certifica que o caminho do HTML está correto
    },
  },
})
