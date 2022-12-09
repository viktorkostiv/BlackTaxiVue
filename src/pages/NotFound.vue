<template>
  <the-header mode="faq-page page"></the-header>
  <div class="not-found">
    <h1>Ooops!</h1>
    <p>404 - PAGE NOT FOUND</p>
    <router-link to="/home">Go to Home Page</router-link>
  </div>
</template>

<style scoped>
.not-found {
  padding: 100px 0;
  text-align: center;
}
.not-found h1 {
  font-weight: 900;
  font-size: 81px;
  line-height: 95px;
}

.not-found p {
  font-weight: 600;
  font-size: 40px;
  line-height: 47px;
  margin: 24px 0 48px;
}
.not-found a {
  margin: auto;
  display: block;
  border: 2px solid #404040;
  border-radius: 5px;
  padding: 12px 25px 11px;
  text-align: center;
  width: 220px;
  font-weight: 700;
  font-size: 18px;
  transition: all ease 0.3s;
}

.not-found a:hover {
  background: #404040;
}

@media (max-width: 768px) {
  .not-found h1 {
    font-size: 61px;
  }

  .not-found p {
    font-size: 30px;
    margin: 0px 0 38px;
  }
}

@media (max-width: 425px) {
  .not-found h1 {
    font-size: 61px;
  }

  .not-found p {
    font-size: 24px;
    margin: 0px 0 38px;
  }
}
</style>
