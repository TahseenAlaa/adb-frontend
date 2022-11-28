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
    path: '/viewpanels/:patient_uuid/:patient_history_uuid?',
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
    path: '/inventory-management',
    name: 'inventory_management',
    component: () => import(/* webpackChunkName: "about" */ '../views/InventoryManagementView.vue')
  },
  {
    path: '/new-input-doc',
    name: 'new_input_doc',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewInputDocument.vue')
  },
  {
    path: '/new-output-doc',
    name: 'new_output_doc',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewOutputDocument.vue')
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
  {
    path: '/pharmacy-management',
    name: 'pharmacy-management',
    component: () => import(/* webpackChunkName: "about" */ '../views/PharmacyManagementView.vue')
  },
  {
    path: '/providers-management',
    name: 'providers-management',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProvidersView.vue')
  },
  {
    path: '/drug-management',
    name: 'drug-management',
    component: () => import(/* webpackChunkName: "about" */ '../views/DrugsManagementView.vue')
  },
  {
    path: '/committee-approval',
    name: 'committee-approval',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommitteeApprovalView.vue')
  },
  {
    path: '/committee-approval-confirm/:patient_history_uuid',
    name: 'committee-approval-confirm',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommitteeApprovalConfirmView.vue')
  },
  {
    path: '/modify-patient-info/:patient_uuid',
    name: 'modify-patient-info',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModifyPatientInfo.vue')
  },
  {
    path: '/edit-input-document/:doc_id',
    name: 'edit-input-document',
    component: () => import(/* webpackChunkName: "about" */ '../views/editInputDocument.vue')
  },
  {
    path: '/edit-output-document/:doc_id',
    name: 'edit-output-document',
    component: () => import(/* webpackChunkName: "about" */ '../views/editOutputDocument.vue')
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
