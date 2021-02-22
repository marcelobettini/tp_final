import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tableHome from '../views/tableHome'
import tableTbl from '../views/tableTbl'
import editModal from '../components/editModal'
import deleteModal from '../components/deleteModal'
import addModal from '../components/addModal'
import tableFiltered from '../components/tableFiltered'
import progress from '../components/progress'

import About from '../views/About'
import luzadentroProductos from '../views/luzadentroProductos'
import luzadentroContactos from '../views/luzadentroContactos'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/tableHome',
    name: 'tableHome',
    component: tableHome,
  },
  {
    path: '/tableTbl',
    name: 'tableTbl',
    component: tableTbl,
  },
  {
    path: '/editModal',
    name: 'editModal',
    component: editModal,
  },
  {
    path: '/deleteModal',
    name: 'deleteModal',
    component: deleteModal,
  },
  {
    path: '/addModal',
    name: 'addModal',
    component: addModal,
  },
  {
    path: '/progress',
    name: 'progress',
    component: progress,
  },
  {
    path: '/tableFiltered',
    name: 'tableFiltered',
    component: tableFiltered,
    props: true
  },
  {
    path: '/luzadentroProductos',
    name: 'luzadentroProductos',
    component: luzadentroProductos,
  },
  {
    path: '/luzadentroContactos',
    name: 'luzadentroContactos',
    component: luzadentroContactos,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
