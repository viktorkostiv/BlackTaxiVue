<template>
  <the-header mode="faq-page page"></the-header>
  <section class="faq-page page main-section">
    <div class="container">
      <div class="faq">
        <div class="faq-inf">
          <h2>FAQs</h2>
          <div class="divider"></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <router-link to="/contact-us">Ask a Question</router-link>
        </div>
        <transition-group tag="div" class="faq-list" name="faq">
          <div
            class="faq-item"
            v-for="(item, index) in questions"
            :key="item.id"
            :class="{ active: item.mode }"
          >
            <div class="item-head" @click="closeQuestions(item,index)">
              <p>{{ item.question }}</p>
              <div class="icon"></div>
            </div>
            <transition name="faq-item" mode="out-in">
              <div class="item-body" v-if="item.mode">
                <p>{{ item.answer }}</p>
              </div>
              <div v-else></div>
            </transition>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
  <the-footer mode="faq-page page"></the-footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const questions = ref([
      {
        id: "q1",
        question: "Question 1",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        mode: true,
      },
      {
        id: "q2",
        question: "Question 2",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        mode: false,
      },
      {
        id: "q3",
        question: "Question 3",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        mode: false,
      },
      {
        id: "q4",
        question: "Question 4",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        mode: false,
      },
    ]);
    const currentElement = ref(0);
    const closeQuestions = (e, id) => {
      if (!e.mode) {
        questions.value.forEach((el) => (el.mode = false));
      }
      if (id === currentElement.value) {
        e.mode = true;
      } else {
        e.mode = !e.mode;
      }
      currentElement.value = id;
    };

    return { questions, closeQuestions,currentElement };
  },
};
</script>
<style scoped>
.faq-item-enter-active {
  animation: faqItem 0.4s ease;
}
.faq-item-leave-active {
  animation: faqItem 0.4s ease reverse;
}

.faq-move {
  transition: all 0.4s ease;
}
@keyframes faqItem {
  0% {
    top: -100px;
    opacity: 0;
  }

  10% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    top: 0px;
  }
}
</style>
