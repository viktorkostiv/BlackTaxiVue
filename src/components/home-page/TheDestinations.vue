<template>
  <section class="destinations">
    <div class="container">
      <h3>LUXURY TRANSFERS</h3>
      <div class="divider"></div>
      <h2>Best Destinations</h2>
      <div class="wrapper">
        <destination-item
          :class="{active: destination.id === this.currentDest}"
          @click="getDest(destination.id, destination.price)"
          v-for="destination in destinations"
          :key="destination.id"
          :id="destination.id"
          :title="destination.title"
          :price="destination.price"
          :desc="destination.desc"
          :image="destination.image"
        ></destination-item>
      </div>
      <a @click.prevent="submitDest">Book Now</a>
    </div>
  </section>
</template>

<script>
import DestinationItem from "./destinations/DestinationItem.vue";

export default {
  components: {
    DestinationItem,
  },
  data() {
    return {
      currentDest: null,
      destPrice: 0.00,
    };
  },
  computed: {
    destinations() {
      return this.$store.getters["destinations/destinations"];
    },
  },
  created() {
    this.loadDestinations();
  },
  methods: {
    getDest(destId, price) {
      this.destPrice = price;
      if (this.currentDest === destId) {
        this.currentDest = null;
      } else {
        this.currentDest = destId;
      }
    },
    async loadDestinations(refresh = false) {
      try {
        await this.$store.dispatch("destinations/loadDestinations", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    submitDest() {
      const price = this.destPrice;
      this.$store.dispatch("tours/registerPrice", price);
      this.$router.push("/tours");
    }
  },
};
</script>
