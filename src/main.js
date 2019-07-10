import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './containers/HomePage';
import TripeoPage from './containers/TripeoPage';
import TempeoPage from './containers/TempeoPage';
import BingePage from './containers/BingePage';
import YouthemePage from './containers/YouthemePage';
import UfcifyPage from './containers/UfcifyPage';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/project/tripeo', component: TripeoPage },
    { path: '/project/bingewatcher', component: BingePage },
    { path: '/project/youtheme', component: YouthemePage },
    { path: '/project/ufcify', component: UfcifyPage },
    { path: '/project/tempeo', component: TempeoPage },
    { path: '*', component: HomePage }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
