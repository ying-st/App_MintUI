import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Tabber from '@/components/tabber'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
  	{
  	  path: '/',
  	  redirect: '/tabber',
    },
  	
    {
  		path: '/tabber',
  		component: Tabber,
    }
  ]
})