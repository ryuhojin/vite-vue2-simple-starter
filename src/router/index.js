import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const createRouter = () => new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import("@/views/Home.vue")
        }
    ]
})

const router = createRouter();
export default router;