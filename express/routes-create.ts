/**
 * Cria rotas para express usando array no seguinte formato:
 * [
 *   {
 *     method:'get',
 *     path:'/',
 *     action: controller,
 *     middleware:[mid1, mid2]
 *   },
 *   ...
 * ]
 * @param router
 */

const routeCreate = (router) => (route) =>
  route.middleware
    ? router[route.method](route.path, ...route.middleware, route.action)
    : router[route.method](route.path, route.action);

export default function routesCreate(router, routes) {
  routes.map(routeCreate(router));
  return router;
}
