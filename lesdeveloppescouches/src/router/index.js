import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Classes from "@/views/Classes";
import Profile from "@/views/Profile";
import BecomeATeacher from "@/views/BecomeATeacher"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  // {
  //   path: '/profile/settings',
  //   name: 'Profile',
  //   component: Profile
  // },
  // {
  //   path: '/profile/lxp',
  //   name: 'Profile',
  //   component: Profile
  // },
  {
    path: '/becomeateacher',
    name: 'BecomeATeacher',
    component: BecomeATeacher
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
