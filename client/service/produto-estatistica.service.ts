import { TProdutoEstatisticaRpc } from "../../types/produto-estatistica.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "produtoEstatistica";

export const produtoEstatisticaService: TProdutoEstatisticaRpc =
  rpcFactory<TProdutoEstatisticaRpc>(SERVICE);
