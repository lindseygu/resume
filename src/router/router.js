import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../views/index.vue"
import Home from "../views/home.vue";
import MobileIndex from "../views/mobile-index.vue"
import MobileHome from "../views/mobile-home.vue"

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        redirect: "/home",
        children: [
            {
                path: "home",
                component: Home,
                name: "Home"
            },

        ]
    },
    {
        path: "/mobile",
        name: "MobileIndex",
        component: MobileIndex,
        redirect: "/mobile/home",
        children: [
            {
                path: "home",
                name:"MobileHome",
                component: MobileHome,
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router