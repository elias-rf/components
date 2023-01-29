import { TConnections } from "../../../types";
import { TEstoqueRpc } from "../../../types/estoque.type";
import { estoqueModel } from "../estoque/estoque.model";

export function estoqueRpc(connections: TConnections) {
  const model = estoqueModel(connections);

  const rsp: TEstoqueRpc = {
    query: {
      // SCHEMA
      async schema() {
        return model.query.schema();
      },

      // CLEAR
      async clear() {
        return model.query.clear();
      },

      // LIST
      async list({ where, order, select, limit }) {
        return model.query.list({ where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },
    },
    mutation: {
      // CREATE
      async create({ data }) {
        return model.mutation.create({ data });
      },

      // UPDATE
      async update({ id, data }) {
        return model.mutation.update({ id, data });
      },

      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },
      // INCREMENT
      // prettier-ignore
      async increment({ id, quantidade }) {
      return model.mutation.increment({ id, quantidade });
    },
    },
  };
  return rsp;
}
