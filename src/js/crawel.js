import { updateDoc } from 'firebase/firestore'
import { documents } from './firebase'
const { Builder, By } = require('selenium-webdriver');

(async function myFunction () {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.manage().window().maximize()
    await driver.get('https://www.instagram.com/')
    await new Promise(res => setTimeout(res, 1000), () => {})

    await driver.findElement(By.xpath("//input[@aria-label='手機號碼、用戶名稱或電子郵件地址']")).sendKeys('yukai8765')
    await driver.findElement(By.xpath("//input[@aria-label='密碼']")).sendKeys('05150514avmKL!')
    await driver.findElement(By.xpath("//button[@class='_acan _acap _acas _aj1-']")).click()
    await new Promise(res => setTimeout(res, 7000), () => {})
    const items = await driver.findElements(By.xpath("//div[contains(@class, 'x9f619 x3nfvp2')]"))
    await items[1].click()
    await new Promise(res => setTimeout(res, 1000), () => {})
    await driver.findElement(By.xpath("//input[@aria-label='搜尋輸入']")).sendKeys('frc7636')
    await new Promise(res => setTimeout(res, 3000), () => {})
    await driver.findElement(By.xpath("//div[contains(@class, '_ab8w  _ab94 _ab97 _ab9f')]")).click()
    await new Promise(res => setTimeout(res, 5000), () => {})
    const posters = await driver.findElements(By.xpath("//div[contains(@class, '_aabd _aa8k _aanf')]"))

    const now = new Date()
    const response = []
    let [content, time] = ['', '']
    let [year, month, day] = ['', '', '']
    for (let index = 0; index < posters.length; index++) {
      await posters[index].click()
      await new Promise(res => setTimeout(res, 1000), () => {})
      content = await driver.findElement(By.xpath("//div[@class='_a9zr']//div[@class='_a9zs']//h1")).getText()
      time = await driver.findElement(By.xpath("//div[contains(@class, '_aacl _aacm _aacu _aacy _aad6')]")).getText()
      time = time.replace(/\s+/g, '')
      year = String(now.getFullYear())
      month = String(now.getMonth() + 1).padStart(2, '0')
      day = String(now.getDate()).padStart(2, '0')
      if (time.includes('天')) {
        const newDays = calcMonth(parseInt(year), parseInt(month), parseInt(day), parseInt(time.slice(0, time.includes('天'))))
        month = newDays[0]
        day = newDays[1]
      } else if (time.includes('月')) {
        if (time.includes(',')) {
          year = time.slice(time.indexOf(',') + 1)
          month = time.slice(0, time.indexOf('月'))
          day = time.slice(time.indexOf('月') + 1, time.indexOf(','))
        } else {
          month = time.slice(0, time.indexOf('月'))
          day = time.slice(time.indexOf('月') + 1)
        }
      }
      month = parseInt(month) < 10 ? ('0' + month) : month
      day = parseInt(day) < 10 ? ('0' + day) : day

      const title = content.slice(0, content.indexOf('\n'))
      content = content.slice(content.indexOf('\n') + 1)
      const tmp = {
        time: year + '/' + month + '/' + day,
        title,
        content,
        image: 'default.png',
      }
      response.push(tmp)
      await driver.findElement(By.xpath("//div[contains(@class, 'x10l6tqk x160vmok x1eu8d0j x1vjfegm')]")).click()
    }
    uploadData(response)
    await new Promise(res => setTimeout(res, 1000000), () => {})
  } catch (error) {
    console.error(error)
  } finally {
    await driver.quit()
  }
})()

const calcMonth = (year, month, day, val) => {
  const oddMonths = [5, 7, 10, 12]
  const evenMonths = [1, 2, 4, 6, 8, 9, 11]
  const over = day - val
  if (over > 0) day = over
  else {
    if (oddMonths.includes(month)) {
      month = month > 1 ? (month - 1) : 12
      day = 30 + over
    } else if (evenMonths.includes(month)) {
      month -= 1
      day = 31 + over
    } else {
      month -= 1
      day = leap(year) ? 29 + over : 28 + over
    }
  }
  const res = [month, day]
  return res
}

const leap = year => {
  if (year % 100 === 0 && year % 400 !== 0) return false
  else if (year % 4 === 0) return true
  else return false
}

const uploadData = array => {
  updateDoc(documents.footerDoc, {
    posts: array,
  })
}
