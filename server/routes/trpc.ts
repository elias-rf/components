// @filename: server.ts
import * as trpcExpress from "@trpc/server/adapters/express";
import { routers } from "../../model/trpcs";
import { createContext } from "../../utils/trpc/context-server";

export const trpcMiddle = trpcExpress.createExpressMiddleware({
  router: routers,
  createContext,
});

export type TAppRouter = typeof routers;
