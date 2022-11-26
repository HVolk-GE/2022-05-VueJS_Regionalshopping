'use strict';
import TheMainPage from "@/pages/TheMainPage.vue";
import TheUpdateProfilePage from "@/pages/TheUpdateProfilePage.vue";
import TheProfilesListPage from "@/pages/TheProfilePage.vue";
import TheProfileDetailPage from "@/pages/TheProfileDetailPage.vue";
import TheSuccessfulPage from "@/pages/TheSuccessfulPage.vue";
import TheProfileDeliversPage from "@/pages/TheProfilesDeliversPage.vue";

const profileRoutes = [
    {
        path: "/main",
        component: TheMainPage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/myprofile",
        component: TheUpdateProfilePage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/profiles",
        component: TheProfilesListPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/profile/detail/:id",
        name: "ProfileDetails",
        component: TheProfileDetailPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/profile/successful",
        name: "Successful",
        component: TheSuccessfulPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/profiles/delivers",
        name: "ProfileDelivers",
        component: TheProfileDeliversPage,
        meta: {
            requiresAuth: true,
        }
    },
]

export default profileRoutes;