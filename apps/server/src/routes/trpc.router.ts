import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { Context } from "koa";

const t = initTRPC()();
const appRouter = t.router({
  greet: t.procedure
    .input((val: unknown) => {
      if (typeof val === "string") return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query(({ input }) => ({ greeting: `hello, ${input}!` })),
});

const mid = createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
});

export const rpcRouter = [
  {
    method: "post",
    path: "/trpc",
    action: async (ctx: Context) => {
      const method = ctx.request.body;
      const response = await rpc.receive(method, {
        currentUser: ctx.state.currentUser,
      } as any);
      if (response) {
        ctx.body = response;
      } else {
        ctx.status = 204;
      }
    },
  },
];
