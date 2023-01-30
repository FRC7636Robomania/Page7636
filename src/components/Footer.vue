<template>
  <div id="footer-wrapper">
    <div id="footer-media">
      <Post
        v-for="(post, index) in footerJson.posts"
        :key="index"
        class="post"
        :post-information="post"
      />
    </div>
    <div
      id="footer-links"
      class="grid"
    >
      <div
        id="links-words"
        class="lg:col sm:col-12 row"
      >
        <div class="lg:col sm:col-12 xs:col-12 links-wrapper">
          <h3>
            QUICK LINKS
          </h3>
          <router-link
            v-for="link in quickLinks"
            :key="link"
            :to="link.to"
            target="_blank"
            class="links"
          >
            {{ link.label }}
            <br>
          </router-link>
        </div>
        <div class="lg:col sm:col-12 xs:col-12 links-wrapper">
          <h3>
            WEBSITES
          </h3>
          <a
            v-for="link in websites"
            :key="link"
            :href="link.to"
            target="_blank"
            class="links"
          >
            {{ link.label }}
            <br>
          </a>
        </div>
      </div>
      <div
        id="links-icon"
        class="lg:col sm:col-12 grid"
      >
        <a
          v-for="icon in icons"
          :key="icon"
          :href="icon.to"
          target="_blank"
          class="icons"
        >
          <img
            :src="require(`@/assets/Elements/Icon/${icon.url}`)"
            :alt="icon.alt"
          >
        </a>
      </div>
    </div>
    <div id="footer-copyright">
      © FRC 7636 Robomania, National Experimental High School at Central Taiwan Science Park 2022
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import footerJson from '@/assets/json/footer.json'
import Post from './Post'
const quickLinks = computed(() => footerJson.quickLinks || null)
const icons = computed(() => footerJson.icons || null)
const websites = computed(() => footerJson.websites || null)
</script>

<style lang="scss">
@import "@/assets/scss/footer.scss";
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
</style>
