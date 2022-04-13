import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'
import components from 'unplugin-vue-components/vite'
import autoimport from 'unplugin-auto-import/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import windicss from 'vite-plugin-windicss'
import pages from 'vite-plugin-pages'
import icons from 'unplugin-icons/vite'
import iconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    inspect(),
    icons(),
    components({ dts: 'src/components.d.ts', resolvers: [iconsResolver()] }),
    autoimport({ imports: ['vue', 'vue-i18n', 'vue-router'] ,dts: 'src/auto-imports.d.ts' }),
    vueI18n({
      include: resolve(__dirname, './locales/**')
    }),
    windicss(),
    pages(),
  ],
  test: {
    environment: 'happy-dom'
  }
})
