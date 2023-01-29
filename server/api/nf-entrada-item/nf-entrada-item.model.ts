import { TConnections } from "../../../types";
import { TNfEntradaItemRpc } from "../../../types/nf-entrada-item.type";
import { crudModel } from "../crud/crud.model";

const table = "nf_entrada_item";

export function nfEntradaItemModel(
  connections: TConnections
): TNfEntradaItemRpc {
  const crud = crudModel(connections);
  const model: TNfEntradaItemRpc = {
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
