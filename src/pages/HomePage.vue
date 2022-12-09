<template>
  <the-header>
    <home-header></home-header>
  </the-header>
  <best-cars></best-cars>
  <contact-us></contact-us>
  <the-destinations></the-destinations>
  <the-footer></the-footer>
</template>

<script>

import HomeHeader from '@/components/home-page/HomeHeader.vue';
import BestCars from "@/components/home-page/BestCars.vue";
import ContactUs from "@/components/home-page/ContactUs.vue";
import TheDestinations from "@/components/home-page/TheDestinations.vue";

export default {
  components: {
    BestCars,
    ContactUs,
    TheDestinations,
    HomeHeader,
  },
};
</script>
