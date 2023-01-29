import { TConnections } from "../../../types";
import { TNfEntradaRpc } from "../../../types/nf-entrada.type";
import { nfEntradaModel } from "./nf-entrada.model";

export function nfEntradaRpc(connections: TConnections): TNfEntradaRpc {
  const model = nfEntradaModel(connections);

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
      /***  TRANSFERENCIA CREATE ***/
      async transferenciaCreate({ controles }) {
        return model.mutation.transferenciaCreate({ controles });
      },
    },
  };
}
