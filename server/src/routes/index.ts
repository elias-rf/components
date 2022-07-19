import Router from "@koa/router";
import { routesCreate } from "../../../utils";

// import knex from "./knex.router";
// import auth from "./auth.router";
import { rpcRouter } from "./rpc.router";

const api = [...rpcRouter];

export const router = new Router({ prefix: "/api" });
routesCreate(router, api);
