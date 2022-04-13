import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'
import components from 'unplugin-vue-components/vite'
import autoimport from 'unplugin-auto-import/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import windicss from 'vite-plugin-windicss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inspect(),
    components({ dts: 'src/components.d.ts' }),
    autoimport({ imports: ['vue', 'vue-i18n', 'vue-router'] ,dts: 'src/auto-imports.d.ts' }),
    vueI18n({
      include: resolve(__dirname, './locales/**')
    }),
    windicss()
  ]
})
