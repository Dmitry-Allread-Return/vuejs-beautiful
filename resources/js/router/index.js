import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/tasks-list',
    name: 'TasksList',
    component: () => import('../views/TasksList.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
