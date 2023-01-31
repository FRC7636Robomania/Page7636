import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import common from './js/common'
import PrimeVue from 'primevue/config'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { createPinia } from 'pinia'

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeflex/primeflex.css'
import 'swiper/swiper-bundle.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

const app = createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(vuetify)
  .use(pinia)
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)

common.components.forEach(
  component => {
    app.component(component.name, component)
  },
)

app.mount('#app')
