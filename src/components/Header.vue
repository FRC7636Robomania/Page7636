<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu/sfc'
import InputText from 'primevue/inputtext'

const items = ref([
  {
    label: 'MEMBERS',
    to: '/members',
  },
  {
    label: 'OUTREACH',
    to: '/outreach',
  },
  {
    label: 'SPONSORS',
    to: '/sponsors',
  },
  {
    label: 'NEWS',
    to: '/news',
  },
  {
    label: 'RESOURCES',
    to: '/resources',
  },
  {
    label: 'CONTACT',
    to: '/contact',
  },
])
</script>

<template>
  <div id="header-banner">
    <router-link :to="'/home'">
      <img
        id="header-logo"
        :src="require('../assets/Elements/7636logo.png')"
      >
    </router-link>
    <TabMenu
      id="header-toolbar"
      :model="items"
    />
    <InputText
      v-model="searchValue"
      type="text"
    />
  </div>
  <div id="header-image">
    <div id="gradient-mask">
      <p id="menuSelected">
        {{ $route.name }}
      </p>
    </div>
  </div>
  <div id="color-lump" />
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/header.scss';
</style>
