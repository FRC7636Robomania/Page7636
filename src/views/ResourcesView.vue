<template>
  <SideNav />
  <div class="resource">
    <div
      v-if="blocks.length > 0"
      class="container"
    >
      <div class="row">
        <div class="slider col">
          <div class="slides">
            <input
              v-for="index in 4"
              :id="`radio${index}`"
              :key="index"
              type="radio"
              name="radio-btn"
            >
            <div
              v-for="(image, index) in recap"
              :key="index"
              :class="{'first': index == 0 }"
              class="slide"
            >
              <img :src="require(`@/assets/Elements/Resource/${image}`)">
              <h1>{{ blocks[0].name }}</h1>
            </div>
            <div class="navigation-auto">
              <div
                v-for="index in 4"
                :key="index"
                :class="`auto-btn${index}`"
              />
            </div>
          </div>
          <div class="navigation-manual">
            <label
              v-for="index in 4"
              :key="index"
              :for="`radio${index}`"
              class="manual-btn"
            />
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div
          v-for="(block, index) in blocks.slice(1, 4)"
          :key="index"
          class="resourceBlock col"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${block.image}`)">
          </div>
          <h1
            style="font-size: 20px;"
          >
            {{ block.name.slice(0, -10) }} <br> {{ block.name.slice(-10) }}
          </h1>
        </div>
      </div>
      <div class="row">
        <div
          id="cad"
          class="resourceBlock col-6"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${blocks[blocks.length - 2].image}`)">
          </div>
          <h1>
            {{ blocks[blocks.length - 2].name.slice(0, -4) }} <br> {{ blocks[blocks.length - 2].name.slice(-4) }}
            <br>
            <button
              class="p-white"
              onclick="window.location.href='http://gg.gg/7636CAD'"
            >
              CLICK
            </button>
          </h1>
        </div>
        <div
          id="channel"
          class="resourceBlock col-4"
        >
          <div class="imageBlock">
            <img :src="require(`@/assets/Elements/Resource/${blocks[blocks.length - 1].image}`)">
          </div>
          <h1>
            {{ blocks[blocks.length - 1].name.slice(0, 8) }} <br> {{ blocks[blocks.length - 1].name.slice(8) }}
            <br>
            <button
              class="p-white"
              onclick="window.location.href='https://www.youtube.com/@FRC7636Robomania';"
            >
              CLICK
            </button>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNav from '@/components/SideNav.vue'
import { computed } from 'vue'
import { useResourcesStore } from '@/js/stores/viewsData'
const blocks = computed(() => store.$state.blocks || null)
const recap = computed(() => store.$state.recap || null)
const store = useResourcesStore()
store.fetchData()
let counter = 1

setInterval(() => {
  document.querySelector('#radio' + counter).checked = true
  counter++
  if (counter > 4) counter = 1
}, 10000)

</script>

<style scoped lang="scss">
@import "@/assets/scss/views/resources.scss";
</style>
