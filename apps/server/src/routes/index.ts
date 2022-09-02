import { routesCreate } from "@er/utils/src/routes-create";
import Router from "@koa/router";

// import knex from "./knex.router";
import { rpcRouter } from "./rpc.router";

const api = [...rpcRouter];

export const router = new Router({ prefix: "/api" });
routesCreate(router, api);
