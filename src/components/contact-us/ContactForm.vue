<template>
  <form @submit.prevent="submitForm">
    <h2>Contact Us</h2>
    <div class="form-main">
      <div class="contact-wrapper" :class="{invalid: !name.isValid}">
        <p>Name :</p>
        <input
          type="text"
          v-model.trim="name.val"
          @blur="clearValidity('name')"
        />
        <p v-show="!name.isValid">Enter valid Name</p>
      </div>
      <div  class="contact-wrapper" :class="{invalid: !email.isValid}">
        <p>Email :</p>
        <input
          type="email"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
        <p v-show="!email.isValid">Enter valid Email</p>
      </div>
      <div class="contact-wrapper"  :class="{invalid: !message.isValid}">
        <p>Message :</p>
        <textarea
          rows="5"
          v-model.trim="message.val"
          @blur="clearValidity('message')"
        ></textarea>
        <p v-show="!message.isValid">Enter valid Message</p>
      </div>
      <button>Send Now</button>
      <p class="message-success" v-show="messageSuccess">Massage has been sent</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      messageSuccess: false,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        this.messageSuccess = false;
        return;
      }

      const formData = {
        name: this.name.val,
        email: this.email.val,
        message: this.message.val,
      };
      this.messageSuccess = true;
      this.$store.dispatch('contact/registerContact', formData);
    },
  },
};
</script>

