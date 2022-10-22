import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/reception',
    name: 'reception',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceptionView.vue')
  },
  {
    path: '/antho/:patient_uuid',
    name: 'antho',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnthoView.vue')
  },
  {
    path: '/reception/newvisit/:patient_uuid',
    name: 'patientnewvisit',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceptionNewVisitView.vue')
  },
  {
    path: '/doctors/:patient_uuid?',
    name: 'doctors',
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorsView.vue')
  },
  {
    path: '/lab/:patient_uuid?',
    name: 'lab',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/search/:department?',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
  },
  {
    path: '/pharmacy/:patient_uuid?',
    name: 'pharmacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PharmacyView.vue')
  },
  {
    path: '/viewpanels/:patient_uuid',
    name: 'viewpanels',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewPanels.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/permissions',
    name: 'permissions',
    component: () => import(/* webpackChunkName: "about" */ '../views/PermissionsView.vue')
  },
  {
    path: '/lab-management',
    name: 'lab_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabManagementView.vue')
  },
  {
    path: '/lab-sampling/:patient_uuid',
    name: 'lab_sampling',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabSamplingView.vue')
  },
  {
    path: '/lab-results/:patient_uuid',
    name: 'lab_results',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabResultsView.vue')
  },
  {
    path: '/log-activities',
    name: 'log_activities',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogActivitiesView.vue')
  },
  {
    path: '/users-management',
    name: 'users_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersManagementView.vue')
  },
  {
    path: '/patients-management',
    name: 'patients_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientsManagementView.vue')
  },
  {
    path: '/diagnosis-management',
    name: 'diagnosis_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/DiagnosisManagementView.vue')
  },
  {
    path: '/symptoms-management',
    name: 'symptoms_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/SymptomsManagementView.vue')
  },
  {
    path: 'settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
