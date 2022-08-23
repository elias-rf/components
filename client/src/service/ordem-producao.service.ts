import type { Id } from "@er/types";
import { isEmpty } from "@er/utils/src";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

interface IOrdemProducao {
  kOp?: string;
  DataEmissao: string;
  DataFechamento: string;
  DataUltimoLancamento: string;
  Expiracao: string;
  IndiceRefracao: string;
  IndiceRefracao2: string;
  LoteFabricante: string;
  NomeUsuario: string;
  Obs: string;
  QtdEmProcesso: string;
  QtdEstExt_tmp: string;
  Quantidade: string;
  Selecao: string;
  Travado: string;
  emProcesso: string;
  fkLoteEstExt: string;
  fkLoteEstInt: string;
  fkOPMestre: string;
  fkOpPai: string;
  fkOperacaoEmProcesso: string;
  fkPrimeiraOperacao: string;
  fkProdutoItem: number;
  fkTipoOP: string;
  loteTamboreamento: string;
  versao: string;
}

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
  async getProdutoItem(id: Id) {
    return fetcherRpc("ordemProducaoProdutoItem", { id });
  },

  // Retorna produto do plano a partir da ordem de producao
  async getProdutoPlano(id: Id) {
    return fetcherRpc("ordemProducaoProdutoPlano", { id });
  },

  // Retorna produto a partir da ordem de producao
  async getProduto(id: Id) {
    return fetcherRpc("ordemProducaoProduto", { id });
  },

  // Retorna data de fabricacao
  async getDataFabricacao(id: Id) {
    return fetcherRpc("ordemProducaoDataFabricacao", { id });
  },

  // Retorna data de validade
  async getDataValidade(id: Id) {
    return fetcherRpc("ordemProducaoDataValidade", { id });
  },

  // Retorna data de validade
  async getVersao(id: Id) {
    return fetcherRpc("ordemProducaoVersao", { id });
  },

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async getControle(id: Id, serie: string) {
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
  listEtiquetas(id: Id) {
    if (isEmpty(id)) return [];
    return fetcherRpc("ordemProducaoEtiquetaExterna", { id });
  },
};
