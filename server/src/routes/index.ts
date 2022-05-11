import Router from "@koa/router";
import routesCreate from "../utils/express/routes-create";

import knex from "./knex.router";
import auth from "./auth.router";

const api = [...auth, ...knex];

const router = new Router({ prefix: "/api" });
routesCreate(router, api);

export default router;
