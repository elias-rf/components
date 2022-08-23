import { rpcFactory } from "../lib/http/rpc.factory";

export type IProdutoItemRecord = {
  kProdutoItem?: string;
  NomeProdutoItem?: string;
  fkProduto?: string;
  idVisiontech?: string;
};

export const produtoItemService = {
  ...rpcFactory("produtoItem"),

  clear() {
    return {
      kProdutoItem: "",
      NomeProdutoItem: "",
      fkProduto: "",
      idVisiontech: "",
    };
  },
};
