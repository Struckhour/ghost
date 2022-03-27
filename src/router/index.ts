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
        path: '/breakpoint',
        name: 'Breakpoint',
        component: Breakpoint,
    },
    {
        path: '/wildlands',
        name: 'Wildlands',
        component: Wildlands,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router