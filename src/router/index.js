import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import tableHome from '../views/tableHome'
import tableTbl from '../views/tableTbl'
import editModal from '../components/editModal'


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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
