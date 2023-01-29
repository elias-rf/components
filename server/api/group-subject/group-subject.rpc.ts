import type { TConnections } from "../../../types";
import { TGroupSubjectRpc } from "../../../types/group-subject.type";
import { groupSubjectModel } from "./group-subject.model";

export function groupSubjectRpc(connections: TConnections): TGroupSubjectRpc {
  const model = groupSubjectModel(connections);
  return {
    query: {
      // SCHEMA
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

      // CAN
      async can({ id }) {
        return model.query.can({ id });
      },
    },
    mutation: {
      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },

      // CREATE
      async create({ data }) {
        return model.mutation.create({ data });
      },

      // UPDATE
      async update({ id, data }) {
        return model.mutation.update({ id, data });
      },
    },
  };
}
