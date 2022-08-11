<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu/sfc'
import InputText from 'primevue/inputtext'

const items = ref([
  {
    label: 'Members',
    to: '/members',
  },
  {
    label: 'Outreach',
    to: '/outreach',
  },
  {
    label: 'Sponsors',
    to: '/sponsors',
  },
  {
    label: 'News',
    to: '/news',
  },
  {
    label: 'Resources',
    to: '/resources',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
])
</script>

<template>
  <div id="header-banner">
    <router-link :to="'/home'">
      <img
        id="header-logo"
        :src="require('../assets/Elements/7636_logo.jpg')"
      >
    </router-link>
    <TabMenu
      id="header-toolbar"
      :model="items"
    />
    <InputText type="text" v-model="searchValue" />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/header.scss';
</style>
