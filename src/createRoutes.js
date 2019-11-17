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

const createRoute = router => route =>
  route.middleware
    ? router[route.method](route.path, ...route.middleware, route.action)
    : router[route.method](route.path, route.action);

module.exports = function createRoutes(router, routes) {
  routes.map(createRoute(router));
  return router;
}
