import { Auth } from '@/models/Auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { auth: false },
    component: Login,
  },
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    meta: { auth: false },
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
  },
  {
    path: '/users',
    name: 'users',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth)
  const credentials: Auth = JSON.parse(localStorage.credentials || '{}')
  if (requiresAuth) {
    if (credentials.accessToken) to.name === 'login' ? next({ name: 'users' }) : next()
    else next('/login')
  } else {
    if (credentials.accessToken) to.path === '/login' ? next({ name: 'users' }) : next()
    next()
  }
})

export default router
