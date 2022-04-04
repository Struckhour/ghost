import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Main from '/src/components/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/app/:game',
        name: 'Breakpoint',
        component: Main,
        props: true,
    },
    {
        path: '/app/:game',
        name: 'Wildlands',
        component: Main,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { top: 0}
    }
})
export default router
