<template>
  <div id="footer-wrapper">
    <div id="footer-media">
      ...
    </div>
    <div
      id="footer-links"
      class="grid"
    >
      <div
        id="links-words"
        class="lg:col-8 sm:col-12 grid"
      >
        <div class="lg:col-6 sm:col-12 xs:col-12 links-wrapper">
          <h3>
            QUICK LINKS
          </h3>
          <a
            v-for="link in quickLinks"
            :key="link"
            :href="link.to"
            target="_blank"
            class="links"
          >
            {{ link.label }}
            <br>
          </a>
        </div>
        <div class="lg:col-6 sm:col-12 xs:col-12 links-wrapper">
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
        class="lg:col-4 sm:col-12 grid"
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
const quickLinks = computed(() => footerJson.quickLinks || null)
const icons = computed(() => footerJson.icons || null)
const websites = computed(() => footerJson.websites || null)
</script>

<style lang="scss">
@import "@/assets/scss/footer.scss";
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
</style>
