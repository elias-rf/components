import { TConnections } from "../../../types";
import { TProdutoRpc } from "../../../types/produto.type";
import { crudModel } from "../crud/crud.model";

const table = "produto";

export function produtoModel(connections: TConnections): TProdutoRpc {
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
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data, select }) {
        return crud.create({ table, data, select });
      },
      async update({ id, data, select }) {
        return crud.update({ table, id, data, select });
      },
    },
  };
}
