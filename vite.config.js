import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; // Import path module

// Define __dirname using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Continue with your Vite configuration...

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [react()],
})
