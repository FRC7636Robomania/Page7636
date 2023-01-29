<script setup>
import { computed, onMounted } from 'vue'
import homeJson from '@/assets/json/home.json'
const blocks = computed(() => homeJson.blocks || null)
const cardItems = computed(() => homeJson.cardItems || null)
const bottomItems = computed(() => homeJson.bottomItems || null)

onMounted(() => {
  console.log(cardItems)
})
</script>

<template>
  <div class="home d-flex flex-column align-items-center justify-content-center px-5 py-5">
    <div class="CTSPItem px-5 py-5 my-5 h-auto w-75">
      <a
        href="https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1"
        style="text-decoration:none; color:white;"
      >
        <div class="row">
          <div class="text-center my-auto col-5 md-4">
            <img
              src="@/assets/Elements/Sponsor/CTSP.png"
              class="w-50 h-auto"
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
      </a>
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
    <div class="py-5 px-5 w-100">
      <div
        v-for="(cardItem, index) in cardItems"
        :key="index"
      >
        <div class="py-5 px-5 mx-5 my-5 h-100 cardItem">
          <div class="row">
            <div
              v-if="index % 2 == 0"
              class="text-center col-5 md-4"
            >
              <img
                :src="require(`@/assets/Elements/Home/${cardItem.imgPath}`)"
                class="w-75 bg-dark"
              >
            </div>
            <div class="col-7">
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
                :src="require(`@/assets/Elements/Home/${cardItem.imgPath}`)"
                class="w-75"
              >
            </div>
          </div>
        </div>
        <hr class="mx-auto my-10">
      </div>
    </div>
    <div class="pb-5 px-5 w-75">
      <div class="row">
        <div
          v-for="(bottomItem, index) in bottomItems"
          :key="index"
          class=" bottomItem sm-6 lg-3 text-center pt-4 col-3 fs-5"
        >
          <router-link :to="bottomItem.path">
            <img
              :src="require(`@/assets/Elements/Home/bottom/${bottomItem.photo}`)"
              class="mx-auto w-75 h-auto py-2"
            ><br>
            {{ bottomItem.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/views/home.scss"
</style>
