import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Main from '/src/components/Main.vue'
// import ryorBP from '/src/components/ryorBP.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:game',
        name: 'Breakpoint',
        component: Main,
        props: true,
    },
    // {
    //     path: '/app/:ryorBP',
    //     name: 'BreakpointRYOR',
    //     component: ryorBP,
    //     props: true,
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { top: 0}
    }
})
export default router
