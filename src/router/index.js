import { createRouter, createWebHistory } from 'vue-router'
import PersonalDetails from '../views/PersonalDetails.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import EmailVerification from '../views/EmailVerification.vue'


const routes = [
  {
    path: '/',
    name: 'PersonalDetails',
    component: PersonalDetails
  },
  {
    path: '/CompanyDetails',
    name: 'CompanyDetails',
    component: CompanyDetails
  },
  {
    path: '/EmailVerification',
    name: 'EmailVerification',
    component: EmailVerification
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
