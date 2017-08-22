import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Index from '@/components/index'
import Location from '@/components/location'
import Search from '@/components/search'
import Quality from '@/components/quality'
import Discover from '@/components/discover'
import Mine from '@/components/mine'
import Tabber from '@/components/tabber'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
  	{
  	  path: '/',
  	  redirect: '/index',
    },
    {
  		path: '/tabber',
  		component: Tabber,
      children: [
        {
          path: '/index', 
          component: Index, 
        },
        {
          path: '/location', 
          component: Location, 
        },
        {
          path: '/search', 
          component: Search, 
        },
        {
          path: '/quality', 
          component: Quality, 
        },
        {
          path: '/discover', 
          component: Discover, 
        },
        {
          path: '/mine', 
          component: Mine, 
        }
      ]
    }
    // ,
    // {
    //   path: '/location', 
    //   component: Location, 
    // },
    // {
    //   path: '/search', 
    //   component: Search, 
    // },
    // {
    //   path: '/quality', 
    //   component: Quality, 
    // },
    // {
    //   path: '/discover', 
    //   component: Discover, 
    // },
    // {
    //   path: '/mine', 
    //   component: Mine, 
    // }
  ]
})