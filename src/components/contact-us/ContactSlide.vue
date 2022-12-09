<template>
  <div class="slide">
    <transition name="slide" mode="out-in">
      <slot></slot>
    </transition>
  </div>
</template>

<style scoped> 
.slide-enter-active{
    animation: slideEnter .3s ease;
}
.slide-leave-active{
    animation: slideLeave .3s ease;
}

@keyframes slideEnter{
    from {
        opacity: 0;
        transform: translateX(110%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes slideLeave{
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(-110%);
    }
}
</style>
