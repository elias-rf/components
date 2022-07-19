import { rpcFactory } from "../lib/http/rpc.factory";

type NfEntradaControleRecord = {
  CdFilial?: string;
  NumNota?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: string;
  CdProduto?: string;
  NumLote?: string;
  Quantidade?: string;
};

export const estoqueService = {
  ...rpcFactory("nfEntradaControle"),
};
