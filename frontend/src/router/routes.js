import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn'
import DashBoard from '../components/DashBoard'
import HoMe from '../components/HoMe'
import StartStory from '../components/StartStory'
import UserProfile from '../components/UserProfile'
import ReadStory from '../components/ReadStory'

const routes = [
    { path: '/login', component: SignIn },
    { path: '/dashboard', component: DashBoard },
    { path: '/home', component: HoMe },
    { path: '/startstory', component: StartStory },
    { path: '/profile', component: UserProfile },
    { path: '/readstory', component: ReadStory },
    // { path: '/login', component: SignIn },
];


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  
  export default router;