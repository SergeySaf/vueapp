import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routers: [
    {path:'/', component: Users},
    {path:'/test', component: Test}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
    <div id="app">
    <ul>
    <li><router-link to="/">Users</router-link></li>
    <li><router-link to="/test">Test</router-link></li>
    </ul>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')
