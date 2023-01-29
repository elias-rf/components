import type { TConnections } from "../../../types";
import { TAgendaTelefoneRpc } from "../../../types/agenda-telefone.type";
import { agendaTelefoneModel } from "./agenda-telefone.model";

export function agendaTelefoneRpc(connections: TConnections) {
  const model = agendaTelefoneModel(connections);
  const rsp: TAgendaTelefoneRpc = {
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
    },
  };

  return rsp;
}
