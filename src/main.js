import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('the-header' ,TheHeader);
app.component('the-footer', TheFooter);

app.mount('#app');
