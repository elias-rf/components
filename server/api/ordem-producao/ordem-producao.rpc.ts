import { TConnections } from "../../../types";
import { TOrdemProducaoRpc } from "../../../types/ordem-producao.type";
import { ordemProducaoModel } from "./ordem-producao.model";

export function ordemProducaoRpc(connections: TConnections): TOrdemProducaoRpc {
  const model = ordemProducaoModel(connections);

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
        return model.query.list({ where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return model.query.read({ id, select });
      },
      // Retorna produtoItem a partir da ordem de producao
      async produtoItem({ id, select }) {
        return model.query.produtoItem({ id, select });
      },

      // Retorna produto do plano a partir da ordem de producao
      async produtoPlano({ id, select }) {
        return model.query.produtoPlano({ id, select });
      },

      // Retorna produto do plano a partir da ordem de producao
      // prettier-ignore
      // async ordemProducaoProduto({id, select}: { id: TIds; select?: TSelect }) {
      //   return model.query.ordemProducaoProduto({ id, select });
      // },

      // Retorna data de fabricacao
      // prettier-ignore
      async dataFabricacao({id, }) {
        return model.query.dataFabricacao({ id });
      },

      // Retorna data de validade
      // prettier-ignore
      async dataValidade({id, }) {
        return model.query.dataValidade({ id });
      },

      // Retorna data de validade
      // prettier-ignore
      // async ordemProducaoVersao({ id }) {
      //   return model.query.ordemProducaoVersao({ id });
      // },

      // Retorna numero de controle a partir da ordem de producao e numero de serie
      // prettier-ignore
      async controle({id,serie }) {
        return model.query.controle({ id, serie });
      },

      // Retorna numero de controle a partir da ordem de producao e numero de serie
      // prettier-ignore
      async fromControle({controle}: { controle: string }) {
        return model.query.fromControle({ controle });
      },

      // Valida se número de série é válido
      // prettier-ignore
      async ehControleValido({controle}) {
        return model.query.ehControleValido({ controle });
      },

      // Retorna etiquetas externas emitidas para ordem de producao
      // prettier-ignore
      async etiquetaExterna({ id }) {
        return model.query.etiquetaExterna({ id });
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
