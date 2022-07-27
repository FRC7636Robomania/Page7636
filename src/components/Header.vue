<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu/sfc'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/home',
  },
  {
    label: 'About',
    icon: 'pi pi-home',
    to: '/about',
  },
  {
    label: 'Members',
    icon: 'pi pi-heart',
    to: '/members',
  },
  {
    label: 'Outreach',
    icon: 'pi pi-heart',
    to: '/outreach',
  },
  {
    label: 'Sponsors',
    icon: 'pi pi-heart',
    to: '/sponsors',
  },
  {
    label: 'Resources',
    icon: 'pi pi-heart',
    to: '/resources',
    items: [
      {
        label: 'Robots',
      },
      {
        label: 'CAD',
      },
      {
        label: 'YT/ Videos',
      },
    ],
  },
  {
    label: 'News',
    icon: 'pi pi-heart',
    to: '/news',
  },
  {
    label: 'Contact',
    icon: 'pi pi-heart',
    to: '/contact',
  },
  {
    label: 'Contact',
    icon: 'pi pi-at',
    to: '/contact',
  },
])
</script>

<template>
  <div id="header-banner">
    <img
      id="header-logo"
      :src="require('../assets/Elements/7636_logo.jpg')"
    >
    <h1 class="text-white text-wrap">
      FRC #7636
      <br class="d-inline d-sm-none">
      ROBOMANIA
    </h1>
  </div>
  <div
    id="header-toolbar"
  >
    <TabMenu :model="items" />
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
  height: auto;
  left: 0px;
  position: sticky;
  top: 0px;
  max-width: 100%;
}

.p-ink-active {
  display: none !important;
}

.p-tabmenu-nav {
  background: #002b5e !important;
  border-width: 0 0 0px 0 !important;
}

.p-menuitem-link {
  background: #002b5e !important;
  border-radius: 0px !important;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
  box-shadow: 0 0 0 0 !important;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):hover {
  filter: brightness(1.5);
}

.p-menuitem-text .p-menuitem-icon {
  color: aliceblue;
}
</style>
