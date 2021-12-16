import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// ES6 shim for __dirname (but use single underscore or we have a conflict)
import { fileURLToPath } from 'url'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(_dirname, './src')
  },
  build: {
    lib: {
      entry: path.resolve(_dirname, 'src/App.vue'),
      name: 'Navigation',
      fileName: (format) => `Navigation.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      //external: ['vue'],
      //output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
      // external: ["vue"],
      output: [{
        format: "es",
        esModule: true,
        exports: "named",
        /*globals: {
          vue: "Vue"
        }*/
      }, {
        format: "umd",
        inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }],
    }
  },
  plugins: [vue()]
})
