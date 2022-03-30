import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from "../views/ItemsView.vue"
import EditView from "../views/EditView.vue"
import DetailView from "../views/DetailView.vue"
import DataView from "../views/DataView.vue"
import CreateView from "../views/CreateView.vue"
import DataEditView from "../views/DataEditView.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/items',
    name: 'Items',
    component: ItemsView
  },
  {
    path: '/data',
    name: 'Data',
    component: DataView
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'DataEdit',
    component: DataEditView
  },
  {
    path: '/edit/data/:id',
    name: 'Edit',
    component: EditView
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
