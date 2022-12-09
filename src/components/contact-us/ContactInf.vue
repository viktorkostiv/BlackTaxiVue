<template>
  <div class="inf">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="img-wrapper">
        <img :src="item.image" alt="" />
      </div>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import timer from "@/assets/img/timer.svg";
import evro from "@/assets/img/evro.svg";
import bagaj from "@/assets/img/bagaj.svg";

export default {
  data() {
    return {
      items: [
        {
          id: "i1",
          image: timer,
          text: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: "i2",
          image: evro,
          text: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: "i3",
          image: bagaj,
          text: "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    };
  },
};
</script>
