import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import routes from 'virtual:generated-pages';

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router