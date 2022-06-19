<script setup>
</script>

<template>
  <div id="header-banner">
    <img
      id="header-logo"
      :src="require('../assets/7636_logo.jpg')"
    >
    <h1 class="text-white text-wrap">
      FRC #7636
      <br class="d-inline d-sm-none">
      ROBOMANIA
    </h1>
  </div>
  <div id="header-toolbar">
    text
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';

#header-banner {
  align-items: center;
  background: #002b5e;
  display: flex;
  height: 25vh;
  justify-content: center;
  max-width: 100%;
}

#header-logo {
  width: 6rem;
}

#header-toolbar {
  background: #002b5e;
  height: 10vh;
  left: 0px;
  position: sticky;
  top: 0px;
  max-width: 100%;
}
</style>
