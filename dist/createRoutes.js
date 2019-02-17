"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRoute = router => route => route.middleware
    ? router[route.method](route.path, ...route.middleware, route.action)
    : router[route.method](route.path, route.action);
function createRoutes(router, routes) {
    routes.map(createRoute(router));
    return router;
}
exports.default = createRoutes;
//# sourceMappingURL=createRoutes.js.map