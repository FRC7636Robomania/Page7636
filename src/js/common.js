import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'

export default {
  components: [
    Button, Card, Image,
  ],
}

export const throttle = function (func, wait) {
  let lastTime = 0
  return function (...args) {
    const now = Date.now()
    const coolingDown = now - lastTime < wait
    if (coolingDown) return
    lastTime = Date.now()
    func.apply(null, args)
  }
}
