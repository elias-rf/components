import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res, currentUser: req.user };
};

export type TContext = inferAsyncReturnType<typeof createContext>;
