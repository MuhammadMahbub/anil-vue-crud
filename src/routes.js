import SignUp from "./components/SignUp.vue"
import HomePage from "./components/Home.vue"
import LogIn from "./components/Login.vue"
import Update from "./components/Update.vue";
import Add from "./components/Add.vue";

import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        name:"HomePage",
        component : HomePage,
        path:"/"
    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/sign-up"
    },
    {
        name:"LogIn",
        component:LogIn,
        path:"/login"
    },
    {
        name:"Add",
        component:Add,
        path:"/add"
    },
    {
        name:"Update",
        component:Update,
        path:"/update"
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
