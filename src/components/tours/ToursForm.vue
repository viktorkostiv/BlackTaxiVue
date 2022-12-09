<template>
  <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col">
        <div class="input-form-wrapper" :class="{ invalid: !from.isValid }">
          <p>From</p>
          <div class="input-wrapper">
            <img src="@/assets/img/placeIcon.svg" alt="" />
            <select v-model="from.val" @blur="clearValidity('from')">
              <option disabled value="">Please select city</option>
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
              <option disabled value="">Please select city</option>
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
              <option disabled value="">Please select one</option>
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
      <div class="col">
        <div class="input-form-wrapper" :class="{ invalid: !name.isValid }">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Name"
            v-model="name.val"
            @blur="clearValidity('name')"
          />
        </div>
        <div class="input-form-wrapper" :class="{ invalid: !phone.isValid }">
          <p>Phone Number</p>
          <input
            type="tel"
            placeholder="+ 1 234 456 789"
            v-model="phone.val"
            @blur="clearValidity('phone')"
          />
        </div>
        <div class="input-form-wrapper" :class="{ invalid: !email.isValid }">
          <p>Email</p>
          <input
            type="email"
            placeholder="user@mail.com"
            v-model="email.val"
            @blur="clearValidity('email')"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <p>Additional Notes</p>
          <textarea
            v-model="message.val"
            @blur="clearValidity('message')"
          ></textarea>
        </div>
      </div>
      <div class="col">
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
    <p class="message-success" v-show="formSuccess">The trip is registered.</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      minPrice: 0.0,
      maxPrice: 0.0,
      name: {
        val: "",
        isValid: true,
      },
      phone: {
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
      from: {
        val: "",
        isValid: true,
      },
      to: {
        val: "",
        isValid: true,
      },
      passengers: {
        val: null,
        isValid: true,
      },
      formIsValid: true,
      formSuccess: false,
      pageRoute: this.$router.currentRoute,
    };
  },
  created() {
    this.from.val = this.receivedFrom;
    this.to.val = this.receivedTo;
    this.passengers.val = this.receivedPassengers;
    this.minPrice = this.receivedPrice;
  },
  computed: {
    receivedFrom() {
      return this.$store.getters["tours/getFrom"];
    },
    receivedTo() {
      return this.$store.getters["tours/getTo"];
    },
    receivedPassengers() {
      return this.$store.getters["tours/getPassengers"];
    },
    receivedPrice() {
      return this.$store.getters["tours/getPrice"];
    },
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
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.phone.val === "" || this.phone.val.length < 9) {
        this.phone.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
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
        return;
      }

      const formData = {
        name: this.name.val,
        phone: this.phone.val,
        email: this.email.val,
        message: this.message.val,
        from: this.from.val,
        to: this.to.val,
        passengers: this.passengers.val,
        minPrice: this.minPriceCalculate,
        maxPrice: this.maxPriceCalculate,
      };
      this.formSuccess = true;
      this.$store.dispatch("tours/registerTour", formData);
    },
  },
};
</script>
