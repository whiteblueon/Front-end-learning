import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import List from '@/components/List'
import SubList1 from '@/components/Sublist1'
import SubList2 from '@/components/Sublist2'
import Error from '@/components/Error'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children:[
          {
          path:'/list/subList1',
          name:'sublist1',
          component: SubList1
        },
        {
          path:'/list/subList2/:usename/:age',
          component: SubList2
        },
        
        
        
      ]
    },
    {
      path:'/list/subList1',
      component: Index,
      alias:'/home'
    },
    {
      path:'/home/subList2/:usename/:age',
      redirect:'/list/subList2/:usename/:age'
    },
    {
      path:'*',
      component: Error
    }
  ]
})
