import login from "../dal/login.dal";
import type { Context, Next } from "koa";

export default [
  {
    method: "post",
    path: `/login`,
    action: async (ctx: Context, next: Next) => {
      const user = ctx.request.body;
      const knexDbs = ctx.knexDbs;
      const resp = await login(user, knexDbs);
      ctx.cookies.set("token", resp.token, {
        path: "/",
        maxAge: 36_000_000, // 10 horas
      });
      ctx.body = resp;
    },
  },
  {
    method: "post",
    path: `/logout`,
    action: async (ctx: Context, next: Next) => {
      ctx.cookies.set("token", "", { path: "/", maxAge: -1 });
      ctx.body = true;
    },
  },
  {
    method: "get",
    path: `/me`,
    action: async (ctx: Context, next: Next) => {
      ctx.body = ctx.state.currentUser;
    },
  },
];
