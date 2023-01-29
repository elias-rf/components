import { TProdutoControleRpc } from "../../types/produto-controle.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "produtoControle";
export const produtoControleService: TProdutoControleRpc =
  rpcFactory<TProdutoControleRpc>(SERVICE);
