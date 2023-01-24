import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import common from './js/common'
import PrimeVue from 'primevue/config'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeflex/primeflex.css'
import 'swiper/swiper-bundle.css'

const app = createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)

common.components.forEach(
  component => {
    app.component(component.name, component)
  },
)

app.mount('#app')
