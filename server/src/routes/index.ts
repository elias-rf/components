import Router from "@koa/router";
import routesCreate from "../utils/express/routes-create";

import knex from "./knex.router";
import auth from "./auth.router";
import rpc from "./rpc.router";

const api = [...auth, ...knex, ...rpc];

const router = new Router({ prefix: "/api" });
routesCreate(router, api);

export default router;
