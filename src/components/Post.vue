<template>
  <div class="post">
    <div class="account">
      <img
        :src="require('@/assets/Elements/Icon/instagram.png')"
        alt="instagramIcon"
        width="30"
        height="30"
      >
      <div class="text">
        <p class="name">
          frc7636robomania
        </p>
        <p class="tag">
          @frc7636robomania
        </p>
      </div>
    </div>
    <div class="image">
      <img
        :src="require('@/assets/Elements/Post/default.png')"
        alt="postImage"
      >
    </div>
    <p class="content">
      {{ filterLength(post.content) }}
    </p>
    <p class="time">
      post on {{ month }}.{{ day }}.{{ year }} {{ hour }}:{{ minute }} GMT
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  postInformation: {
    type: Object,
    default: null,
  },
})
const post = computed(() => props.postInformation || null)
const [year, month, day, other] = post.value.time.split('/')
const [hour, minute] = other.split(':')
const filterLength = content => content.length > 100 ? content.slice(0, 100) + '...' : content

</script>

<style lang="scss" scoped>
@import '@/assets/scss/post.scss';
</style>
