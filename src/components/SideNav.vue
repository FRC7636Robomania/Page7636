<template>
  <nav
    v-if="!mobile"
    id="slideNav"
  >
    <ul class="menu">
      <li
        v-for="(link, index) in props.links"
        :key="index"
        class="menuItem"
      >
        <router-link
          v-if="link.title.path"
          :to="`/${link.title.path}`"
          class="title"
        >
          {{ link.title.name }}
        </router-link>
        <div v-else>
          {{ link.title.name }}
        </div>
        <ul v-if="link.subTitle">
          <li
            v-for="subTitleIndex in link.subTitle.path.length"
            :key="subTitleIndex"
            class="menuItem"
          >
            <router-link
              :to="`/${link.subTitle.path[subTitleIndex - 1]}`"
              class="subTitle"
            >
              {{ link.subTitle.name[subTitleIndex - 1] }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <nav v-if="mobile">
    <ul class="menu">
      <li
        v-for="(link, index) in props.links"
        :key="index"
        class="menuItem"
      >
        <router-link
          v-if="link.title.path"
          :to="`/${link.title.path}`"
          class="title"
        >
          {{ link.title.name }}
        </router-link>
        <div v-else>
          {{ link.title.name }}
        </div>
        <ul v-if="link.subTitle">
          <li
            v-for="subTitleIndex in link.subTitle.path.length"
            :key="subTitleIndex"
            class="menuItem"
          >
            <router-link
              :to="`/${link.subTitle.path[subTitleIndex - 1]}`"
              class="subTitle"
            >
              {{ link.subTitle.name[subTitleIndex - 1] }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    default: null,
  },
})
onMounted(() => console.log(props))
const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/slideNav.scss";
</style>
