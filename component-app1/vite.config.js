import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/HelloDiv1.vue'),
      // entry: path.resolve(__dirname, 'src/Application1.vue'),
      name: 'Application1',
      fileName: (format) => `Application1.${format}.js`
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
        globals: {
          vue: "Vue"
        }
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
