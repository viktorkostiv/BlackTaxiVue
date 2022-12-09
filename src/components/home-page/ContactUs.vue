<template>
  <section class="contact-us">
    <div class="container">
      <contact-form></contact-form>
      <contact-inf></contact-inf>
    </div>
  </section>
</template>

<script>
import ContactForm from "../contact-us/ContactForm.vue";
import ContactInf from "../contact-us/ContactInf.vue";

export default {
  components: {
    ContactForm,
    ContactInf,
  },
};
</script>
