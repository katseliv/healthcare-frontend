import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "../views/Login.vue"
import PatientRegistration from "../views/PatientRegistration.vue"
import AdminRegistration from "../views/AdminRegistration.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: PatientRegistration
  },
  {
    path: '/admin',
    component: AdminRegistration,
    children: [
      {
        path: 'registration',
        component: AdminRegistration
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
