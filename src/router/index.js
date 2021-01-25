import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobAgent from '../views/JobAgent.vue'
import DevTasks from '../components/DevTasks.vue'
import Statistics from '../components/Statistics.vue'
import FirstComponent from '../components/FirstComponent.vue'
import JobList from '../components/JobList.vue'
import Status from '../components/Status.vue'
import Network from '../components/Network.vue'
import SignupForm from '../components/SignUpForm.vue'
import LogInForm from '../components/LogInForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobagent',
   
    component: JobAgent,
    children: [
      
      {
        path: '',
        component: FirstComponent,
      },
      {
        path: 'main',
        component: FirstComponent
      },
      {
        path: 'list',
        component: JobList
      },
      {
        path: 'status',
        component: Status
      },
      {
        path: 'statistics',
        component: Statistics
      },
      {
        path: 'network',
        component: Network
      },
      {
        path: 'devtasks',
        component: DevTasks
      }
    ]
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm
  },
  {
    path: '/login',
    name: 'loginform',
    component: LogInForm
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
