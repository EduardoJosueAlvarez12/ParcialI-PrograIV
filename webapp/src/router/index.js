import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import RegistroView from '../views/RegistroView.vue'
import CenaView from '../views/CenaView.vue'
import DesayunoView from '../views/DesayunoView.vue'
import About from '../views/About.vue'
import Almuerzos from '../views/almuerzoView.vue'
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
    path: '/almuerzo',
    name: 'Almuerzo',
    component: Almuerzos
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
