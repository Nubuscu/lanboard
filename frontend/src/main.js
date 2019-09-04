// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import Dashboard from './components/Dashboard.vue'
import UpdateScore from './components/UpdateScore.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/custom.css'

console.assert(process.env.LANBOARD_BACKEND_URL, 'env vars should not be falsy')

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateScore
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
