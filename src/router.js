import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'

import GamesShow from './views/GamesShow.vue'

import UsersShow from './views/UsersShow.vue'

import ParksIndex from './views/ParksIndex.vue'
import ParksShow from './views/ParksShow.vue'

import Login from './views/Login.vue'
import Logout from './views/Logout.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Index },
    { path: '/games/:id', name: 'games-show', component: GamesShow },
    { path: '/users/:id', name: 'users-show', component: UsersShow },
    { path: '/parks', name: 'parks-index', component: ParksIndex },
    { path: '/parks/:id', name: 'parks-show', component: ParksShow },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
