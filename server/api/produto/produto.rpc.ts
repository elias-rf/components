import { TConnections } from "../../../types";
import { TProdutoRpc } from "../../../types/produto.type";
import { produtoModel } from "./produto.model";

export function produtoRpc(connections: TConnections): TProdutoRpc {
  const model = produtoModel(connections);
  return {
    query: {
      async schema() {
        return model.query.schema();
      },

      // LIST
      async list({ where, order, select, limit }) {
        return model.query.list({ where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },

      // CLEAR
      async clear() {
        return model.query.clear();
      },
    },
    mutation: {
      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },

      // CREATE
      async create({ data, select }) {
        return model.mutation.create({ data, select });
      },

      // UPDATE
      async update({ id, data, select }) {
        return model.mutation.update({ id, data, select });
      },
    },
  };
}
