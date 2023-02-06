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
      onSnapshot(documents.homeDoc, (doc) => {
        this.blocks = doc.data().blocks
        this.bottomItems = doc.data().bottomItems
        this.cardItems = doc.data().cardItems
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
    links: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.outreachDoc, (doc) => {
        this.items = doc.data().items
      })
    },
    buildSlideNavbar () {
      this.links = []
      let group = { title: { path: '', name: '' }, subTitle: { path: [], name: [] } }
      let [yearLinkPath, yearLinkName, currTime] = [[], [], this.items[0].time.slice(0, 4)]
      this.items.forEach((item, index) => {
        if (item.time.slice(0, 4) !== currTime) {
          const defaultPath = `outreach/year${currTime}/${this.items[index - yearLinkName.length].id}`
          group = { title: { path: defaultPath, name: currTime }, subTitle: { path: yearLinkPath, name: yearLinkName } }
          this.links.push(group)
          currTime = item.time.slice(0, 4)
          yearLinkPath = [`outreach/year${currTime}/${item.id}`]
          yearLinkName = [item.title]
        } else {
          yearLinkPath.push(`outreach/year${currTime}/${item.id}`)
          yearLinkName.push(item.title)
        }
      })
      const defaultPath = `outreach/year${currTime}/${this.items[this.items.length - yearLinkName.length].id}`
      group = { title: { path: defaultPath, name: currTime }, subTitle: { path: yearLinkPath, name: yearLinkName } }
      this.links.push(group)
    },
  },
})

export const useSponsorsStore = defineStore('sponsorsData', {
  state: () => ({
    sponsors: [],
    links: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.sponsorsDoc, (doc) => {
        this.sponsors = doc.data().sponsors
      })
    },
    buildSlideNavbar () {
      this.links = []
      const group = {
        title: {
          path: null,
          name: 'partnership',
        },
        subTitle: {
          path: ['sponsors/platinum', 'sponsors/gold', 'sponsors/silver', 'sponsors/bronze'],
          name: ['platinum', 'gold', 'silver', 'bronze'],
        },
      }
      this.links.push(group)
    },
  },
})

export const useNewsStore = defineStore('newsData', {
  state: () => ({
    blocks: null,
    links: null,
    months: null,
    pageReports: [],
    years: [],
  }),
  actions: {
    fetchData () {
      onSnapshot(documents.newsDoc, (doc) => {
        this.blocks = doc.data().blocks
        this.links = doc.data().links
        this.months = doc.data().months
      })
    },
    buildSlideNavbar (totalCount) {
      this.years = []
      this.pageReports = []
      let [index, yearIndex, currCount, prevIndex, count] = [0, 0, 0, 0, 6]
      let newsblock = {
        year: this.blocks[yearIndex].year,
        reports: [],
      }
      let newsPage = []
      while (currCount < totalCount) {
        let tmpYear = []
        while (yearIndex < this.blocks.length) {
          if (this.blocks[yearIndex].reports.length !== index) {
            index++
            currCount++
            if (currCount % count === 0) {
              prevIndex = index
              if (index - count <= 0) {
                newsblock = {
                  year: this.blocks[yearIndex].year,
                  reports: this.blocks[yearIndex].reports.slice(0, index),
                }
                newsPage.push(newsblock)
              } else {
                newsblock = {
                  year: this.blocks[yearIndex].year,
                  reports: this.blocks[yearIndex].reports.slice(index - count, index),
                }
                newsPage.push(newsblock)
              }
              tmpYear = [...tmpYear, newsblock.year]
              break
            }
          } else {
            newsblock = {
              year: this.blocks[yearIndex].year,
              reports: this.blocks[yearIndex].reports.slice(prevIndex, index),
            }
            newsPage.push(newsblock)
            tmpYear = [...tmpYear, newsblock.year]
            index = 0
            if (yearIndex !== this.blocks.length - 1) {
              yearIndex++
            } else break
          }
        }
        this.years.push(tmpYear)
        this.pageReports.push(newsPage)
        newsPage = []
      }
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
