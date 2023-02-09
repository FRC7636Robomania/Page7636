<template>
  <div
    id="header-banner"
    class="position-fixed w-100"
  >
    <v-row
      class="elements w-100 align-center justify-space-between"
      style="transition: .5s;"
      :class="{'blue': clickRight || scrollNav || clickLeft}"
    >
      <v-col
        v-if="mobile && quickLinksPage.includes(routerName($route.name))"
        cols="2"
      >
        <div class="space text-center">
          <i
            class="fi fi-br-menu-burger"
            style="font-size: 3rem;"
            :class="{'pe-none opacity-50': clickRight}"
            @click="clickEvent('left')"
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
          :class="{'pe-none opacity-50': clickLeft}"
          @click="clickEvent('right')"
        />
      </v-col>
    </v-row>
    <div class="menuMobile w-100">
      <template v-if="clickRight">
        <p
          v-for="list in menu"
          :key="list"
        >
          <router-link
            :to="list.to"
            class="text-decoration-none"
            @click="clickEvent('right')"
          >
            {{ list.label }}
          </router-link>
        </p>
      </template>
      <template v-if="clickLeft">
        <slideNav
          :links="links"
        />
      </template>
    </div>
  </div>
  <div
    id="header-image"
    class="w-100"
    style="height: 75vh;"
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
        style="z-index: -1; height: 75vh;"
      >
        <swiper-slide
          v-for="(image, index) in slideshow"
          :key="index"
          class="gradient-mask d-flex align-center justify-center"
          :style="{background: 'url('+ imageUrl(image) +')'}"
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
        :style="{background: 'url('+ imageUrl(store.$state.background[routerName($route.name)]) +')'}"
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
import slideNav from '@/components/SideNav.vue'
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { computed, onBeforeMount, ref, getCurrentInstance } from 'vue'
import { useHeaderStore } from '@/js/stores/componentsData'
SwiperCore.use([Autoplay, EffectFade])
const links = computed(() => store.$state.links || null)
const store = useHeaderStore()
store.fetchData()

const { proxy } = getCurrentInstance()
const mobile = ref(false)
const scrollNav = ref(null)
const clickRight = ref(false)
const clickLeft = ref(false)
const menu = computed(() => store.$state.menu || null)
const slideshow = computed(() => store.$state.slideshow || ['default.png'])
const quickLinksPage = ['outreach', 'sponsors']
const routerName = router => {
  let res = router
  if (res === 'news_year') res = 'news'
  if (res === 'outreach_event') res = 'outreach'
  if (res === 'sponsors_level') res = 'sponsors'
  if (quickLinksPage.includes(res)) store.fetchLinks(res)
  return res
}
const checkScreen = () => { window.innerWidth < 970 ? mobile.value = true : mobile.value = false; clickRight.value = false }
const checkScroll = () => { window.scrollY > 20 ? scrollNav.value = true : scrollNav.value = false }
const clickEvent = proxy.$common.throttle(button => {
  if (button === 'left' && !clickRight.value) {
    if (clickLeft.value) {
      clickLeft.value = !clickLeft.value
    } else clickLeft.value = !clickLeft.value
  }
  if (button === 'right' && !clickLeft.value) {
    if (clickRight.value) {
      clickRight.value = !clickRight.value
    } else clickRight.value = !clickRight.value
  }
  const element = document.querySelector('.elements')
  const menu = document.querySelector('.menuMobile')
  const top = element.clientHeight - 50
  menu.style.top = menu.offsetTop === top ? '-400%' : top + 'px'
}, 1000)

const imageUrl = url => {
  return proxy.$common.fetchImg(url) ? proxy.$common.fetchImg(url) : require('@/assets/Elements/default.png')
}

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
