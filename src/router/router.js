import Main from "@/pages/MainPage";
import AddWorkerForm from "@/pages/AddWorkerForm";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/addWorker',
        component: AddWorkerForm
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

});

export default router;
