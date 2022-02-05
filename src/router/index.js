import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/Login',
    component: ()=>import('../views/Login.vue'),
  },
  {
    path: '/Dashboard',
    component: ()=>import('../views/Dashboard.vue'),
    children:[
      {
      path:'Product',
      component:()=>import('../views/Product.vue'),
      },
    ]
  },
  {
    path: '/NewPage',
    name: '新增葉面',
    component: () => import('../views/NewPage.vue'),
    children:[
      {
      path:'a',
      component:() => import('../views/componentA.vue'),
      },
      {
      path:'b',
      component:() => import('../views/componentB.vue'),
      },
      {
        path:'DynamicRouter/:id',
        component:() => import('../views/DynamicRouter.vue'),
      },
      {
        path:'DynamicRouterByProps/:id',
        component:() => import('../views/DynamicRouterByProps.vue'),
        props:(route)=>{
          return{
            id:route.params.id,
          }
        },
      },
      {
        path:'RouterNavigation',
        component:() => import('../views/RouterNavigation.vue')
      },
      {
      path:'NamedView',
      component:() => import('../views/NamedView.vue'),
      children:[
        {
          path:'c2a',
          components:{
            left:() => import('../views/componentC.vue'),
            right:() => import('../views/componentA.vue'),
          },
        },
      ],
      },
    ],
  },
  // {
  //   path:'/:pathMatch(.*)*',
  //   component:()=>import('../views/NotFound.vue'),
  // },
  {
    path:'/:pathMatch(.*)*',
    redirect:{
      name:'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

