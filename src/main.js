import Vue from 'vue';
import App from './App.vue';

// configure Buefy UI components
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

// configure router
import router from './router';

// configure custom css
import './styles/base.css';
import './styles/index.css';

var app = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
