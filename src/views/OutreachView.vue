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
const links = ref([])
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
    let group = {
      title: {
        path: '',
        name: '',
      },
      subTitle: {
        path: [],
        name: [],
      },
    }
    let yearLinkPath = []
    let yearLinkName = []
    let currTime = outreach.value[0].time.slice(0, 4)
    outreach.value.forEach((item, index) => {
      if (item.time.slice(0, 4) !== currTime) {
        group = {
          title: {
            path: `outreach/year${currTime}/${outreach.value[index - yearLinkName.length].id}`,
            name: currTime,
          },
          subTitle: {
            path: yearLinkPath,
            name: yearLinkName,
          },
        }
        links.value.push(group)
        currTime = item.time.slice(0, 4)
        yearLinkPath = [`outreach/year${currTime}/${item.id}`]
        yearLinkName = [item.title]
      } else {
        yearLinkPath.push(`outreach/year${currTime}/${item.id}`)
        yearLinkName.push(item.title)
      }
    })
    group = {
      title: {
        path: `outreach/year${currTime}/${outreach.value[outreach.value.length - yearLinkName.length].id}`,
        name: currTime,
      },
      subTitle: {
        path: yearLinkPath,
        name: yearLinkName,
      },
    }
    links.value.push(group)
    console.log(links.value)
  }, 2000)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/outreach.scss";
</style>
