import type { TConnections } from "../../../types";
import type { TAgendaTelefoneRpc } from "../../../types/agenda-telefone.type";
import { crudModel } from "../crud/crud.model";

const table = "agenda_telefone";

export function agendaTelefoneModel(
  connections: TConnections
): TAgendaTelefoneRpc {
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
    },
    mutation: {
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
      async del({ id }) {
        return crud.del({ table, id });
      },
    },
  };
}
