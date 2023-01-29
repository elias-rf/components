import { TConnections } from "../../../types";
import { TNfSaidaItemRpc } from "../../../types/nf-saida-item.type";
import { crudModel } from "../crud/crud.model";

const table = "nf_saida";

export function nfSaidaItemModel(connections: TConnections): TNfSaidaItemRpc {
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
  };
}
