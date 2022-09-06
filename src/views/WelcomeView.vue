<script setup>
</script>

<template>
  <div id="welcomeImg">
    <router-link :to="'/home'">
      <button id="toHomepage">
        <pre>
FRC Team 7636
Robomania
        </pre>
      </button>
    </router-link>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/welcome.scss';
</style>
