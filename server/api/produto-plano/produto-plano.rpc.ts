import { TConnections } from "../../../types";
import { TProdutoPlanoRpc } from "../../../types/produto-plano.type";
import { produtoPlanoModel } from "./produto-plano.model";

export function produtoPlanoRpc(connections: TConnections): TProdutoPlanoRpc {
  const model = produtoPlanoModel(connections);

  return {
    query: {
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
    },
  };
}
