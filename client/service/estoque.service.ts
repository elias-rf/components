import type { Ids } from "../../types";
import { TEstoque } from "../../types/estoque.type";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

export const estoqueService = {
  ...rpcFactory<TEstoque>("estoque"),
  async increment(id: Ids, quantidade: number) {
    return fetcherRpc("estoqueIncrement", { id, quantidade });
  },
};
