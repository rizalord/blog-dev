import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueDisqus from "vue-disqus";
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueSimpleMarkdown from 'vue-simple-markdown';
import "vue-simple-markdown/dist/vue-simple-markdown.css";


Vue.use(VueDisqus);
Vue.use(VueAxios, axios);
Vue.use(VueSimpleMarkdown);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
