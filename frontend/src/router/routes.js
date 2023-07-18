import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn'
import DashBoard from '../components/DashBoard'
import StartStory from '../components/StartStory'
import ContinueStory from '../components/ContinueStory'
import UserProfile from '../components/UserProfile'
import ReadStory from '../components/ReadStory'
import NotiFication from '../components/NotiFication'
import DashboardBottom from '../components/DashboardBottom'
import ModalBox from '../components/ModalBox'

import store from '../store'
// import Store from '../store'
// import NavBar1 from '../components/NavBar1'


const routes = [
    { path: '/login', component: SignIn },
    { path: '/', component: DashBoard },
    { path: '/dashboard', component: DashBoard},
    { path: '/startstory', component: StartStory, meta: {requiresAuth: true} },
    { path: '/continuestory/:story_id', component: ContinueStory, meta: {requiresAuth: true} },
    { path: '/profile', component: UserProfile, meta: {requiresAuth: true} },
    { path: '/readstory/:storyId', component: ReadStory },
    { path: '/notification', component: NotiFication, meta: {requiresAuth: true} },
    { path: '/dash', component: DashboardBottom},
    { path: '/modal', component: ModalBox},
    { path: '/continue', component: ContinueStory},
    // { path: '/nav', component: NavBar1},
    // { path: '/login', component: SignIn },
];


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    if(token != null){
        store.commit('setUserIsAuthenticated', true)
    }
    else{
        store.commit('setUserIsAuthenticated', false)
    }
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(token != null){
            next();
        }
        else{
            router.push("/login")
        }
    }
    else{
        next();
    }
})

export default router;