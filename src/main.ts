import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'

// import d'objet généré par le plugin vite i18n a partir des fichiers de traductions
import messages from '@intlify/vite-plugin-vue-i18n/messages'

// import de feuille css généré par le plugin windicss
import 'virtual:windi.css'

// outil windicss pour ajouter des classes directement depuis les devtools
import 'virtual:windi-devtools'

const app = createApp(App)

const pinia = createPinia()

const i18n = createI18n({
  locale: 'fr',
  messages,
})

app.use(i18n)
app.use(pinia)
app.mount('#app')
