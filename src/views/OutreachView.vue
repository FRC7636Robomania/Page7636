<script setup>
import { computed } from 'vue'
import outreachJson from '../assets/json/outreach.json'
const outreach = computed(() => outreachJson || null)
</script>

<template>
  <div class="outreach">
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in outreach.items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <div class="text-h6 time">
          {{ item.time.replace(/\//g, '.') }}
        </div>
        <div class="text-h6 title">
          {{ item.title }}
        </div>
        <p>{{ item.description }}</p>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/outreach.scss";
</style>
