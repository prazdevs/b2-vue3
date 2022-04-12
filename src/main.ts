import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const app = createApp(App)

const pinia = createPinia()

const i18n = createI18n({
  locale: 'fr',
  messages,
})

app.use(i18n)
app.use(pinia)
app.mount('#app')
