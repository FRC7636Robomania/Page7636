<template>
  <nav id="slideNav">
    <ul class="menu">
      <li
        v-for="(link, index) in props.links"
        :key="index"
        class="menuItem"
      >
        <router-link :to="`/${link.component}/${link.name}`">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    default: null,
  },
})
onMounted(() => console.log(props))
</script>

<style lang="scss" scoped>
@import "../assets/scss/slideNav.scss";
</style>
