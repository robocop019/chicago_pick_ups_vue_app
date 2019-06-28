import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'

import GamesIndex from './views/Games/GamesIndex.vue'
import GamesCreate from './views/Games/GamesCreate.vue'
import GamesShow from './views/Games/GamesShow.vue'

import UsersEdit from './views/Users/UsersEdit.vue'
import UsersShow from './views/Users/UsersShow.vue'

import MessagesCreate from './views/Messages/MessagesCreate.vue'
import MessagesView from './views/Messages/MessagesView.vue'

import SignUp from './views/Users/SignUp.vue'
import Login from './views/Users/Login.vue'
import Logout from './views/Users/Logout.vue'

import ParksIndex from './views/Parks/ParksIndex.vue'
import ParksShow from './views/Parks/ParksShow.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Index },

    { path: '/games', name: 'games-index', component: GamesIndex },
    { path: '/games/create', name: 'games-create', component: GamesCreate },
    { path: '/games/:id', name: 'games-show', component: GamesShow },

    { path: '/users/edit/:id', name: 'users-edit', component: UsersEdit },
    { path: '/users/:id', name: 'users-show', component: UsersShow },

    { path: '/messages/:id', name: 'messages-create', component: MessagesCreate },
    { path: '/messages/view/:id', name: 'messages-view', component: MessagesView },

    { path: '/signup', name: 'signup', component: SignUp },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },

    { path: '/parks', name: 'parks-index', component: ParksIndex },
    { path: '/parks/:id', name: 'parks-show', component: ParksShow }

  ]
})
