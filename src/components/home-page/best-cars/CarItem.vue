<template>
  <div class="item">
    <div class="title">
      <p>{{ title }}</p>
      <p class="price">From<span>{{ price }}€</span></p>
    </div>
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'price', 'image'],
}
</script>