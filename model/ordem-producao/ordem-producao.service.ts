import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TOrdemProducaoRpc } from "./ordem-producao.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
//#endregion

export const ordemProducaoService = deepmerge(rpcFactory("ordemProducao"), {
  //#region service
  query: {
    // Retorna produtoItem a partir da ordem de producao
    async produtoItem(args) {
      return fetcherRpc.query("ordemProducaoProdutoItem", args);
    },

    // Retorna produto do plano a partir da ordem de producao
    async produtoPlano(args) {
      return fetcherRpc.query("ordemProducaoProdutoPlano", args);
    },

    // Retorna data de fabricacao
    async dataFabricacao(args) {
      return fetcherRpc.query("ordemProducaoDataFabricacao", args);
    },

    // Retorna data de validade
    async dataValidade(args) {
      return fetcherRpc.query("ordemProducaoDataValidade", args);
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async controle(args) {
      return fetcherRpc.query("ordemProducaoControle", args);
    },

    // Retorna ordem de producao a partir de um controle
    async fromControle(args) {
      return fetcherRpc.query("ordemProducaoFromControle", args);
    },

    // Valida se número de série é válido
    async ehControleValido(args) {
      return fetcherRpc.query("ordemProducaoEhControleValido", args);
    },

    // Lista etiquetas
    async etiquetaExterna(args) {
      if (isEmpty(args.id)) return [];
      return fetcherRpc.query("ordemProducaoEtiquetaExterna", args);
    },
  },
  //#endregion
} as TOrdemProducaoRpc);

//#region other
//#endregion
