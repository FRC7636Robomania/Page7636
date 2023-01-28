<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import slideNav from '../components/SideNav.vue'
import newsJson from '@/assets/json/news.json'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])
const news = computed(() => newsJson.blocks || null)
const months = computed(() => newsJson.months || null)
const totalCount = news.value.reduce((prev, curr) => prev + curr.reports.length, 0)
const newReports = ref([])
const newsPage = ref([])
const years = []
const sideLinks = ref([])
const setControlledSwiper = swiper => {
  sideLinks.value = []
  years[swiper.activeIndex].forEach(year => {
    const links = {
      component: 'news',
      name: year,
    }
    sideLinks.value.push(links)
  })
}
const onSlideChange = e => { setControlledSwiper(e) }
onBeforeMount(() => {
  let [index, yearIndex, currCount, prevIndex, count] = [0, 0, 0, 0, 6]
  let newsblock = {
    year: news.value[yearIndex].year,
    reports: [],
  }
  while (currCount < totalCount) {
    let tmpYear = []
    while (yearIndex < news.value.length) {
      if (news.value[yearIndex].reports.length !== index) {
        index++
        currCount++
        if (currCount % count === 0) {
          prevIndex = index
          if (index - count <= 0) {
            newsblock = {
              year: news.value[yearIndex].year,
              reports: news.value[yearIndex].reports.slice(0, index),
            }
            newsPage.value.push(newsblock)
          } else {
            newsblock = {
              year: news.value[yearIndex].year,
              reports: news.value[yearIndex].reports.slice(index - count, index),
            }
            newsPage.value.push(newsblock)
          }
          tmpYear = [...tmpYear, newsblock.year]
          break
        }
      } else {
        newsblock = {
          year: news.value[yearIndex].year,
          reports: news.value[yearIndex].reports.slice(prevIndex, index),
        }
        newsPage.value.push(newsblock)
        tmpYear = [...tmpYear, newsblock.year]
        index = 0
        if (yearIndex !== news.value.length - 1) {
          yearIndex++
        } else break
      }
    }
    years.push(tmpYear)
    newReports.value.push(newsPage.value)
    newsPage.value = []
  }
})
</script>

<template>
  <slideNav
    :links="sideLinks"
  />
  <div class="news swiper-area">
    <swiper
      ref="_swiper"
      :observer="true"
      :observe-parents="true"
      :pagination="{ clickable: true, dynamicBullets: false }"
      :navigation="true"
      :loop="false"
      @swiper="setControlledSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(pageItems, page) in newReports"
        :key="page"
      >
        <div
          v-for="(item, yearIndex) in pageItems"
          :key="yearIndex"
          class="yearBlock"
        >
          <span
            :id="`news_${item.year}`"
            class="year"
          >
            {{ item.year }}
          </span>
          <div class="reports">
            <template
              v-for="(report, index) in item.reports"
              :key="index"
            >
              <div class="report">
                <div class="day">
                  <span>{{ months[report.day.slice(0, -3)] }}</span>
                  <br>
                  <span class="number">{{ report.day.slice(-2) }}</span>
                </div>
                <img
                  v-if="report.image"
                  :src="require(`@/assets/Elements/News/${report.image}`)"
                >
                <div style="margin-left: 80px">
                  <h1 class="title">
                    {{ report.title }}
                  </h1>
                  <p class="content">
                    {{ report.content }}
                  </p>
                </div>
              </div>
              <div
                class="divideLine"
                :class="{'last' : index === item.reports.length - 1}"
              />
            </template>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/news.scss";
</style>
