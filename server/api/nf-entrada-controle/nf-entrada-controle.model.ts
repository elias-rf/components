import { TConnections } from "../../../types";
import { TNfEntradaControleRpc } from "../../../types/nf-entrada-controle.type";
import { crudModel } from "../crud/crud.model";

const table = "nf_entrada_controle";

export function nfEntradaControleModel(
  connections: TConnections
): TNfEntradaControleRpc {
  const crud = crudModel(connections);
  const model: TNfEntradaControleRpc = {
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
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
  return model;
}
