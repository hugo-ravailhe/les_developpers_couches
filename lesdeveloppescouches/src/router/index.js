import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Classes from "@/views/Classes";
import Profile from "@/views/Profile";
import BecomeATeacher from "@/views/BecomeATeacher"
import Settings from "@/views/Settings"
import Teacher from "@/views/Teacher";

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
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// eslint-disable-next-line
router.beforeEach(async (to, from) => {
  const loggedIn = localStorage.getItem("token") !== null
  const protectedViews = ['/becomeateacher', '/settings', '/profile', '/classes']

  if (loggedIn) {
    if (to.path === "/becomeateacher" && localStorage.getItem("isTeacher") !== undefined) {
      return "/teacher";
    }
  }

  if (!loggedIn && protectedViews.find((el) => el === to.path)) {
    return "/login";
  }

  else if (loggedIn && ['/', '/login', '/register'].find((el) => el === to.path)) {
    return "/classes"
  }
})

export default router
