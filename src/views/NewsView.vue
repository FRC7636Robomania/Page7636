<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import slideNav from '../components/SideNav.vue'
import newsJson from '@/assets/json/news.json'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])
const news = computed(() => newsJson.blocks || null)
const months = computed(() => newsJson.months || null)
const links = computed(() => newsJson.links || null)
const totalCount = news.value.reduce((prev, curr) => prev + curr.reports.length, 0)
const newReports = ref([])
const newsPage = ref([])
onBeforeMount(() => {
  let [index, yearIndex, currCount, prevIndex, count] = [0, 0, 0, 0, 6]
  let newsblock = {
    year: news.value[yearIndex].year,
    reports: [],
  }
  while (currCount < totalCount) {
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
          console.log('newsPage', newsPage.value)
          break
        }
      } else {
        newsblock = {
          year: news.value[yearIndex].year,
          reports: news.value[yearIndex].reports.slice(prevIndex, index),
        }
        newsPage.value.push(newsblock)
        index = 0
        if (yearIndex !== news.value.length - 1) {
          yearIndex++
        } else break
      }
    }
    newReports.value.push(newsPage.value)
    newsPage.value = []
  }
})
</script>

<template>
  <slideNav
    :links="links"
  />
  <div class="news swiper-area">
    <swiper
      :observer="true"
      :observe-parents="true"
      :pagination="{ clickable: true, dynamicBullets: false }"
      :navigation="true"
      :loop="false"
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
