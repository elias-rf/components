import { TConnections } from "../../../types";
import { TNfEntradaControleRpc } from "../../../types/nf-entrada-controle.type";
import { nfEntradaControleModel } from "./nf-entrada-controle.model";

export function nfEntradaControleRpc(
  connections: TConnections
): TNfEntradaControleRpc {
  const model = nfEntradaControleModel(connections);

  return {
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
        return model.query.list({
          where,
          order,
          select,
          limit,
        });
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
    },
  };
}
