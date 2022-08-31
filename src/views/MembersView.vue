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
  {
    logo: require('@/assets/Elements/Sponsor/NEXCOBOT.png'),
    path: 'http://www.nexcobot.com/',
  },
  {
    logo: require('@/assets/Elements/Sponsor/IGUS.png'),
    path: 'https://www.igus.com.tw/',
  },
  {
    logo: require('@/assets/Elements/Sponsor/NEXCOM.png'),
    path: 'http://www.nexcom.com/?from=m',
  },
  {
    logo: require('@/assets/Elements/Sponsor/大雅廚具 logo.jpg'),
    path: 'http://www.tayakitchen.com.tw/tw/index.php',
  },
  {
    logo: require('@/assets/Elements/Sponsor/YangChangRMBG.png'),
    path: 'https://goo.gl/maps/an1Cj9rWseSM2Avg7',
  },
  {
    logo: require('@/assets/Elements/Sponsor/銓貫logo.png'),
    path: 'https://goo.gl/maps/AePgwFaG12uWgauH6',
  },
  {
    logo: require('@/assets/Elements/Sponsor/特典.png'),
    path: 'https://goo.gl/maps/M5F2P4qvvb7414Ye9',
  },
])
</script>

<template>
  <div>
    <div class="box">
      <div>
        <v-row class="justify-center align-center">
          <v-col
            v-for="(sponsor, index) in sponsors"
            :key="index"
            lg="6"
            md="6"
            sm="12"
            class="text-center pt-10 my-8 pa-6"
          >
            <a :href="sponsor.path">
              <img
                :src="sponsor.logo"
                class="sponsorsLogo"
              >
            </a>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/sponsors.scss";
</style>
