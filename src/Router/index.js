import About from "../Views/About.vue";
import Contact from "../Views/Contact.vue";
import Home from "../Views/Home.vue";
import Users from "@/Views/Users.vue";

import { createRouter, createWebHistory } from "vue-router";
import SingleUser from "@/Views/SingleUser.vue";


const routes = [
    { path: '/', name:'home', component: Home },
    { path: '/about-us', name:'about', component: About },
    { path: '/contact-us', name:'contact', component: Contact },
    { path: '/users', name:'users', component: Users },
    { path: '/users/:id', component:SingleUser },
  ]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;