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

export default function routesCreate(router, routes) {
  for (const route of routes) {
    router[route.method](route.path, route.action);
  }
  return router;
}
