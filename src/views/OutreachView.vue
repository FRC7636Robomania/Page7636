<script setup>
import slideNav from '../components/SideNav.vue'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import outreachJson from '../assets/json/outreach.json'
const outreach = computed(() => outreachJson || null)
const links = ref([])
onMounted(() => { console.log(links.value) })
onBeforeMount(() => {
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
  let currTime = outreach.value.items[0].time.slice(0, 4)
  outreach.value.items.forEach((item, index) => {
    if (item.time.slice(0, 4) !== currTime) {
      group = {
        title: {
          path: `outreach/year${currTime}/${outreach.value.items[index - yearLinkName.length].id}`,
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
      path: `outreach/year${currTime}/${outreach.value.items[outreach.value.items.length - yearLinkName.length].id}`,
      name: currTime,
    },
    subTitle: {
      path: yearLinkPath,
      name: yearLinkName,
    },
  }
  links.value.push(group)
  console.log(links.value)
})
</script>

<template>
  <slideNav
    :links="links"
  />
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

<style scoped lang="scss">
@import "@/assets/scss/views/outreach.scss";
</style>
