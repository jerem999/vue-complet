import Vue from 'vue'
import Router from 'vue-router'
import Accueil from './views/Accueil.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    }
  ]
})
