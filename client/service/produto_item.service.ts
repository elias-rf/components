import { TProdutoItemRpc } from "../../types/produto-item.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "produtoItem";

export const produtoItemService: TProdutoItemRpc =
  rpcFactory<TProdutoItemRpc>(SERVICE);

// clear() {
//   return {
//     kProdutoItem: "",
//     NomeProdutoItem: "",
//     fkProduto: "",
//     idVisiontech: "",
//   };
// },
