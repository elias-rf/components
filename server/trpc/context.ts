import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = (
  opts: trpcExpress.CreateExpressContextOptions
) => {
  return { currentUser: opts.req.currentUser };
  // return opts.req;
};

export type TContext = inferAsyncReturnType<typeof createContext>;
