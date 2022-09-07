<script setup>
</script>

<template>
  <div id="welcomeImg">
    <div id="welcome-container">
      <router-link :to="'/home'">
        <img
          id="welcomeLogo"
          src="../assets/Elements/7636logo.png"
        >
        <button id="toHomepage">
          <pre>
FRC Team 7636
Robomania
          </pre>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/welcome.scss';
</style>
