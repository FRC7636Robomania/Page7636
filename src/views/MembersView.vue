<template>
  <slideNav />
  <div class="members">
    <div
      v-for="(yearBlock, yearIndex) in members"
      :key="yearIndex"
      class="yearBlock"
    >
      <div class="year">
        {{ yearBlock.year }}
      </div>
      <template
        v-for="(contentBlock, contentIndex) in yearBlock.contents"
        :key="contentIndex"
      >
        <h1 v-if="contentBlock.group">
          {{ contentBlock.group }}
        </h1>
        <div class="group row">
          <div
            v-for="(person, index) in contentBlock.people"
            :key="index"
            class="personBlock col"
          >
            <img
              :src="require(`@/assets/Elements/Members/${person.image}`)"
              :alt="person.image"
              class="image"
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
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import slideNav from '../components/SideNav.vue'
import { computed } from 'vue'
import { useMembersStore } from '@/js/stores/viewsData'
const members = computed(() => store.$state.members || null)
const store = useMembersStore()
store.fetchData()
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/members.scss";
</style>
