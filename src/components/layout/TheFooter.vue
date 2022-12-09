<template>
  <footer class="footer" :class="mode">
    <div class="container">
      <div class="col">
        <router-link to="/about-us">About Us</router-link>
        <router-link to="/tours">Tours</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/contact-us">Contact Us</router-link>
      </div>
      <div class="col">
        <h5>Connect With Us</h5>
        <p>SOCIAL MEDIA CHANNELS</p>
        <div class="media-item">
          <a  href="https://www.instagram.com/" target="_blank">
            <img src="../../assets/img/inst.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="../../assets/img/faceb.svg" alt="" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <img src="../../assets/img/pinterest.svg" alt="" />
          </a>
          <a href="https://twitter.com/?lang=uk" target="_blank">
            <img src="../../assets/img/twitter.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="col">
        <h5>Phone Support</h5>
        <p>24 HOURS A DAY</p>
        <a href="tel:+0123345255">+ 01 345 647 745</a>
      </div>
      <div class="col">
        <img src="../../assets/img/Logo2.png" alt="" />
        <p>© 2021 by BlackTaxi Transfers</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>