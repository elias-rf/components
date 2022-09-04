import { Context } from "koa";
import { rpc } from "../api/rpc";

export const rpcRouter = [
  {
    method: "post",
    path: "/rpc",
    action: async (ctx: Context) => {
      const method = ctx.request.body;
      const response = await rpc.receive(method, {
        currentUser: ctx.state.currentUser,
      } as any);
      if (response) {
        ctx.body = response;

        switch (method.method) {
          case "login":
            // seta cookie se for login
            ctx.cookies.set("token", response.result.token, {
              path: "/",
              maxAge: 36_000_000, // 10 horas
            });
            break;
          case "logout":
            // reseta cookie se for logout
            ctx.cookies.set("token", "", { path: "/", maxAge: -1 });
            break;

          default:
            break;
        }
      } else {
        ctx.status = 204;
      }
    },
  },
];
