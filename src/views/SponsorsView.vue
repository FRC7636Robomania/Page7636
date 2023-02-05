<template>
  <slideNav
    v-if="!mobile"
    :links="links"
  />
  <div class="sponsors">
    <v-row
      id="platinum"
      class="levelBlock platinum align-center justify-center w-100 h-auto"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <v-col
          v-if="sponsor.level === 'platinum'"
          class="text-center pa-5"
        >
          <a :href="sponsor.path">
            <img
              class="sponsorsLogo"
              :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
              :title="sponsor.logo.slice(0, -4)"
            >
          </a>
        </v-col>
      </template>
    </v-row>
    <v-row
      id="gold"
      class="levelBlock gold align-center justify-center w-100 h-auto"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <v-col
          v-if="sponsor.level === 'gold'"
          class="text-center pa-5"
        >
          <a :href="sponsor.path">
            <img
              class="sponsorsLogo"
              :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
              :title="sponsor.logo.slice(0, -4)"
            >
          </a>
        </v-col>
      </template>
    </v-row>
    <v-row
      id="silver"
      class="levelBlock silver align-center justify-center w-100 h-auto"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <v-col
          v-if="sponsor.level === 'silver'"
          class="text-center pa-5"
        >
          <a :href="sponsor.path">
            <img
              class="sponsorsLogo"
              :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
              :title="sponsor.logo.slice(0, -4)"
            >
          </a>
        </v-col>
      </template>
    </v-row>
    <v-row
      id="bronze"
      class="levelBlock bronze align-center justify-center w-100 h-auto"
    >
      <template
        v-for="(sponsor, index) in sponsors"
        :key="index"
      >
        <v-col
          v-if="sponsor.level === 'bronze'"
          class="text-center pa-5"
        >
          <a :href="sponsor.path">
            <img
              class="sponsorsLogo"
              :src="require(`@/assets/Elements/Sponsor/${sponsor.logo}`)"
              :title="sponsor.logo.slice(0, -4)"
            >
          </a>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script setup>
import slideNav from '@/components/SideNav.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useSponsorsStore } from '@/js/stores/viewsData'
const sponsors = computed(() => store.$state.sponsors || null)
const links = ref([])
const store = useSponsorsStore()
store.fetchData()

const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

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

<style scoped lang="scss">
@import "@/assets/scss/views/sponsors.scss";
</style>
