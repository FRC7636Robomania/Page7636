<script setup>
import SideNav from '@/components/SideNav.vue'
import { computed, onMounted } from 'vue'
import resourceJson from '../json/resource.json'
const blocks = computed(() => resourceJson.blocks || null)

onMounted(() => console.log(blocks))
</script>

<template>
  <SideNav />
  <div class="resource">
    <div class="container">
      <div
        id="recap"
        class="resourceBlock"
      >
        <h1
          style="font-size: 80px;"
        >
          {{ blocks[0].name }}
        </h1>
      </div>
      <div
        class="flex"
        style="gap:60px 60px"
      >
        <div
          v-for="(block, index) in blocks.splice(1,3)"
          :id="block.name"
          :key="index"
          class="resourceBlock"
        >
          <h1
            style="font-size: 20px;"
          >
            {{ block.name.slice(0, -10) }} <br> {{ block.name.slice(-10) }}
          </h1>
        </div>
      </div>
      <div
        class="flex"
        style="gap:60px 60px"
      >
        <div
          id="cad"
          class="resourceBlock"
        >
          <h1>
            {{ blocks[blocks.length - 2].name.slice(0, -4) }} <br> {{ blocks[blocks.length - 2].name.slice(-4) }}
          </h1>
        </div>
        <div
          id="channel"
          class="resourceBlock"
        >
          <h1>
            {{ blocks[blocks.length - 1].name }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/resources.scss";
</style>
