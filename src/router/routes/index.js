'use strict';
// Zusammenfassung aller Routen:
import appRoutes from "./app-routes";
import profileRoutes from "./profile-routes";

const routes = [...appRoutes, ...profileRoutes];

export default routes;