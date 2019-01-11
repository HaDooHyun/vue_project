import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '@/components/TodoPage'
import EmptyPage from '@/components/EmptyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/empty/:name',
      name: 'EmptyPage',
      component: EmptyPage
    }
  ]
})
