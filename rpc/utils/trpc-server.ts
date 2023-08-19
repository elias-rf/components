import { initTRPC } from "@trpc/server";
import type { TContext } from "./context-server";

export const t = initTRPC.context<TContext>().create();
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;

export const mergeRouters = t.mergeRouters;
