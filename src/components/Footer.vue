<template>
  <div id="footer-wrapper">
    <div
      id="footer-media"
      class="overflow-hidden position-relative"
    >
      <Post
        v-for="(post, index) in posts"
        :key="index"
        class="post"
        :post-information="post"
      />
    </div>
    <v-row
      id="footer-links"
      class="position-relative align-center"
    >
      <v-col>
        <v-row
          id="links-words"
          class="text-left text-uppercase"
        >
          <v-col>
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
          <v-col>
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
        cols="6"
      >
        <v-row>
          <v-col
            v-for="icon in icons"
            :key="icon"
          >
            <a
              :href="icon.to"
              target="_blank"
              class="icons"
            >
              <img
                :src="require(`@/assets/Elements/Icon/${icon.url}`)"
                :alt="icon.alt"
                class="w-100 h-auto"
                style="max-width: 40px;"
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
import { computed } from 'vue'
import { useFooterStore } from '@/js/stores/componentsData'
import Post from './Post'
const quickLinks = computed(() => store.$state.quickLinks || null)
const icons = computed(() => store.$state.icons || null)
const websites = computed(() => store.$state.websites || null)
const posts = computed(() => store.$state.posts || null)
const store = useFooterStore()
store.fetchData()
</script>

<style lang="scss">
@import "@/assets/scss/footer.scss";
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
</style>
