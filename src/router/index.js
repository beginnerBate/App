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
          name:'体温检测',
          component: Temp
        },
        {
           path: 'alarm',
           name:'输液报警',
           component: Alarm
        },
        {
           path: 'trans',
           name:'输液监测',
           component:Trans
        }
      ]
    }
  ]
})
