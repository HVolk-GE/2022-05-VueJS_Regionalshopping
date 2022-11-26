'use strict';
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import NotFoundPage from "@/pages/TheNotFoundPage.vue";
// import store from "@/landing";

'use strict';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            // Immer am Ende der Routes angeben!!
            path: "/:pathMatch(.*)*",
            component: NotFoundPage,
        },
    ],
});

// ######################################## Open Point #######################################################
// Funktioniert noch nicht !!
// Router fuehr automatisch route, wenn user bereits angemeldet war und die Daten noch im localStorage stehen !
// DEBUG:    console.log("Getters Wert: " + store.getters.isAuthenticated);
// DEBUG:    console.log("Meta Wert: " + to.meta.requiresAuth);
// ###########################################################################################################
/*
router.beforeEach((to, from, next) => {
    console.log("Getters Wert: " + store.getters.isAuthenticated);
    console.log("Meta Wert: " + to.meta.requiresAuth);
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/")
    } else {
        next();
    }
}
);
*/

export default router;
