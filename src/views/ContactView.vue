<script setup>
const sendEmail = () => {
  const username = 'marvelo.k0515@gmail.com'
  const password = 'D10CED083C0C7AC905FE32689E90898B413C'
  const subject = document.querySelector('#subject').value || 'New Contact Form Enquiry'
  window.Email.send({
    Host: 'smtp.elasticemail.com',
    Username: username,
    Password: password,
    To: 'marvelo.k0515@gmail.com',
    From: 'marvelo.k0515@gmail.com',
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

</script>

<template>
  <div class="contact">
    <form @submit.prevent="sendEmail(); reset();">
      <div class="formOptions">
        <label>Name*</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          required
        >
      </div>
      <div style="display:flex; justify-content: center; align-items: center; width: 100%;">
        <div class="formOptions">
          <label>Email*</label>
          <input
            id="email"
            type="email"
            placeholder="Email id"
            required
          >
        </div>
        <div class="formOptions">
          <label>Phone</label>
          <div style="display:flex">
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
      <div class="formOptions">
        <label>Subject</label>
        <input
          id="subject"
          type="text"
          placeholder="Your Subject"
        >
      </div>
      <div class="formOptions">
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
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/views/contact.scss";
</style>
