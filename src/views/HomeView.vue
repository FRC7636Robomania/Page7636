<template>
  <div class="home d-flex flex-column align-items-center justify-content-center px-5 py-5">
    <div class="CTSPItem px-5 py-5 my-5 h-auto">
      <a
        class="text-decoration-none"
        href="https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1"
      >
        <v-row class="align-center">
          <v-col
            cols="12"
            lg="5"
            md="5"
            sm="5"
            class="text-center"
          >
            <img
              src="@/assets/Elements/Sponsor/CTSP.png"
              class="w-50 h-auto"
            >
          </v-col>
          <v-col
            cols="12"
            lg="7"
            md="7"
            sm="7"
          >
            <div
              class="mb-2 titleSize"
              :class="{'text-start': !mobile}"
            >
              NEHS @ CTSP
            </div>
            <div
              class="contentSize"
              :class="{'text-start': !mobile}"
            >
              FRC #7636 Robomania is made up by students studying in National Experimental High School at Central Taiwan Science Park.
            </div>
          </v-col>
        </v-row>
      </a>
    </div>
    <v-row
      no-gutters
      class="my-5 h-auto"
      :class="{'px-5 py-5': !mobile, 'px-1 py-1': mobile}"
      style="min-height: 60vh;"
    >
      <v-col
        cols="12"
        sm="5"
        md="5"
        lg="5"
        class="d-flex align-center justify-center h-auto"
        style="background-color: #004eb3;"
      >
        <div class="fs-1 pa-5 text-white text-center">
          NEHS @ CTSP<br>
          Students Mentors<br>
          <h1> ∞ <br> </h1>
          Passions<br>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="7"
        md="7"
        lg="7"
        class="h-auto"
      >
        <v-row
          no-gutters
          class="h-100"
        >
          <v-col
            v-for="(block, index) in blocks"
            :key="index"
            cols="6"
            class="d-flex align-center justify-center fs-4 pa-5"
            :class="block.color"
          >
            <div class="text-center text-white mx-3 my-3">
              {{ block.content1 }} <br>
              {{ block.content2 }} <br>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div
      class="w-100"
    >
      <div
        v-for="(cardItem, index) in cardItems"
        :key="index"
        class="w-100 h-auto"
      >
        <v-row
          class="align-center h-100 cardItem"
          :class="{'py-5 px-5': mobile, 'py-5 px-5 my-5': !mobile, 'pink': index == 0, 'blue': index == 1}"
        >
          <v-col
            v-if="index % 2 == 0 || mobile"
            cols="12"
            lg="7"
            md="7"
            sm="7"
            class="text-center md-4"
          >
            <img
              :src="$common.fetchImg(cardItem.imgPath) || require(`@/assets/Elements/default.png`)"
              class="h-auto bg-dark"
              :class="{'w-100': mobile, 'w-75': !mobile}"
            >
          </v-col>
          <v-col
            cosl="12"
            lg="5"
            md="5"
            sm="5"
          >
            <div
              class="mb-2 titleSize"
              :class="{'text-start': !mobile && index % 2 == 0 , 'text-end': !mobile && index % 2 == 1}"
            >
              {{ cardItem.title }}
            </div>
            <div
              class="contentSize"
              :class="{'text-start': !mobile && index % 2 == 0 , 'text-end': !mobile && index % 2 == 1}"
            >
              {{ cardItem.content }}
            </div>
          </v-col>
          <v-col
            v-if="index % 2 == 1 && !mobile"
            cols="7"
            class="my-auto md-4 text-center"
          >
            <img
              :src="$common.fetchImg(cardItem.imgPath) || require(`@/assets/Elements/default.png`)"
              class="w-75"
            >
          </v-col>
        </v-row>
        <hr class="mx-auto my-10">
      </div>
    </div>
    <div :class="{'pb-5 px-5 w-75': !mobile, 'pb-3 px-3 w-100': mobile}">
      <v-row>
        <v-col
          v-for="(bottomItem, index) in bottomItems"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          class="bottomItem text-center pt-4 fs-5"
        >
          <router-link :to="bottomItem.path">
            <img
              :src="$common.fetchImg(bottomItem.image) || require(`@/assets/Elements/default.png`)"
              class="mx-auto w-75 h-auto py-2"
            ><br>
            {{ bottomItem.text }}
          </router-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import { useHomeStore } from '@/js/stores/viewsData'
const blocks = computed(() => store.$state.blocks || null)
const cardItems = computed(() => store.$state.cardItems || null)
const bottomItems = computed(() => store.$state.bottomItems || null)
const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 600 ? mobile.value = true : mobile.value = false }
const store = useHomeStore()
store.fetchData()

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

</script>

<style lang="scss" scoped>
@import "@/assets/scss/views/home.scss"
</style>
