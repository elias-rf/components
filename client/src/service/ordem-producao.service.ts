import type { Id } from "../../../types";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

interface OrdemProducaoInput {
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
  fkProdutoItem: string;
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
    return fetcherRpc("ordemProducaoProdutoItem", { id }) as Promise<number>;
  },

  // Retorna produto do plano a partir da ordem de producao
  async getProdutoPlano(id: Id) {
    return fetcherRpc("ordemProducaoProdutoPlano", { id }) as Promise<string>;
  },

  // Retorna produto a partir da ordem de producao
  async getProduto(id: Id) {
    return fetcherRpc("ordemProducaoProduto", { id }) as Promise<number>;
  },

  // Retorna data de fabricacao
  async getDataFabricacao(id: Id) {
    return fetcherRpc("ordemProducaoDataFabricacao", { id }) as Promise<string>;
  },

  // Retorna data de validade
  async getDataValidade(id: Id) {
    return fetcherRpc("ordemProducaoDataValidade", { id }) as Promise<string>;
  },

  // Retorna data de validade
  async getVersao(id: Id) {
    return fetcherRpc("ordemProducaoVersao", { id }) as Promise<string>;
  },

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async getControle(id: Id, serie: string) {
    return fetcherRpc("ordemProducaoControle", {
      id,
      serie,
    }) as Promise<string>;
  },

  // Valida se número de série é válido
  isControleValid(controle: string) {
    return fetcherRpc("ordemProducaoControleValido", {
      controle,
    }) as Promise<boolean>;
  },
};
