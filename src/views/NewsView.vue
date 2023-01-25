<script setup>
import { computed, onMounted } from 'vue'
import slideNav from '../components/SideNav.vue'
import newsJson from '../json/news.json'
const news = computed(() => newsJson || null)
onMounted(() => console.log(news))
</script>

<template>
  <slideNav />
  <div class="news">
    <div
      v-for="(item, yearIndex) in news"
      :key="yearIndex"
      class="yearBlock"
    >
      <span class="year">
        {{ item.year }}
      </span>
      <div class="reports">
        <template
          v-for="(report, index) in item.reports"
          :key="index"
        >
          <div class="day">
            <span>{{ report.day }}</span>
          </div>
          <h1 class="title">
            {{ report.title }}
          </h1>
          <p class="content">
            {{ report.contnt }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/views/news.scss";
</style>
