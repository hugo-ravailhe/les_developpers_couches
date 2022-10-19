import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Classes from "@/views/Classes";
import Profile from "@/views/Profile";
import BecomeATeacher from "@/views/BecomeATeacher"
import Settings from "@/views/Settings"
import {pinia, useCoopeerStore} from "@/stores/store";

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
  {
    path: '/profile/settings',
    name: 'settings',
    component: Settings
  },
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

// eslint-disable-next-line
router.beforeEach(async (to, from) => {
  const loggedIn = localStorage.getItem("token") !== null
  const protectedViews = ['/becomeateacher', '/settings', '/profile', '/classes']
  const store = useCoopeerStore(pinia)

  if (loggedIn) {
    store.decodeToken(localStorage.getItem("token"))
    console.log(store.user)
  }

  if (!loggedIn && protectedViews.find((el) => el === to.path)) {
    return "/login"
  }

  else if (loggedIn && ['/', '/login', '/register'].find((el) => el === to.path)) {
    return "/classes"
  }
})

export default router
