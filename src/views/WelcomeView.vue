<script setup>
</script>

<template>
  <div id="welcome-banner">
    <router-link :to="'/home'">
      <button id="button">
        Homepage
      </button>
    </router-link>
  </div>
  <div>
    <img
      id="whole"
      :src="require('../assets/Elements/7636_logo.jpg')"
    >
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
#welcome-banner {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    background: linear-gradient(transparent 50%, 180deg, rgba(3, 31, 91, 0.32) 0%, rgba(3, 31, 91, 0.77) 67.19%);
}

#button {
    background: none;
    color: rgb(204, 204, 204);
    border: 0;
    font-size: 50px;
    transition: 0.5s;
}

#button:hover{
    color: white;
}

#whole{
    height: 100vw;
}

</style>
