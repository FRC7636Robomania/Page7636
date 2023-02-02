<template>
  <div
    id="header-banner"
    class="position-fixed"
    :class="{'blue':scrollNav || clickBar}"
  >
    <v-row class="align-center justify-center">
      <v-col lg="1" md="2" sm="2" xs="2" cols="2">
        <router-link :to="'/home'">
          <img
            id="header-logo"
            class="h-auto w-100 position-relative;"
            :src="require('../assets/Elements/7636logo.png')"
          >
        </router-link>
      </v-col>
      <v-col
        v-if="!mobile"
        id="header-toolbar"
        cols="8"
        class="position-relative d-flex align-center justify-content-evenly text-uppercase"
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
        md="9"
        lg="3"
      >
        <div
          id="searchBar"
          class="position-relative"
        >
          <input
            id="keyIn"
            class="w-100 rounded-xl"
            type="text"
          >
          <img
            id="searchBtn"
            class="position-absolute"
            src="../assets/Elements/Icon/icon-search.png"
          >
        </div>
      </v-col>
      <v-col cols="1" v-if="mobile" class="w-100 h-auto">
        <i class="fi fi-br-menu-burger" @click="clickBarEvent" />
      </v-col>
    </v-row>
    <div v-if="clickBar && mobile" class="menuMobile">
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
  <div id="header-image" style="width: 100vw;">
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
  <div id="color-lump" />
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
const clickBar = ref(false)
const menu = computed(() => store.$state.menu || null)
const slideshow = computed(() => store.$state.slideshow || ['default.png'])
const routerName = router => {
  if (router === 'news_year') return 'news'
  if (router === 'outreach_event') return 'outreach'
  if (router === 'sponsors_level') return 'sponsors'
  else return router
}
const checkScreen = () => { window.innerWidth <= 1100 ? mobile.value = true : mobile.value = false }
const checkScroll = () => { window.scrollY > 20 ? scrollNav.value = true : scrollNav.value = false }
const clickBarEvent = () => { clickBar.value = !clickBar.value }

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
