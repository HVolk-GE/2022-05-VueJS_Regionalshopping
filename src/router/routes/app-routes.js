'use strict';
import store from "@/landing";

const appRoutes = [
    {
        path: "/",
        component: () => import("@/pages/TheHomePage.vue"), 
        beforeEnter: (to, from, next) => {
            if (store.getters.isAuthenticated) {
                next("/main");
            } else {
                next();
            }
        },
    },
];

export default appRoutes;
