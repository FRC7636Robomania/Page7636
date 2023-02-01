<template>
  <div
    id="welcomeImg"
    class="d-flex align-center overflow-hidden h-screen w-screen position-relative"
  >
    <router-link
      class="text-decoration-none"
      :to="'/home'"
    >
      <v-row
        class="row"
        no-gutters
      >
        <v-col sm="6">
          <img
            id="welcomeLogo"
            class="w-100 h-auto"
            src="../assets/Elements/7636logo.png"
          >
        </v-col>
        <v-col
          sm="6"
          align-self="center"
        >
          <p
            id="welcomeText"
            class="w-100 h-auto text-break text-center"
          >
            {{ text }}
          </p>
        </v-col>
      </v-row>
    </router-link>
  </div>
</template>

<script setup>
const text = 'FRC Team 7636\nRobomania'
</script>

<style lang="scss">
@import '@/assets/scss/views/welcome.scss';
</style>
