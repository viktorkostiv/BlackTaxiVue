<template>
  <the-header mode="contact page"></the-header>
  <section class="contact page contact-us" id="contactUs">
    <div class="container">
      <contact-form></contact-form>
      <contact-slider></contact-slider>
      <contact-inf></contact-inf>
    </div>
    <div class="section-divider"></div>
  </section>
  <the-footer mode="contact page"></the-footer>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const ContactForm = defineAsyncComponent(() => import('@/components/contact-us/ContactForm.vue'));
const ContactInf = defineAsyncComponent(() => import('@/components/contact-us/ContactInf.vue'));
const ContactSlider = defineAsyncComponent(() => import('@/components/contact-us/ContactSlider.vue'));

export default {
  components: {
    ContactForm,
    ContactInf,
    ContactSlider,
  },
};
</script>
