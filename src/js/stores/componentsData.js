import { onSnapshot } from 'firebase/firestore'
import { documents } from '@/js/firebase'
import { defineStore } from 'pinia'
import { useOutreachStore, useSponsorsStore } from './viewsData'

export const useHeaderStore = defineStore('headerData', {
  state: () => ({
    menu: null,
    slideshow: null,
    links: [],
  }),
  actions: {
    // 抓取 header 的資料
    fetchData () {
      onSnapshot(documents.headerDoc, (doc) => {
        this.menu = doc.data().menu
        this.slideshow = doc.data().slideshow
      })
    },
    // 抓取快速連結
    fetchLinks (router) {
      setTimeout(() => {
        let store = null
        if (router === 'outreach') {
          store = useOutreachStore()
        } else if (router === 'sponsors') {
          store = useSponsorsStore()
        }
        this.links = store.$state.links
        console.log(this.links)
      }, 1000)
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
    // 抓取 footer 的資料
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
