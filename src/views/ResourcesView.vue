<template>
  <SideNav v-if="!mobile" />
  <div class="resource">
    <div
      v-if="blocks.length > 0"
      class="container"
    >
      <v-row>
        <v-col>
          <swiper
            :observer="true"
            :observe-parents="true"
            :slides-per-view="1"
            :space-between="10"
            :pagination="{ clickable: true, dynamicBullets: false }"
            :loop="false"
            :autoplay="{
              delay: 10000,
              disableOnInteraction: false,
            }"
            class="resourceBlock d-flex justify-center align-center flex-column overflow-hidden text-center rounded-xl"
          >
            <swiper-slide
              v-for="(image, index) in recap"
              :key="index"
            >
              <div class="imageBlock">
                <img :src="require(`@/assets/Elements/Resource/${image}`)">
              </div>
            </swiper-slide>
            <h1
              class="recapText"
            >
              {{ blocks[0].name }}
            </h1>
          </swiper>
        </v-col>
      </v-row>
      <div class="seasonIntro">
        <div
          v-for="(block, index) in blocks.slice(1, 4)"
          :key="index"
          class="d-flex justify-center align-center flex-column overflow-hidden text-center rounded-xl"
          style="padding: 10px; min-width: 300px;"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${block.image}`)">
          </div>
          <h1
            class="text"
            style="font-size: 18px;"
          >
            {{ block.name.slice(0, -10) }} <br> {{ block.name.slice(-10) }}
          </h1>
        </div>
      </div>
      <v-row>
        <v-col
          id="cad"
          cols="12"
          sm="7"
          md="7"
          lg="7"
          class="resourceBlock d-flex justify-center align-center flex-column overflow-hidden text-center rounded-xl"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${blocks[blocks.length - 2].image}`)">
          </div>
          <h1 class="text">
            {{ blocks[blocks.length - 2].name.slice(0, -4) }} <br> {{ blocks[blocks.length - 2].name.slice(-4) }}
            <br>
            <button
              class="p-white"
              onclick="window.location.href='http://gg.gg/7636CAD'"
            >
              CLICK
            </button>
          </h1>
        </v-col>
        <v-col
          id="channel"
          cols="12"
          sm="5"
          md="5"
          lg="5"
          class="resourceBlock d-flex justify-center align-center flex-column overflow-hidden text-center rounded-xl"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${blocks[blocks.length - 1].image}`)">
          </div>
          <h1 class="text">
            {{ blocks[blocks.length - 1].name.slice(0, 8) }} <br> {{ blocks[blocks.length - 1].name.slice(8) }}
            <br>
            <button
              class="p-white"
              onclick="window.location.href='https://www.youtube.com/@FRC7636Robomania';"
            >
              CLICK
            </button>
          </h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import SideNav from '@/components/SideNav.vue'
import { computed, ref, onBeforeMount } from 'vue'
import { useResourcesStore } from '@/js/stores/viewsData'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])
const blocks = computed(() => store.$state.blocks || null)
const recap = computed(() => store.$state.recap || null)
const store = useResourcesStore()
store.fetchData()

const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/resources.scss";
</style>
