import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Kurmanbekk/', // имя твоего репозитория
  plugins: [react()],
})

