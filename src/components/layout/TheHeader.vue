<template>
  <section class="header" :class="mode">
    <div class="container">
      <div class="media-nav">
        <div class="media-item">
          <img src="../../assets/img/lang.svg" alt="" />
          <p>LANGUAGES</p>
          <a @click.prevent="toggleLang(true)" :class="{active: isPt}">PT</a>
          <a @click.prevent="toggleLang(false)" :class="{active: !isPt}">ENG</a>
        </div>
        <div class="media-item">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="../../assets/img/inst.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="../../assets/img/faceb.svg" alt="" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <img src="../../assets/img/pinterest.svg" alt="" />
          </a>
          <a href="https://twitter.com/?lang=uk" target="_blank">
            <img src="../../assets/img/twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <router-link to="/">
          <img src="../../assets/img/Logo2.png" alt="" />
        </router-link>
        <div class="divider"></div>
        <div class="nav-list">
          <the-nav></the-nav>
        </div>
        <div class="menu" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <transition name="mobile-nav">
        <div class="mobile-nav" v-show="menuMode">
          <div class="divider"></div>
          <the-nav></the-nav>
          <div class="divider"></div>
        </div>
      </transition>
    </div>
    <div class="header-bottom"></div>
    <slot></slot>
  </section>
</template>

<script>
import TheNav from "./TheNav.vue";
const bodyEl = document.querySelector("body");

export default {
  components: {
    TheNav,
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      menuMode: false,
      isPt: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuMode = !this.menuMode;
      if (this.menuMode === true) {
        bodyEl.classList.add("active-mobile-nav");
      } else {
        bodyEl.classList.remove("active-mobile-nav");
      }
    },
    toggleLang(lang) {
      this.isPt = lang;
      if (lang) { 
        this.$router.push("/pt");
      }
    }
  },
  created() {
    bodyEl.classList.remove("active-mobile-nav");
  },
};
</script>

<style scoped>
a{
  cursor: pointer;
}
.mobile-nav-enter-active {
  animation: mobileNav 0.4s ease;
}
.mobile-nav-leave-active {
  animation: mobileNav 0.4s ease reverse;
}

@keyframes mobileNav {
  from {
    right: -100vw;
  }
  to {
    right: 0vw;
  }
}
</style>
