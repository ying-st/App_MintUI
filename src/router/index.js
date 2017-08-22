import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Tabber from '@/components/tabber'
import Location from '@/components/location'
import Search from '@/components/search'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
  	// {
  	//   path: '/',
  	//   redirect: '/tabber',
   //  },
  	
    {
  		path: '/tabber',
  		component: Tabber,
    },
    {
      path: '/location', 
      component: Location, 
    },
    {
      path: '/search', 
      component: Search, 
    }
  ]
})