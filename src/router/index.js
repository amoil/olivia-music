import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend/Recommend'
import User from '@/pages/user/User'
import Search from '@/pages/search/Search'
import searchList from '@/pages/search/components/searchList'
import Rank from '@/pages/rank/Rank'
import Singer from '@/pages/singer/Singer'
import Music from '@/pages/music-list/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      // redirect: { path: '/recommend' },
      component: Recommend
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/search',
      name: 'Search',
      children: [
        {

          path: 'searchlist',
          name: 'searchList',
          component: searchList,


        }
      ],
      component: Search
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },


  ]
})
