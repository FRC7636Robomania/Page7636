<script setup>
import slideNav from '@/components/SideNav.vue'
import sponsorJson from '@/assets/json/sponsors.json'
import { computed, onBeforeMount, ref } from 'vue'
const sponsors = computed(() => sponsorJson || null)
const links = ref([])
onBeforeMount(() => {
  const group = {
    title: {
      path: null,
      name: 'partnership',
    },
    subTitle: {
      path: ['sponsors/platinum', 'sponsors/gold', 'sponsors/silver', 'sponsors/bronze'],
      name: ['platinum', 'gold', 'silver', 'bronze'],
    },
  }
  links.value.push(group)
})
</script>

<template>
  <slideNav
    :links="links"
  />
  <div class="sponsors">
    <div
      id="platinum"
      class="levelBlock platinum"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <a
          v-if="sponsor.level === 'platinum'"
          :href="sponsor.path"
        >
          <img
            class="sponsorsLogo"
            :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
            :title="sponsor.logo.slice(0, -4)"
          >
        </a>
      </template>
    </div>
    <div
      id="gold"
      class="levelBlock gold"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <a
          v-if="sponsor.level === 'gold'"
          :href="sponsor.path"
        >
          <img
            class="sponsorsLogo"
            :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
            :title="sponsor.logo.slice(0, -4)"
          >
        </a>
      </template>
    </div>
    <div
      id="silver"
      class="levelBlock silver"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <a
          v-if="sponsor.level === 'silver'"
          :href="sponsor.path"
        >
          <img
            class="sponsorsLogo"
            :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
            :title="sponsor.logo.slice(0, -4)"
          >
        </a>
      </template>
    </div>
    <div
      id="bronze"
      class="levelBlock bronze"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <a
          v-if="sponsor.level === 'bronze'"
          :href="sponsor.path"
        >
          <img
            class="sponsorsLogo"
            :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
            :title="sponsor.logo.slice(0, -4)"
          >
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/sponsors.scss";
</style>
