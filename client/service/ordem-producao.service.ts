import { TOrdemProducaoRpc } from "../../types/ordem-producao.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { deepmerge } from "../../utils/object/deepmerge";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "ordemProducao";

export const ordemProducaoService: TOrdemProducaoRpc = deepmerge(
  rpcFactory<TOrdemProducaoRpc>(SERVICE),
  {
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

    // clear() {
    //   return {
    //     kOp: "",
    //     DataEmissao: "",
    //     DataFechamento: "",
    //     DataUltimoLancamento: "",
    //     Expiracao: "",
    //     IndiceRefracao: "",
    //     IndiceRefracao2: "",
    //     LoteFabricante: "",
    //     NomeUsuario: "",
    //     Obs: "",
    //     QtdEmProcesso: "",
    //     QtdEstExt_tmp: "",
    //     Quantidade: "",
    //     Selecao: "",
    //     Travado: "",
    //     emProcesso: "",
    //     fkLoteEstExt: "",
    //     fkLoteEstInt: "",
    //     fkOPMestre: "",
    //     fkOpPai: "",
    //     fkOperacaoEmProcesso: "",
    //     fkPrimeiraOperacao: "",
    //     fkProdutoItem: "",
    //     fkTipoOP: "",
    //     loteTamboreamento: "",
    //     versao: "",
    //   };
    // },
  } as TOrdemProducaoRpc
);
