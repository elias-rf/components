import type { Ids } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
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
  async getProdutoItem(id: Ids) {
    return fetcherRpc("ordemProducaoProdutoItem", { id });
  },

  // Retorna produto do plano a partir da ordem de producao
  async getProdutoPlano(id: Ids) {
    return fetcherRpc("ordemProducaoProdutoPlano", { id });
  },

  // Retorna produto a partir da ordem de producao
  async getProduto(id: Ids) {
    return fetcherRpc("ordemProducaoProduto", { id });
  },

  // Retorna data de fabricacao
  async getDataFabricacao(id: Ids) {
    return fetcherRpc("ordemProducaoDataFabricacao", { id });
  },

  // Retorna data de validade
  async getDataValidade(id: Ids) {
    return fetcherRpc("ordemProducaoDataValidade", { id });
  },

  // Retorna data de validade
  async getVersao(id: Ids) {
    return fetcherRpc("ordemProducaoVersao", { id });
  },

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async getControle(id: Ids, serie: string) {
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
  listEtiquetas(id: Ids) {
    if (isEmpty(id)) return [];
    return fetcherRpc("ordemProducaoEtiquetaExterna", { id });
  },
};
