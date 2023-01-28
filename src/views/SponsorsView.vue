<script setup>
import sponsorJson from '@/assets/json/sponsors.json'
import { computed } from 'vue'
const sponsors = computed(() => sponsorJson || null)
</script>

<template>
  <div class="sponsors">
    <template
      v-for="(sponsor, index) in sponsors"
      :key="index"
    >
      <a :href="sponsor.path">
        <img
          class="sponsorsLogo"
          :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
          :title="sponsor.logo.slice(0, -4)"
        >
      </a>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/sponsors.scss";
</style>
