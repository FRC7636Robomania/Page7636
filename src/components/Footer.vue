<script setup>
import { ref } from 'vue'
const sponsors = ref([
  {
    logo: require('@/assets/Elements/Sponsor/CTSP.png'),
    path: 'https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1',
  },
  {
    logo: require('@/assets/Elements/Sponsor/NEHSCTSP.png'),
    path: 'http://www.nehs.tc.edu.tw/index.php',
  },
])
const items = ref([
  {
    title: 'About',
    links: [
      {
        name: 'FIRST',
        path: '/FIRST',
      },
      {
        name: 'Team #7636',
        path: '/Team 7636',
      },
    ],
  },
  {
    title: 'OUTREACH',
    links: [
      {
        name: 'Outreach',
        path: '/Outreach',
      },
      {
        name: 'Our Sponsors',
        path: '/sponsor',
      },
    ],
  },
  {
    title: 'MEMBERS',
    links: [
      {
        name: 'Mentors',
        path: '/Mentor',
      },
      {
        name: 'Leaders',
        path: '/Leader',
      },
    ],
  },
])
const icons = ref([
  {
    title: 'pi pi-facebook',
    path: 'https://www.facebook.com/7636.Robomania',
  },
  {
    title: 'pi pi-youtube',
    path: 'https://www.youtube.com/channel/UCXFLKnRlpTNMn2aaLVM9H6g',
  },
  {
    title: 'pi pi-instagram',
    path: 'https://www.instagram.com/frc7636_robomania/',
  },
  {
    title: 'pi pi-github',
    path: 'https://www.twitch.tv/frc7636robomania',
  },
  {
    title: 'pi pi-envelope',
    path: '',
  },
])
</script>

<template>
  <div id="footerSponsor">
    <div class="col-3 flex align-items-center justify-content-center">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="text-center pt-5 my-5"
      >
        <a :href="sponsor.path">
          <img
            :src="sponsor.logo"
            class="w-5 h-auto"
          >
        </a>
      </div>
    </div>
  </div>
  <div id="footerLinks">
    <div
      id="frcLogo"
      class="col-2 md-2"
    >
      <img
        class="w-8 h-auto"
        :src="require('../assets/FIRST_logo.png')"
      >
    </div>
    <div
      v-for="(item, index) in items"
      id="footerMenu"
      :key="`footer-${index}`"
      class="col-2 md-2"
    >
      <Card style="background-color: #272727">
        <template #title>
          <div class="font-bold text-white">
            {{ item.title }}
          </div>
        </template>
        <template #content>
          <div
            v-for="(link, index2) in item.links"
            :key="`link-${index2}`"
          >
            <router-link
              class="no-underline text-white"
              :to="link.path"
            >
              {{ link.name }}
            </router-link>
          </div>
        </template>
      </Card>
    </div>
    <Card
      style="background-color: #272727"
      class="col-2"
    >
      <template #title>
        <div class="font-bold text-white">
          Contact US
        </div>
      </template>
      <template #content>
        <div class="text-white flex flex-row justify-content-center align-items-center">
          <div
            v-for="(icon, index) in icons"
            :key="`icon-${index}`"
          >
            <a :href="icon.path">
              <i
                :class="`${icon.title}`"
                class="text-3xl text-white mx-2"
              />
            </a>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/footer.scss";
</style>
