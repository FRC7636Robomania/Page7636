<script setup>
import SideNav from '@/components/SideNav.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import resourceJson from '@/assets/json/resource.json'
const blocks = computed(() => resourceJson.blocks || null)
const router = useRouter()
const routerTo = path => router.push(path)

</script>

<template>
  <SideNav />
  <div class="resource">
    <div
      v-if="blocks.length > 0"
      class="container"
    >
      <div class="row">
        <div
          id="recap"
          class="resourceBlock col"
        >
          <h1
            style="font-size: 80px;"
          >
            {{ blocks[0].name }}
          </h1>
        </div>
      </div>
      <div class="row g-2">
        <div
          v-for="(block, index) in blocks.slice(1, 4)"
          :key="index"
          class="resourceBlock col"
        >
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
          <h1>
            {{ blocks[blocks.length - 2].name.slice(0, -4) }} <br> {{ blocks[blocks.length - 2].name.slice(-4) }}
          </h1>
          <button
            class="p-white"
            @click="routerTo('/home')"
          >
            CLICK
          </button>
        </div>
        <div
          id="channel"
          class="resourceBlock col-5"
        >
          <h1>
            {{ blocks[blocks.length - 1].name.slice(0, 8) }} <br> {{ blocks[blocks.length - 1].name.slice(8) }}
          </h1>
          <button
            class="p-white"
            @click="routerTo('/home')"
          >
            CLICK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/resources.scss";
</style>
