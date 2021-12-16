import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// ES6 shim for __dirname
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  plugins: [vue()]
})
