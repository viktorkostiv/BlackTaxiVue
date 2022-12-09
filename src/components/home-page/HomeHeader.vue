<template>
  <div class="container">
    <div class="content">
      <div>
        <h1>BlackTaxi</h1>
        <p class="type-text">Drive in comfort</p>
      </div>
      <home-form></home-form>
    </div>
  </div>
</template>

<script>
import HomeForm from "./home-header/HomeForm.vue";

export default {
  components: {
    HomeForm,
  },
};
</script>
