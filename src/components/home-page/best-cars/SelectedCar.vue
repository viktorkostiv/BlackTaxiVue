<template>
  <transition name="car" mode="out-in">
    <div class="item" v-if="isSelected">
      <p class="price">
        From<span>{{ price }}€</span>
      </p>
      <img class="selected-car" :src="image" alt="" />
      <div>
        <div class="title">
          <p>{{ title }}</p>
          <div class="stars">
            <img src="@/assets/img/stars.svg" alt="" />
          </div>
        </div>
        <div class="inf">
          <p>{{ description }}</p>
          <div class="persons">
            <img src="@/assets/img/peopleW.svg" alt="" />
            <p>{{ persons }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else></div>
  </transition>
</template>

<script>
export default {
  props: ["id", "title", "price", "image", "description", "persons", "isSelected"],
};
</script>

<style scoped>
.car-enter-active{
    animation: car .3s ease;
}
.car-leave-active{
    animation: car .3s ease reverse;
}
@keyframes car {
  from {
    opacity: 0;
    transform: scale(.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>