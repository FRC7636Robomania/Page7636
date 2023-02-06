<template>
  <slideNav
    v-if="!mobile"
    :links="sideLinks"
  />
  <div class="news swiper-area">
    <swiper
      :observer="true"
      :observe-parents="true"
      :pagination="{ clickable: true, dynamicBullets: false }"
      :navigation="true"
      :loop="false"
      :history="true"
      @swiper="initalSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(pageItems, page) in pageReports"
        :key="page"
        :data-history="`news/page${page + 1}`"
      >
        <div
          v-for="(item, yearIndex) in pageItems"
          :key="yearIndex"
          class="yearBlock"
        >
          <span
            :id="`newspage${page + 1}-${item.year}`"
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
                    {{ filterLength(report.content) }}
                    <a
                      v-show="report.content.length > 250"
                      href="/404"
                    >
                      Read More
                    </a>
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

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import slideNav from '../components/SideNav.vue'
import { useNewsStore } from '@/js/stores/viewsData'
import SwiperCore, { Pagination, Navigation, History } from 'swiper'
SwiperCore.use([Pagination, Navigation, History])

const store = useNewsStore()
const news = computed(() => store.$state.blocks || null)
const months = computed(() => store.$state.months || null)
const pageReports = computed(() => store.$state.pageReports || [])
const years = computed(() => store.$state.years || [])
const sideLinks = ref([])
const totalCount = ref(null)
const onSlideChange = e => { setControlledSwiper(e) }
const filterLength = content => content.length > 250 ? content.slice(0, 250) + '...' : content
const setControlledSwiper = swiper => setTimeout(() => {
  sideLinks.value = []
  years.value[swiper.activeIndex].forEach(year => {
    const links = {
      title: {
        name: year,
        path: `slides/newspage${swiper.activeIndex + 1}/${year}`,
      },
      subTitle: null,
    }
    sideLinks.value.push(links)
  })
})
const initalSwiper = swiper => setTimeout(() => {
  setControlledSwiper(swiper)
}, 3000)
const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

onBeforeMount(() => {
  store.fetchData()
  setTimeout(() => {
    totalCount.value = news.value.reduce((prev, curr) => prev + curr.reports.length, 0)
    store.buildSlideNavbar(totalCount.value)
  }, 2000)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/news.scss";
</style>
