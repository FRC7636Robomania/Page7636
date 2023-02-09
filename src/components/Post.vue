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
    <div
      v-if="post.video"
      class="video"
    >
      <video
        autoplay
        controls
        :src="post.video"
      />
    </div>
    <div
      v-else-if="post.image"
      class="image"
    >
      <img
        :src="$common.fetchImg(image) || require('@/assets/Elements/default.png')"
        alt="postImage"
      >
    </div>
    <a
      title="點擊此貼文閱讀更多"
      :href="post.link"
      class="text-decoration-none"
    >
      <h4 class="title"> {{ post.title }} </h4>
      <p class="content">
        {{ filterLength(post.content) }}
      </p>
      <p class="time">
        post on {{ month }}.{{ day }}.{{ year }} GMT
      </p>
    </a>
  </div>
</template>

<script setup>
// import axios from 'axios'
import { computed, ref } from 'vue'
const props = defineProps({
  postInformation: {
    type: Object,
    default: null,
  },
})
const post = computed(() => props.postInformation || null)
const [year, month, day] = post.value.time.split('/')
const filterLength = content => content.length > 100 ? content.slice(0, 100) + '...' : content
const image = ref(post.value.image)

</script>

<style lang="scss" scoped>
@import '@/assets/scss/post.scss';
</style>
