import { createRouter, createWebHistory, RouteLocation, RouteRecordRaw } from "vue-router";

import AuthorizationPage from "../views/AuthorizationPage.vue"
import Login from "../components/Login.vue"
import PatientRegistration from "../components/PatientRegistration.vue"
import AdminRegistration from "../components/AdminRegistration.vue"
import Portal from "../views/MainContainer.vue"
import authGuard from "./guards/auth-guard";
import MainScreen from "../components/MainScreen.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/portal',
    name: 'portal',
    component: Portal,
    // beforeEnter: authGuard
    children: [
      {
        path: 'main-screen',
        component: MainScreen
      }
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
    path: '/',
    redirect: '/authorization'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
