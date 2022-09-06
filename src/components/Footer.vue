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
        <div class="lg:col-6 sm:col-12">
          hello
        </div>
        <div class="lg:col-6 sm:col-12">
          hello
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
            :src="icon.url"
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

<script>
export default {
  data () {
    return {
      icons: [
        {
          alt: 'icon-facebook',
          url: require('../assets/Elements/Icon/icon-facebook.svg'),
          to: 'https://www.facebook.com/7636.Robomania',
        },
        {
          alt: 'icon-instagram',
          url: require('../assets/Elements/Icon/icon-instagram.png'),
          to: 'https://www.instagram.com/frc7636_robomania/',
        },
        {
          alt: 'icon-youtube',
          url: require('../assets/Elements/Icon/icon-youtube.png'),
          to: 'https://www.youtube.com/channel/UCXFLKnRlpTNMn2aaLVM9H6g',
        },
        {
          alt: 'icon-github',
          url: require('../assets/Elements/Icon/icon-github.png'),
          to: 'https://github.com/FRC7636Robomania',
        },
        {
          alt: 'icon-twitch',
          url: require('../assets/Elements/Icon/icon-twitch.png'),
          to: 'https://www.twitch.tv/frc7636robomania',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/footer.scss";
@import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');
</style>
