<script setup>
import { ref } from 'vue'
const blocks = ref([
  {
    content1: '30+',
    content2: 'Team Members',
    color: 'blockColor1',
  },
  {
    content1: '3',
    content2: 'Departments',
    color: 'blockColor2',
  },
  {
    content1: '3',
    content2: 'Years Participants',
    color: 'blockColor2',
  },
  {
    content1: '4',
    content2: 'Regional Competitions',
    color: 'blockColor1',
  },
])
const cardItems = ref([
  {
    title: 'About Us',
    content: 'We\'re Robomania from Taiwan. Our team is a group of students who are passionate about robots and spare no effort to pursue our dreams. Year 2019 is our Rookie year in the field of FIRST, and we\'ve gained a lot through the season. We are looking forward to improve in 2020 and share what we have to the society.',
    imgPath: require('@/assets/Elements/Home/Img01.png'),
    path: '/Team 7636',
  },
  {
    title: 'FRC 2020',
    content: 'We\'ve been participating in the Southern Cross Regional Competition located in NSW of Australia in our rookie year, 2019. We\'ve gained a lot through the pass season. Our robot, Charlie\'s Comet, had been upgraded and improved through the CTSP Pre-competition and the CTSP off season competition.',
    imgPath: require('@/assets/Elements/Home/Img02.png'),
    path: '/2020InfiniteRecharge',
  },
  {
    title: 'Outreach',
    content: 'Outreach program is one of the most important task that we do. It is very popular to use technology devices nowadays and it is very easy to reach education resources. We want to develop something different according to the different stories we\'ve experienced. We offer camps to public and we also demonstrate the spirit and our team while science fair and some festivals.',
    imgPath: require('@/assets/Elements/Home/Img03.png'),
    path: '/Outreach',
  },
])
const bottomItems = ref([
  {
    photo: require('@/assets/Elements/Everywhere-2020 Infinite Recharge.png'),
    text: 'FRC2021:Infinite Recharge',
    path: '/2021InfiniteRecharge',
  },
  {
    photo: require('@/assets/2020-2021/elements/Img01.png'),
    text: '2021 Syzygy',
    path: '',
  },
  {
    photo: require('@/assets/2020-2021/elements/Img02.png'),
    text: 'Outreach',
    path: '/Outreach',
  },
  {
    photo: require('@/assets/2020-2021/elements/Img03.png'),
    text: 'FIRST',
    path: '/FIRST',
  },
])
</script>

<template>
  <div class="home d-flex flex-column align-items-center justify-content-center px-5 py-5">
    <div class="py-5 px-5">
      <div class="px-5 mx-auto h-100">
        <a
          href="https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1"
          style="text-decoration:none; color:white;"
        >
          <div>
            <div class="row">
              <div class="text-center my-auto col-5 md-4">
                <img
                  src="@/assets/Elements/Sponsor/CTSP.png"
                  class="w-25 h-auto"
                >
              </div>
              <div class="col-7">
                <div class="mb-2 titleSize">
                  NEHS @ CTSP
                </div>
                <div class="contentSize">
                  FRC #7636 Robomania is made up by students studying in National Experimental High School at Central Taiwan Science Park.
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div
      no-gutters
      class="row px-5 py-5"
      style="height: 60vh;"
    >
      <div
        class="col-5 d-flex align-items-center justify-content-center h-100"
        style="background-color: #004eb3;"
      >
        <div class="text-center fs-1 text-white">
          NEHS @ CTSP<br>
          Students Mentors<br>
          <h1> ∞ <br> </h1>
          Passions<br>
        </div>
      </div>
      <div class="col-7 h-100">
        <div
          no-gutters
          class="row h-100"
        >
          <div
            v-for="(block, index) in blocks"
            :key="index"
            class="col-6 d-flex align-items-center justify-content-center h-50 fs-4"
            :class="block.color"
          >
            <div class="text-center text-white mx-3 my-3">
              {{ block.content1 }} <br>
              {{ block.content2 }} <br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto py-5 px-5 w-100">
      <div
        v-for="(cardItem, index) in cardItems"
        :key="index"
      >
        <div class="px-5 py-5 h-100">
          <div class="row">
            <div
              v-if="index % 2 == 0"
              class="text-center my-auto col-5 md-4"
            >
              <img
                :src="cardItem.imgPath"
                class="w-75 bg-dark"
              >
            </div>
            <div
              order="2"
              class="col-7"
            >
              <div class="mb-2 titleSize">
                {{ cardItem.title }}
              </div>
              <div class="contentSize">
                {{ cardItem.content }}
              </div>
            </div>
            <div
              v-if="index % 2 == 1"
              class="text-center my-auto col-5 md-4"
            >
              <img
                :src="cardItem.imgPath"
                class="w-75"
              >
            </div>
          </div>
        </div>
        <hr
          color="#8f8f8f"
          class="mx-auto my-10"
          style="max-width: 90%"
        >
      </div>
    </div>
    <div class="pb-5 px-5">
      <div class="pb-5 row">
        <div
          v-for="(bottomItem, index) in bottomItems"
          :key="index"
          class="sm-6 lg-3 text-center pt-6 col-3 px-2 fs-5"
        >
          <img
            :src="bottomItem.photo"
            class="mx-auto w-75 h-auto py-2"
          ><br>
          {{ bottomItem.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/views/home.scss"
</style>
