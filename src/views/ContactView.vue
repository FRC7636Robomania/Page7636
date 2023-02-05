<template>
  <div class="contact d-flex flex-column justify-center align-center h-auto">
    <form
      class="d-flex flex-column justify-center align-center"
      @submit.prevent="sendEmail(); reset();"
    >
      <div class="formOptions w-100 h-auto">
        <label>Name*</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
        >
      </div>
      <div
        class="d-flex justify-center align-center w-100"
        :class="{'flex-column': mobile}"
      >
        <div class="formOptions w-100 h-auto">
          <label>Email*</label>
          <input
            id="email"
            type="email"
            placeholder="Email id"
            required
          >
        </div>
        <div class="formOptions w-100 h-auto">
          <label>Phone</label>
          <div style="display:flex; width:100%;">
            <select
              id="selectCountryPhone"
              style="margin-right: 10px;"
            >
              <option>+886</option>
              <option>+840</option>
            </select>
            <input
              id="phone"
              type="text"
              placeholder="Phone no"
            >
          </div>
        </div>
      </div>
      <div class="formOptions w-100 h-auto">
        <label>Subject</label>
        <input
          id="subject"
          type="text"
          placeholder="Your Subject"
        >
      </div>
      <div class="formOptions w-100 h-auto">
        <label>Message</label>
        <textarea
          id="message"
          type="text"
          placeholder="How can we Help You?"
          rows="4"
          required
        />
      </div>
      <Button
        label="Submit"
        class="p-button-prime"
        type="submit"
        style="width: 100px; height:50px; margin: 50px; border-radius: 30px;"
      />
    </form>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.331362841231!2d120.6258336!3d24.2301866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d1d68110173%3A0xf1a85cea689e4cac!2sNational%20Experimental%20High%20School%20at%20Central%20Taiwan%20Science%20Park!5e0!3m2!1sen!2stw!4v1613675378836!5m2!1sen!2stw"
      width="80%"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
    <div class="location w-100 h-auto text-center">
      <span>WorkShop: </span>No. 227, Pinghe Road, Daya District, Taichung City, 428
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const sendEmail = () => {
  const username = 'frc7636@nehs.tc.edu.tw'
  const password = '8007C22EF37678C01492F8F99988B2AC31D9'
  const subject = document.querySelector('#subject').value || 'New Contact Form Enquiry'
  window.Email.send({
    Host: 'smtp.elasticemail.com',
    Username: username,
    Password: password,
    To: 'frc7636@nehs.tc.edu.tw',
    From: 'frc7636@nehs.tc.edu.tw',
    Subject: subject,
    Body: 'Name: ' + document.querySelector('#name').value +
    '<br> Email: ' + document.querySelector('#email').value +
    '<br> Phone no: ' + document.querySelector('#selectCountryPhone').value +
    ' ' + document.querySelector('#phone').value +
    '<br> Message: ' + document.querySelector('#message').value,
  }).then(
    message => alert('Message Sent Successfully'),
  )
}

const reset = () => {
  document.querySelector('#name').value = ''
  document.querySelector('#phone').value = ''
  document.querySelector('#email').value = ''
  document.querySelector('#subject').value = ''
  document.querySelector('#message').value = ''
}

const mobile = ref(false)
const checkScreen = () => { window.innerWidth <= 600 ? mobile.value = true : mobile.value = false }

onBeforeMount(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen()
})

</script>

<style scoped lang="scss">
@import "../assets/scss/views/contact.scss";
</style>
