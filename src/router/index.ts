import { createRouter, createWebHistory, RouteLocation, RouteRecordRaw } from "vue-router";

import AuthorizationPage from "../views/AuthorizationPage.vue"
import Login from "../components/Login.vue"
import PatientRegistration from "../components/PatientRegistration.vue"
import AdminRegistration from "../components/AdminProfile/AdminRegistration.vue"
import Portal from "../views/Portal.vue"
import MainScreen from "../components/MainScreen.vue"
import NewVisit from "../components/NewVisit.vue"
import Profile from "../views/Profile.vue"
import ReviewForm from "../components/ReviewForm.vue"




import authGuard from "./guards/auth-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/portal',
    name: 'portal',
    component: Portal,
    redirect: (to: RouteLocation) => {
      return `${to.path}/main-screen`;
    },
    children: [
      {
        path: 'main-screen',
        component: MainScreen
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'new-visit',
        name: 'newVisit',
        component: NewVisit
      },
    ]
  },
  {
    path: '/authorization',
    name: '/authorization',
    component: AuthorizationPage,
    redirect: (to: RouteLocation) => {
      return `${to.path}/login`;
    },
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'registration',
        component: PatientRegistration
      },
      {
        path: 'admin',
        component: AdminRegistration,
      },
    ]
  },
  {
    path: '/review',
    name: 'addReview',
    component: ReviewForm
  },
  {
    path: '/',
    redirect: '/authorization'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
