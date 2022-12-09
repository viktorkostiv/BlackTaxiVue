<template>
  <the-header mode="tours-page page"></the-header>
  <section class="tours-page page tours-head">
    <h3>LUXURY TRANSFERS</h3>
    <div class="divider"></div>
    <h2>Best Tours</h2>
  </section>
  <section class="tours-page page main-section">
    <div class="container">
      <div class="tours">
        <h3>Book Tours</h3>
        <div class="wrapper">
          <tours-form></tours-form>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d177473.3125000291!2d-9.096938957540969!3d38.72675619552519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2spt!4v1666724969575!5m2!1suk!2spt"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <the-footer mode="tours-page page"></the-footer>
</template>

<script>
import ToursForm from '@/components/tours/ToursForm.vue';

export default {
  components: {
    ToursForm
  }
};
</script>
