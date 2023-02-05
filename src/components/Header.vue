<template>
  <div
    id="header-banner"
    class="position-fixed pa-3"
  >
    <v-row
      class="elements align-center justify-space-between"
      style="transition: 1s;"
      :class="{'blue': clickRight || scrollNav}"
    >
      <v-col
        v-if="mobile"
        cols="2"
      >
        <div class="space text-center">
          <i
            class="fi fi-br-menu-burger"
            style="font-size: 3rem;"
            @click="clickRightEvent"
          />
        </div>
      </v-col>
      <v-col
        cols="3"
        md="1"
        lg="1"
        class="text-center"
      >
        <router-link :to="'/home'">
          <img
            id="header-logo"
            class="h-auto w-100"
            :src="require('../assets/Elements/7636logo.png')"
          >
        </router-link>
      </v-col>
      <v-col
        v-if="!mobile"
        id="header-toolbar"
        cols="7"
        lg="8"
        class="d-flex align-center justify-content-evenly text-uppercase"
      >
        <router-link
          v-for="list in menu"
          :key="list"
          :to="list.to"
          class="menu-item text-decoration-none"
        >
          {{ list.label }}
        </router-link>
      </v-col>
      <v-col
        v-if="!mobile"
        cols="7"
        md="3"
        lg="3"
      >
        <div
          id="searchBar"
          class="position-relative w-100 h-100"
        >
          <input
            id="keyIn"
            class="w-100 h-100 rounded-xl"
            type="text"
          >
          <img
            id="searchBtn"
            class="position-absolute"
            src="../assets/Elements/Icon/icon-search.png"
          >
        </div>
      </v-col>
      <v-col
        v-if="mobile"
        cols="2"
        class="w-100 h-auto d-flex align-center justify-center"
      >
        <i
          class="fi fi-br-menu-burger"
          style="font-size: 3rem;"
          @click="clickRightEvent"
        />
      </v-col>
    </v-row>
    <div
      class="menuMobile w-100"
      :class="{'active': clickRight}"
    >
      <p
        v-for="list in menu"
        :key="list"
      >
        <router-link
          :to="list.to"
          class="text-decoration-none"
        >
          {{ list.label }}
        </router-link>
      </p>
    </div>
  </div>
  <div
    id="header-image"
    class="w-100"
  >
    <template v-if="routerName($route.name) === 'home'">
      <swiper
        :effect="'fade'"
        :slides-per-view="'auto'"
        :space-between="30"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :centered-slides="true"
        :loop="true"
        style="height:600px; width:100%; z-index: -1;"
      >
        <swiper-slide
          v-for="(image, index) in slideshow"
          :key="index"
          class="gradient-mask d-flex align-center justify-center"
          :style="{background: 'url('+require(`../assets/Elements/Header/${image}`)+')'}"
        >
          <p
            id="homeTitle"
            class="text-center"
          >
            Robomania, Team 7636 is a FRC team located at Taichung, Taiwan.
          </p>
        </swiper-slide>
      </swiper>
    </template>
    <template v-else>
      <div
        class="gradient-mask w-100 d-flex align-center justify-center position-relative"
        :style="{background: 'url('+require('../assets/Elements/Header/' + routerName($route.name) + '.png')+')'}"
      >
        <p
          id="menuSelected"
          class="text-center text-uppercase"
        >
          {{ routerName($route.name) }}
        </p>
      </div>
    </template>
  </div>
  <div
    id="color-lump"
    class="w-100"
  />
</template>

<script setup>
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { computed, onBeforeMount, ref } from 'vue'
import { useHeaderStore } from '@/js/stores/componentsData'
SwiperCore.use([Autoplay, EffectFade])
const store = useHeaderStore()
store.fetchData()

const mobile = ref(false)
const scrollNav = ref(null)
const clickRight = ref(false)
// const clickLeft = ref(false)
const menu = computed(() => store.$state.menu || null)
const slideshow = computed(() => store.$state.slideshow || ['default.png'])
const routerName = router => {
  if (router === 'news_year') return 'news'
  if (router === 'outreach_event') return 'outreach'
  if (router === 'sponsors_level') return 'sponsors'
  else return router
}
const checkScreen = () => { window.innerWidth < 970 ? mobile.value = true : mobile.value = false; clickRight.value = false }
const checkScroll = () => { window.scrollY > 20 ? scrollNav.value = true : scrollNav.value = false }
const clickRightEvent = () => {
  clickRight.value = !clickRight.value
  const element = document.querySelector('.elements')
  const menu = document.querySelector('.menuMobile')
  menu.style.top = menu.offsetTop === element.clientHeight ? '-400%' : element.clientHeight + 'px'
}

// const clickLeftEvent = () => { clickLeft.value = !clickLeft.value }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  window.addEventListener('scroll', checkScroll)
  checkScreen()
})

</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/header.scss';
@import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');
</style>
