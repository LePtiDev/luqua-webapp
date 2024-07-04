import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    VueDevTools(),
    Components({
      dts: true,
      dirs: ['src/components'],
      directoryAsNamespace: true,
      collapseSamePrefixes: false
    })
  ]
})
