import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from './containers/HomePage';
import TripeoPage from './containers/TripeoPage';
import TempeoPage from './containers/TempeoPage';
import BingePage from './containers/BingePage';
import YouthemePage from './containers/YouthemePage';
import UfcifyPage from './containers/UfcifyPage';
import SniplibPage from './containers/SniplibPage';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects/sniplib', component: SniplibPage },
    { path: '/projects/tripeo', component: TripeoPage },
    { path: '/projects/bingewatcher', component: BingePage },
    { path: '/projects/youtheme', component: YouthemePage },
    { path: '/projects/ufcify', component: UfcifyPage },
    { path: '/projects/tempeo', component: TempeoPage },
    { path: '*', redirect: '/' }
  ],
  mode: 'history',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
