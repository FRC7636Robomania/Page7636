<template>
  <div id="header-banner">
    <div>
      <router-link :to="'/home'">
        <img
          id="header-logo"
          :src="require('../assets/Elements/7636logo.png')"
        >
      </router-link>
    </div>
    <div id="header-toolbar">
      <router-link
        v-for="list in menu"
        :key="list"
        :to="list.to"
        class="menu-item"
      >
        {{ list.label }}
      </router-link>
    </div>
    <div id="searchBar">
      <input
        id="keyIn"
        type="text"
      >
      <img
        id="searchBtn"
        src="../assets/Elements/Icon/icon-search.png"
      >
    </div>
  </div>
  <div id="header-image">
    <div
      class="gradient-mask"
      :style="{background: 'linear-gradient(rgba(3, 31, 91, 0.32),rgba(3, 31, 91, 1.0)), url('+require('../assets/Elements/Header/'+$route.name+'.png')+')'}"
    >
      <p
        v-if="$route.path !='/home'"
        id="menuSelected"
      >
        {{ $route.name }}
      </p>
      <p
        v-else
        id="homeTitle"
      >
        Robomania, Team 7636 is a FRC team located at Taichung, Taiwan.
      </p>
    </div>
  </div>
  <div id="color-lump" />
</template>

<script>
export default {
  data () {
    return {
      menu: [
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
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/header.scss';
</style>
