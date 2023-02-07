<template>
  <div id="footer-wrapper">
    <div
      id="footer-media"
      class="overflow-hidden position-relative"
    >
      <Post
        v-for="(post, index) in posts.slice(0, postNum)"
        :key="index"
        class="post"
        :post-information="post"
      />
      <button
        v-show="isMore"
        class="p-white"
        @click="morePost"
      >
        MORE
      </button>
    </div>
    <v-row
      id="footer-links"
      class="position-relative align-center"
    >
      <v-col>
        <v-row
          id="links-words"
          class="text-uppercase"
        >
          <v-col
            cols="12"
            sm="6"
            md="6 lg=6"
          >
            <h3>
              QUICK LINKS
            </h3>
            <router-link
              v-for="link in quickLinks"
              :key="link"
              :to="link.to"
              target="_blank"
              class="links text-decoration-none"
            >
              {{ link.label }}
              <br>
            </router-link>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6 lg=6"
          >
            <h3>
              WEBSITES
            </h3>
            <a
              v-for="link in websites"
              :key="link"
              :href="link.to"
              target="_blank"
              class="links text-decoration-none"
            >
              {{ link.label }}
              <br>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        id="links-icon"
        cols="12"
        sm="6"
        md="6"
        lg="6"
      >
        <v-row>
          <v-col
            v-for="icon in icons"
            :key="icon"
            class="text-center"
          >
            <a
              :href="icon.to"
              target="_blank"
              class="icons"
            >
              <img
                :src="require(`@/assets/Elements/Icon/${icon.url}`)"
                :alt="icon.alt"
                class="w-100 h-auto mediaIcon"
              >
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div
      id="footer-copyright"
      class="text-center"
    >
      © FRC 7636 Robomania, National Experimental High School at Central Taiwan Science Park 2022
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useFooterStore } from '@/js/stores/componentsData'
import Post from './Post'
const quickLinks = computed(() => store.$state.quickLinks || null)
const icons = computed(() => store.$state.icons || null)
const websites = computed(() => store.$state.websites || null)
const posts = computed(() => store.$state.posts || null)
const store = useFooterStore()
store.fetchData()

const postNum = ref(4)
const isMore = ref(true)
const morePost = () => {
  postNum.value += 5
  if (postNum.value >= posts.value.length) isMore.value = false
}
</script>

<style lang="scss">
@import "@/assets/scss/footer.scss";
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
</style>
