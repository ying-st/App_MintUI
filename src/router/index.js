import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Home from '@/components/index'
import Location from '@/components/location'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
  	{
  	  path: '/',
  	  redirect: '/index',
  	},

    {
		path: '/index',
		// name: 'Hello',
		component: Home,
    },
    {
		path: '/location', 
		component: Location, 
    }
  ]
})