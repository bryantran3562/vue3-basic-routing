import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Emails from '../views/Emails.vue'
import EmailDetail from '../views/EmailDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // BT - Adding new route - Step 2: Add this object to your new route. See step3 in App.vue
  {
    path: '/emails',
    name: 'Emails',
    component: Emails
  },
  //BT - Route param - Step 3: Adding your new route. Notes: the /:id - Anything after the ':', vue router
  //                           will go to the EmailDetail page. Not sure how to force the :id as a number.
  //                           Otherwise, anything after that Vue will also route to the EmailDetail. For example,
  //                           emails/1dfasdfa <==String and it still does the route. It should have some way to
  //                            redirect it home page or not found...To fix this, do: :id(\\d+) <==This is regex pattern matching.
  //                            It will only matched with number. Any string will not matched and it will route to NotFound.
  {
    path: '/emails/:id(\\d+)',
    name: 'EmailDetail',
    component: EmailDetail,
    // BT - Route param - Step 4: If you define props: true, then it will pass the id into your EmailDetail template and you can use it directly.
    //      See EmailDetail.vue
    props: true
  },
  //BT - CatchAll at the top level.
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
