import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import axios from 'axios'

export default {
  components: [
    Button, Card, Image,
  ],

  // 節流：防止短時間內過度呼叫方法
  throttle (func, wait) {
    let lastTime = 0
    return function (...args) {
      const now = Date.now()
      const coolingDown = now - lastTime < wait
      if (coolingDown) return
      lastTime = Date.now()
      func.apply(null, args)
    }
  },

  fetchImg (url) {
    if (url) {
      // const path = '/api' + url.slice(38)
      const path = url
      axios.get(path, {
        headers: {},
      }).then(res => {
        console.log('Test', res)
        return res.config.url
      }).catch(error => {
        console.log(error)
        return null
      })
    }
  },
}
