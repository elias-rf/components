import { TConnections } from "../../../types";
import { TOperacaoProducaoRpc } from "../../../types/operacao-producao.type";
import { operacaoProducaoModel } from "./operacao-producao.model";

export function operacaoProducaoRpc(
  connections: TConnections
): TOperacaoProducaoRpc {
  const model = operacaoProducaoModel(connections);

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
      // DIARIO
      // prettier-ignore
      async diario({ operacao, inicio, fim }) {
      return model.query.diario({ operacao, inicio, fim });
    },

      // MENSAL
      // prettier-ignore
      async mensal({ operacao, mes }: {
      operacao: string;
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]> {
      return model.query.mensal({ operacao, mes });
    },

      // MODELO
      // prettier-ignore
      async modelo({ operacao, data, produto }: {
      operacao: string;
      data: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]> {
      return model.query.modelo({
        operacao,
        data,
        produto,
      });
    },

      // PRODUTO
      // prettier-ignore
      async produto({ operacao, data }: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return model.query.produto({ operacao, data });
    },

      // TURNO
      // prettier-ignore
      async turno({ operacao, data }: {
      operacao: string;
      data: string;
    }) {
      return model.query.turno({ operacao, data });
    },

      async turnoSchema() {
        return model.query.turnoSchema();
      },

      async produtoSchema() {
        return model.query.produtoSchema();
      },

      async mensalSchema() {
        return model.query.mensalSchema();
      },

      async diarioSchema() {
        return model.query.diarioSchema();
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
    },
  };
}
