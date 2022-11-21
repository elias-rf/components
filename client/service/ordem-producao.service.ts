import type { TIds } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { rpcFactory } from "../lib/http/rpc.factory";

export const ordemProducaoService = {
  ...rpcFactory("ordemProducao"),

  clear() {
    return {
      kOp: "",
      DataEmissao: "",
      DataFechamento: "",
      DataUltimoLancamento: "",
      Expiracao: "",
      IndiceRefracao: "",
      IndiceRefracao2: "",
      LoteFabricante: "",
      NomeUsuario: "",
      Obs: "",
      QtdEmProcesso: "",
      QtdEstExt_tmp: "",
      Quantidade: "",
      Selecao: "",
      Travado: "",
      emProcesso: "",
      fkLoteEstExt: "",
      fkLoteEstInt: "",
      fkOPMestre: "",
      fkOpPai: "",
      fkOperacaoEmProcesso: "",
      fkPrimeiraOperacao: "",
      fkProdutoItem: "",
      fkTipoOP: "",
      loteTamboreamento: "",
      versao: "",
    };
  },

  // Retorna produtoItem a partir da ordem de producao
  async getProdutoItem(id: TIds) {
    return fetcherRpc("ordemProducaoProdutoItem", { id });
  },

  // Retorna produto do plano a partir da ordem de producao
  async getProdutoPlano(id: TIds) {
    return fetcherRpc("ordemProducaoProdutoPlano", { id });
  },

  // Retorna produto a partir da ordem de producao
  async getProduto(id: TIds) {
    return fetcherRpc("ordemProducaoProduto", { id });
  },

  // Retorna data de fabricacao
  async getDataFabricacao(id: TIds) {
    return fetcherRpc("ordemProducaoDataFabricacao", { id });
  },

  // Retorna data de validade
  async getDataValidade(id: TIds) {
    return fetcherRpc("ordemProducaoDataValidade", { id });
  },

  // Retorna data de validade
  async getVersao(id: TIds) {
    return fetcherRpc("ordemProducaoVersao", { id });
  },

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async getControle(id: TIds, serie: string) {
    return fetcherRpc("ordemProducaoControle", { id, serie });
  },

  // Retorna ordem de producao a partir de um controle
  fromControle({ controle }: { controle: string }) {
    return fetcherRpc("ordemProducaoFromControle", { controle });
  },

  // Valida se número de série é válido
  isControleValid(controle: string) {
    return fetcherRpc("ordemProducaoControleValido", { controle });
  },

  // Lista etiquetas
  listEtiquetas(id: TIds) {
    if (isEmpty(id)) return [];
    return fetcherRpc("ordemProducaoEtiquetaExterna", { id });
  },
};
