<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header v-if="$route.path !='/' && $route.path != '/404' && $route.path != '/backStand'" />
  <router-view />
  <Footer v-if="$route.path !='/' && $route.path != '/404' && $route.path != '/backStand'" />
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
</style>
