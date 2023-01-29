import { TConnections } from "../../../types";
import { TProdutoItemRpc } from "../../../types/produto-item.type";
import { crudModel } from "../crud/crud.model";
import { produtoItemModel } from "./produto-item.model";

const table = "produto_item";

export function produtoItemRpc(connections: TConnections): TProdutoItemRpc {
  const model = produtoItemModel(connections);
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

      // PRODUTO PLANO
      async plano({ id, select }) {
        return model.query.plano({ id, select });
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
