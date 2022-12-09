<template>
  <section class="best-cars">
    <div class="container">
      <h3>LUXURY TRANSFERS</h3>
      <div class="divider"></div>
      <h2>Best Cars</h2>
      <div class="main">
        <div class="active-item">
          <selected-car
            v-for="car in cars"
            :key="car.id"
            :id="car.id"
            :title="car.title"
            :price="car.price"
            :image="car.image"
            :description="car.description"
            :persons="car.persons"
            :isSelected="(car.id === this.currentCar)"
          >
          </selected-car>
          <a @click.prevent="submitData()">Book Now</a>
        </div>
        <div class="grid">
          <car-item
            :class="{active: car.id === this.currentCar}"
            @click="getCarId(car.id, car.price)"
            v-for="(car, index) in cars"
            :key="car.id"
            :id="car.id"
            :title="car.title"
            :price="car.price"
            :image="car.image"
            v-show="(index < 4)"
          ></car-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CarItem from "./best-cars/CarItem.vue";
import SelectedCar from "./best-cars/SelectedCar.vue";

export default {
  components: {
    CarItem,
    SelectedCar,
  },
  data() {
    return {
      currentCar: 'c5',
      currentPrice: 0.00,
    };
  },
  computed: {
    cars() {
      return this.$store.getters["cars/cars"];
    },
  },
  created() {
    this.loadCars();
  },
  methods: {
    getCarId(cardId, price) {
      if (this.currentCar === cardId) {
        this.currentCar = 'c5';
        this.currentPrice = 200.00;
      } else {
        this.currentCar = cardId;
      this.currentPrice = price;
      }
    },
    async loadCars(refresh = false) {
      try {
        await this.$store.dispatch("cars/loadCars", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    submitData() {
      const price = this.currentPrice;
      this.$store.dispatch("tours/registerPrice", price);
      this.$router.push("/tours");
    }
  },
};
</script>
