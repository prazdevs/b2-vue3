import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'
import components from 'unplugin-vue-components/vite'
import autoimport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inspect(),
    components({ dts: 'src/components.d.ts' }),
    autoimport({ imports: ['vue'] ,dts: 'src/auto-imports.d.ts' })
  ]
})
