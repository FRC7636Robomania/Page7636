<script setup>
import { computed, onMounted } from 'vue'
import slideNav from '../components/SideNav.vue'
import newsJson from '@/assets/json/news.json'
const news = computed(() => newsJson.blocks || null)
const months = computed(() => newsJson.months || null)
const links = computed(() => newsJson.links || null)
onMounted(() => console.log(news))
</script>

<template>
  <slideNav
    :links="links"
  />
  <div class="news">
    <div
      v-for="(item, yearIndex) in news"
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
          <div class="divideLine" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/news.scss";
</style>
