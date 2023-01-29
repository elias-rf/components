import type { TConnections } from "../../../types";
import { TGroupSubjectRpc } from "../../../types/group-subject.type";
import { isEmpty } from "../../../utils/identify/is_empty";
import { crudModel } from "../crud/crud.model";

const table = "group_subject";

export function groupSubjectModel(connections: TConnections): TGroupSubjectRpc {
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },

      // LIST
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },

      // CLEAR
      async clear() {
        return crud.clear({ table });
      },

      async can({ id }) {
        const rec = await crud.read({ table, id });
        return !isEmpty(rec);
      },
    },
    mutation: {
      // DEL
      async del({ id }) {
        return crud.del({ table, id });
      },

      // CREATE
      async create({ data }) {
        return crud.create({ table, data });
      },

      // UPDATE
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
}
