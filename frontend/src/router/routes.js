import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn'
import DashBoard from '../components/DashBoard'
import StartStory from '../components/StartStory'
import ContinueStory from '../components/ContinueStory'
import UserProfile from '../components/UserProfile'
import ReadStory from '../components/ReadStory'
import NotiFication from '../components/NotiFication'


const routes = [
    { path: '/login', component: SignIn },
    { path: '/dashboard', component: DashBoard },
    { path: '/startstory', component: StartStory },
    { path: '/startstory/:story_id', component: ContinueStory },
    { path: '/profile', component: UserProfile },
    { path: '/readstory/:storyId', component: ReadStory },
    { path: '/notification', component: NotiFication },
    // { path: '/login', component: SignIn },
];


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  
  export default router;