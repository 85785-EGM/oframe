import Home from '@/views/Home.vue'
import Router from '@/views/Router.vue'

export default [
  {
    name: 'guide',
    path: '/guide',
    component: Router,
    children: [
      {
        name: 'guide-home',
        path: 'home',
        component: Home
      }
    ]
  }
]
