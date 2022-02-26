import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import RegistroView from '../views/RegistroView.vue'
import CenaView from '../views/CenaView.vue'
import DesayunoView from '../views/DesayunoView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/registro',
    name: 'RegistroView',
    component: RegistroView
  },


  {
    path: '/cena',
    name: 'CenaView',
    component: CenaView
  },
  
  {
    path: '/desayuno',
    name: 'Desayuno',
    component: DesayunoView
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
