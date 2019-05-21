import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import home from '@/page/home'
import main from '@/page/index/main'
import articleList from '@/page/article/articleList'
import articleInfo from '@/page/article/articleInfo'
import articleDetails from '@/page/article/articleDetails'

// import HelloWorld from '@/components/HelloWorld'
// import menu from '@/components/menu'
// import header from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: '',
        component: main,
        meta: []
      }, {
        path: '/main',
        component: main,
        meta: []
      }, {
        path: '/articleList',
        name: 'articleList',
        component: articleList,
        meta: []
      }, {
        path: '/articleInfo',
        name: 'articleInfo',
        component: articleInfo,
        meta: []
      }, {
        path: '/articleDetails',
        name: 'articleDetails',
        component: articleDetails,
        meta: []
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
