import { Context, Next } from "koa";
import rpc from "../rpc/index";

export default [
  {
    method: "post",
    path: "/rpc",
    action: async (ctx: Context, next: Next) => {
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
