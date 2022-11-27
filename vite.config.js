import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/user': 'http://localhost:5000', // the address that u serve in the backend 
    },
  },
  plugins: [react()],
})
