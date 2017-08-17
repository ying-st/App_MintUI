import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/index'
import Location from '@/components/location'

Vue.use(Router)

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