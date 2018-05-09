import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
// import Login from 'components/login/login'
import Home from 'components/home/home'
import Temp from 'components/temp/temp'
import Trans from 'components/trans/trans'
import Alarm from 'components/alarm/alarm'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/temp'
    },
    {
      path:'/home',
      component: Home,
      redirect: '/home/temp',
      children: [
        {
          path: 'temp',
          component: Temp
        },
        {
           path: 'alarm',
           component: Alarm
        },
        {
           path: 'trans',
           component:Trans
        }
      ]
    }
  ]
})
