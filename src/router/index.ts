import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import {authenticated, guardsFactory} from '@/router/guards';

Vue.use(VueRouter)

export const ROUTE_REGISTER = 'Register'
export const ROUTE_LOGIN = 'Login'

const routes: Array<RouteConfig> = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: ROUTE_LOGIN,
    component: () => import(/* webpackChunkName: "about" */ '../views/authentication/Login.vue')
  },
  {
    path: '/register',
    name: ROUTE_REGISTER,
    component: () => import(/* webpackChunkName: "register" */ '../views/authentication/Registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
router.beforeEach(guardsFactory([authenticated]))

export default router

