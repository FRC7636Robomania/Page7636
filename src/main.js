import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import common from './js/common'
import PrimeVue from 'primevue/config'

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

const app = createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })

common.components.forEach(
  component => {
    app.component(component.name, component)
  },
)

app.mount('#app')
