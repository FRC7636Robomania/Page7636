import { onSnapshot } from 'firebase/firestore'
import { documents } from '@/js/firebase'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeData', {
  state: () => ({
    blocks: [],
    bottomItems: [],
    cardItems: [],
  }),
  actions: {
    fetchData () {
      return new Promise((resolve, reject) => {
        onSnapshot(documents.homeDoc, (doc) => {
          this.blocks = doc.data().blocks
          this.bottomItems = doc.data().bottomItems
          this.cardItems = doc.data().cardItems
        })
      })
    },
  },
})

export const useMembersStore = defineStore('membersData', {
  state: () => ({
    members: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.membersDoc, (doc) => {
        this.members = doc.data().members
      })
    },
  },
})

export const useOutreachStore = defineStore('outreachData', {
  state: () => ({
    items: null,
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.outreachDoc, (doc) => {
        this.items = doc.data().items
      })
    },
  },
})

export const useSponsorsStore = defineStore('sponsorsData', {
  state: () => ({
    sponsors: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.sponsorsDoc, (doc) => {
        this.sponsors = doc.data().sponsors
      })
    },
  },
})

export const useNewsStore = defineStore('newsData', {
  state: () => ({
    blocks: null,
    links: null,
    months: null,
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.newsDoc, (doc) => {
        this.blocks = doc.data().blocks
        this.links = doc.data().links
        this.months = doc.data().months
      })
    },
  },
})

export const useResourcesStore = defineStore('resourcesData', {
  state: () => ({
    blocks: [],
    recap: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.resourcesDoc, (doc) => {
        this.blocks = doc.data().blocks
        this.recap = doc.data().recap
      })
    },
  },
})

export const useContactStore = defineStore('contactData', {
  state: () => ({
    formOptions: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.contactDoc, (doc) => {
        this.formOptions = doc.data().formOptions
      })
    },
  },
})
