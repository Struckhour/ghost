import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Breakpoint from '/src/components/Breakpoint.vue'
import Wildlands from '/src/components/Wildlands.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/app/:game',
        name: 'Breakpoint',
        component: Breakpoint,
        props: true,
    },
    {
        path: '/app/:game',
        name: 'Wildlands',
        component: Breakpoint,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
