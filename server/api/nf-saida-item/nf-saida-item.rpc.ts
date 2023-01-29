import { TConnections } from "../../../types";
import { TNfSaidaItemRpc } from "../../../types/nf-saida-item.type";
import { nfSaidaItemModel } from "./nf-saida-item.model";

export function nfSaidaItemRpc(connections: TConnections) {
  const model = nfSaidaItemModel(connections);

  const rsp: TNfSaidaItemRpc = {
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
  };
  return rsp;
}
