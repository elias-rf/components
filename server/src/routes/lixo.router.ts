import type { Context, Next } from "koa";
import { getAllMethods } from "../../../utils";
import { connections } from "../dal/connections";
import { PhonebookModel } from "../model/oftalmo/phonebook.model";

export default [
  {
    method: "get",
    path: `/lixo`,
    action: async (ctx: Context, next: Next) => {
      const model = new PhonebookModel(connections);
      ctx.body = getAllMethods(model).map(
        (item) =>
          model.name +
          item.charAt(0).toUpperCase() +
          item.slice(1).toLowerCase()
      );
    },
  },
];
