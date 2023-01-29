import type { TConnections } from "../../../types";
import { TCidadeRpc } from "../../../types/cidade.type";
import { cidadeModel } from "./cidade.model";

export function cidadeRpc(connections: TConnections) {
  const model = cidadeModel(connections);
  const rsp: TCidadeRpc = {
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
      async create({ data, select }) {
        return model.mutation.create({ data, select });
      },

      // UPDATE
      async update({ id, data, select }) {
        return model.mutation.update({ id, data, select });
      },

      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },
    },
  };
  return rsp;
}
