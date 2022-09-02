import { Context, Next } from "koa";
import knexJson from "../utils/database/knex-json";

export default [
  {
    method: "post",
    path: "/knex/:db",
    action: async (ctx: Context, next: Next) => {
      const qry = ctx.request.body;
      const db = ctx.params.db;
      const knexDbs = ctx.knexDbs;

      if (["oftalmo", "plano", "fullvision"].includes(db)) {
        const query = knexJson(knexDbs[db], qry);
        ctx.log.info(query.toString());
        try {
          const result = await query;
          ctx.body = result;
        } catch (err: any) {
          const msg = err.message;
          ctx.status = 500;
          ctx.body = { error: msg };
        }
      } else {
        ctx.status = 400;
        ctx.body = `db: ${db} not found`;
      }
    },
  },
  {
    method: "post",
    path: "/knex/sql/:db",
    action: async (ctx: Context, next: Next) => {
      const qry = ctx.request.body;
      const db = ctx.params.db;
      const knexDbs = ctx.knexDbs;

      if (["oftalmo", "plano", "fullvision"].includes(db)) {
        const query = knexJson(knexDbs[db], qry);
        try {
          ctx.body = await query.toString();
        } catch (err: any) {
          const msg = err.message;
          ctx.status = 500;
          ctx.body = { error: msg };
        }
      } else {
        ctx.status = 400;
        ctx.body = `db: ${db} not found`;
      }
    },
  },
];
