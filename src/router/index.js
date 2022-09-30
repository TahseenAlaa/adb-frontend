import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView";
import DashboardView from "@/views/DashboardView";
import SearchView from "@/views/SearchView";
import PharmacyView from "@/views/PharmacyView";
import LoginView from "@/views/LoginView";
import ReceptionView from "@/views/ReceptionView";
import DoctorsView from "@/views/DoctorsView";
import LabView from "@/views/LabView";
import SignupView from "@/views/SignupView";
import ViewPanels from "@/views/ViewPanels";
import ReceptionNewVisitView from "@/views/ReceptionNewVisitView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reception',
    name: 'reception',
    component: ReceptionView
  },
  {
    path: '/reception/newvisit/:patient_uuid',
    name: 'patientnewvisit',
    component: ReceptionNewVisitView
  },
  {
    path: '/doctors/:patient_uuid?',
    name: 'doctors',
    component: DoctorsView
  },
  {
    path: '/lab/:patient_uuid?',
    name: 'lab',
    component: LabView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/search/:department?',
    name: 'search',
    component: SearchView
  },
  {
    path: '/pharmacy/:patient_uuid?',
    name: 'pharmacy',
    component: PharmacyView
  },
  {
    path: '/viewpanels/:patient_uuid',
    name: 'viewpanels',
    component: ViewPanels
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
