import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return { currentUser: req.currentUser, req, res };
};

export type TContext = inferAsyncReturnType<typeof createContext>;
