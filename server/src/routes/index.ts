import Router from "@koa/router";
import { routesCreate } from "../../../utils";

// import knex from "./knex.router";
import lixo from "./lixo.router";
import { rpcRouter } from "./rpc.router";

const api = [...rpcRouter, ...lixo];

export const router = new Router({ prefix: "/api" });
routesCreate(router, api);
