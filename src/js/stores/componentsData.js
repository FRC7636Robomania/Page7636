import { onSnapshot } from 'firebase/firestore'
import { documents } from '@/js/firebase'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerData', {
  state: () => ({
    menu: null,
    slideshow: null,
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.headerDoc, (doc) => {
        this.menu = doc.data().menu
        this.slideshow = doc.data().slideshow
      })
    },
  },
})

export const useFooterStore = defineStore('footerData', {
  state: () => ({
    icons: [],
    posts: [],
    quickLinks: [],
    websites: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.footerDoc, (doc) => {
        this.icons = doc.data().icons
        this.posts = doc.data().posts
        this.quickLinks = doc.data().quickLinks
        this.websites = doc.data().websites
      })
    },
  },
})