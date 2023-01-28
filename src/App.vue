<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header v-if="$route.path !='/' && $route.path != '/404'" />
  <router-view />
  <Footer v-if="$route.path !='/' && $route.path != '/404'" />
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
</style>
