<template>
  <slideNav
    v-if="!mobile"
    :links="links"
  />
  <div class="outreach">
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in outreach"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <div class="text-h6 time">
          {{ item.time.replace(/\//g, '.') }}
        </div>
        <div
          :id="`year${item.time.slice(0, 4)}-${item.id}`"
          class="text-h6 title"
        >
          {{ item.title }}
        </div>
        <p>{{ item.description }}</p>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
import slideNav from '../components/SideNav.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useOutreachStore } from '@/js/stores/viewsData'
const outreach = computed(() => store.$state.items || null)
const links = computed(() => store.$state.links || null)
const store = useOutreachStore()
const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

onBeforeMount(() => {
  store.fetchData()
  setTimeout(() => {
    store.buildSlideNavbar()
  }, 2000)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/outreach.scss";
</style>
