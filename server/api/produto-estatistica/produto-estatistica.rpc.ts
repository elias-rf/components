import { TConnections } from "../../../types";
import {
  TProdutoEstatistica,
  TProdutoEstatisticaRpc,
} from "../../../types/produto-estatistica.type";
import { produtoEstatisticaModel } from "./produto-estatistica.model";

export function produtoEstatisticaRpc(
  connections: TConnections
): TProdutoEstatisticaRpc {
  const model = produtoEstatisticaModel(connections);

  return {
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
        return model.query.list({
          where,
          order,
          select,
          limit,
        });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },
    },
    mutation: {
      // CREATE
      async create({ data }) {
        return model.mutation.create({ data });
      },

      // UPDATE
      async update({ id, data }) {
        return model.mutation.update({ id, data });
      },

      // DEL
      async del({ id }) {
        return model.mutation.del({ id });
      },
      // INCREMENT
      async increment({ id, quantidade }): Promise<TProdutoEstatistica> {
        return model.mutation.increment({ id, quantidade });
      },
    },
  };
}
