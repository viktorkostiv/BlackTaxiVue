<template>
  <div>
    <div class="contact-us-slider" id="slider">
      <contact-slide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div v-if="slide.id == currentSlide">
          <div class="img-wrapper">
            <img :src="slide.image" alt="" />
          </div>
          <p>{{ slide.text }}</p>
        </div>
      </contact-slide>
    </div>
    <div class="slider-dotes">
      <div
        @click="pagination(dot.id)"
        v-for="dot in slides"
        :key="dot.id"
        :class="{ active: dot.id == currentSlide }"
      ></div>
    </div>
  </div>
</template>

<script>
import timer from "@/assets/img/timer.svg";
import evro from "@/assets/img/evro.svg";
import bagaj from "@/assets/img/bagaj.svg";

import { ref, onMounted } from "vue";


import { defineAsyncComponent } from "vue";
const ContactSlide = defineAsyncComponent(() => import("./ContactSlide.vue"));

export default {
  components: {
    ContactSlide,
  },
  setup() {
    const slides = ref([
      {
        id: "1",
        image: timer,
        text: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        mode: false,
      },
      {
        id: "2",
        image: evro,
        text: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        mode: true,
      },
      {
        id: "3",
        image: bagaj,
        text: "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        mode: false,
      },
    ]);

    const currentSlide = ref(1);
    const sliderLength = ref(null);

    onMounted(() => {
      sliderLength.value = slides.value.length;
    });

    // Pagination

    const pagination = (index) => {
      currentSlide.value = index;
    };

    // AutoPlay

    setInterval(() => {
      currentSlide.value++;
      if (currentSlide.value > sliderLength.value) {
        currentSlide.value = 1;
      }
    }, 3000);

    return { slides, currentSlide, sliderLength, pagination };
  },
};
</script>
