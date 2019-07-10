import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './containers/HomePage';
import TripeoPage from './containers/TripeoPage';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/project/tripeo', component: TripeoPage }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
