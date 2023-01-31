<template>
  <div id="header-banner">
    <div>
      <router-link :to="'/home'">
        <img
          id="header-logo"
          :src="require('../assets/Elements/7636logo.png')"
        >
      </router-link>
      <div id="header-toolbar">
        <router-link
          v-for="list in menu"
          :key="list"
          :to="list.to"
          class="menu-item"
        >
          {{ list.label }}
        </router-link>
      </div>
    </div>
    <div id="searchBar">
      <input
        id="keyIn"
        type="text"
      >
      <img
        id="searchBtn"
        src="../assets/Elements/Icon/icon-search.png"
      >
    </div>
  </div>
  <div id="header-image">
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
          class="gradient-mask"
          :style="{background: 'url('+require(`../assets/Elements/Header/${image}`)+')'}"
        >
          <p
            id="homeTitle"
          >
            Robomania, Team 7636 is a FRC team located at Taichung, Taiwan.
          </p>
        </swiper-slide>
      </swiper>
    </template>
    <template v-else>
      <div
        class="gradient-mask"
        :style="{background: 'url('+require('../assets/Elements/Header/' + routerName($route.name) + '.png')+')'}"
      >
        <p id="menuSelected">
          {{ routerName($route.name) }}
        </p>
      </div>
    </template>
  </div>
  <div id="color-lump" />
</template>

<script setup>
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { computed } from 'vue'
import { useHeaderStore } from '@/js/stores/componentsData'
SwiperCore.use([Autoplay, EffectFade])
const store = useHeaderStore()
store.fetchData()

const menu = computed(() => store.$state.menu || null)
const slideshow = computed(() => store.$state.slideshow || ['default.png'])
const routerName = router => {
  if (router === 'news_year') return 'news'
  if (router === 'outreach_event') return 'outreach'
  if (router === 'sponsors_level') return 'sponsors'
  else return router
}

</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/header.scss';
</style>
