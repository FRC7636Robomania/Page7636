<template>
  <slideNav v-if="!mobile" />
  <div class="members">
    <div
      v-for="(yearBlock, yearIndex) in members"
      :key="yearIndex"
      class="yearBlock d-flex justify-center align-center flex-column h-auto"
    >
      <div class="year align-self-lg-start align-self-sm-center">
        {{ yearBlock.year }}
      </div>
      <template
        v-for="(contentBlock, contentIndex) in yearBlock.contents"
        :key="contentIndex"
      >
        <h1
          v-if="contentBlock.group"
          class="text-center text-uppercase"
        >
          {{ contentBlock.group }}
        </h1>
        <v-row class="group w-100 h-auto">
          <v-col
            v-for="(person, index) in contentBlock.people"
            :key="index"
            class="personBlock d-flex justify-center align-center flex-column"
          >
            <img
              :src="require(`@/assets/Elements/Members/${person.image}`)"
              :alt="person.image"
              class="image w-75 h-auto rounded-xl"
            >
            <div class="name">
              {{ person.name }}
            </div>
            <ul>
              <li
                v-for="(item, barIndex) in person.response"
                :key="barIndex"
              >
                {{ item }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script setup>
import slideNav from '../components/SideNav.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useMembersStore } from '@/js/stores/viewsData'
const members = computed(() => store.$state.members || null)
const store = useMembersStore()
store.fetchData()

const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 960 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

</script>

<style scoped lang="scss">
@import "@/assets/scss/views/members.scss";
</style>
