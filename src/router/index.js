import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      component: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      component: 'Search',
      component: Search
    }
    //,
    // {
    //   path: '/user',
    //   component: UserCenter
    // }
  ]
})
