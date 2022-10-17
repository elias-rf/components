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

export function routesCreate(router: any, routes: any) {
  for (const route of routes) {
    router[route.method](route.path, route.action);
  }
  return router;
}
