<template>
  <div class="item">
    <img :src="image" alt="" />
    <div class="inf destinations-inf">
      <p class="price">From<span>{{ price }}€</span></p>
      <h5>{{title}}</h5>
      <div class="divider"></div>
      <p class="inf-text">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id', 'title', 'price', 'desc', 'image', ]
}
</script>