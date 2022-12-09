<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>Book Now</h3>
      <div class="form-main">
        <div>
          <div class="input-form-wrapper" :class="{ invalid: !from.isValid }">
            <p>From</p>
            <div class="input-wrapper">
              <img src="@/assets/img/placeIcon.svg" alt="" />
              <select v-model="from.val" @blur="clearValidity('from')">
                <option disabled value="">Select city</option>
                <option value="Faro">Faro</option>
                <option value="Lisbon">Lisbon</option>
                <option value="Porto">Porto</option>
              </select>
            </div>
          </div>
          <div class="input-form-wrapper" :class="{ invalid: !to.isValid }">
            <p>To</p>
            <div class="input-wrapper">
              <img src="@/assets/img/placeIcon2.svg" alt="" />
              <select v-model="to.val" @blur="clearValidity('to')">
                <option disabled value="">Select city</option>
                <option value="Faro">Faro</option>
                <option value="Lisbon">Lisbon</option>
                <option value="Porto">Porto</option>
              </select>
            </div>
          </div>
          <div
            class="input-form-wrapper"
            :class="{ invalid: !passengers.isValid }"
          >
            <p>Passengers</p>
            <div class="input-wrapper">
              <img src="@/assets/img/peoplesIcon.svg" alt="" />
              <select
                v-model="passengers.val"
                @blur="clearValidity('passengers')"
              >
                <option disabled value="">Select one</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>
              Min Price :
              <span>{{ minPriceCalculate }}€</span>
            </p>
            <p>
              Max Price :
              <span>{{ maxPriceCalculate }}€</span>
            </p>
          </div>
          <div>
            <button class="form-btn">
              <img
                class="form-btn-item"
                src="@/assets/img/arrowNext.svg"
                alt=""
              />
              <p class="form-btn-item">Proceed to Booking</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minPrice: 0.0,
      maxPrice: 0.0,
      from: {
        val: "",
        isValid: true,
      },
      to: {
        val: "",
        isValid: true,
      },
      passengers: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      formSuccess: false,
    };
  },
  computed: {
    minPriceCalculate() {
      return (
        this.minPrice +
        this.passengersPrice +
        this.fromPriceCalculate +
        this.toPriceCalculate
      );
    },
    fromPriceCalculate() {
      if (this.from.val === "Faro") {
        return 110;
      }
      if (this.from.val === "Lisbon") {
        return 214;
      }
      if (this.from.val === "Porto") {
        return 553;
      }
      return 0;
    },
    toPriceCalculate() {
      if (this.to.val === "Faro") {
        return 60;
      }
      if (this.to.val === "Lisbon") {
        return 170;
      }
      if (this.to.val === "Porto") {
        return 320;
      }
      return 0;
    },
    passengersPrice() {
      return this.passengers.val * 10.0;
    },
    maxPriceCalculate() {
      if (this.minPriceCalculate > 0) {
        return this.minPriceCalculate + 120;
      }
      return 0;
    },
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.from.val === "") {
        this.from.isValid = false;
        this.formIsValid = false;
      }
      if (this.to.val === "") {
        this.to.isValid = false;
        this.formIsValid = false;
      }
      if (this.passengers.val === "") {
        this.passengers.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        this.formSuccess = false;
        console.log("Error!!!");
        return;
      }
      const from = this.from.val;
      const to = this.to.val;
      const passengers = this.passengers.val;

      this.formSuccess = true;
      this.$store.dispatch("tours/registerFrom", from);
      this.$store.dispatch("tours/registerTo", to);
      this.$store.dispatch("tours/registerPassengers", passengers);
      this.$router.push("/tours");
    },
  },
};
</script>
