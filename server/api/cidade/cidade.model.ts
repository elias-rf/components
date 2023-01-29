import type { TConnections } from "../../../types";
import { TCidadeRpc } from "../../../types/cidade.type";
import { crudModel } from "../crud/crud.model";

const table = "cidade";

export function cidadeModel(connections: TConnections) {
  const crud = crudModel(connections);
  const rsp: TCidadeRpc = {
    query: {
      // SCHEMA
      async schema() {
        return crud.schema({ table });
      },

      // CLEAR
      async clear() {
        return crud.clear({ table });
      },

      // LIST
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
    },
    mutation: {
      // CREATE
      async create({ data, select }) {
        return crud.create({ table, data, select });
      },

      // UPDATE
      async update({ id, data, select }) {
        return crud.update({ table, id, data, select });
      },

      // DEL
      async del({ id }) {
        return crud.del({ table, id });
      },
    },
  };
  return rsp;
}
