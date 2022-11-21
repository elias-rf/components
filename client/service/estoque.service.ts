import type { TIds } from "../../types";
import { TEstoque } from "../../types/estoque.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

export const estoqueService = {
  ...rpcFactory<TEstoque>("estoque"),
  async increment(id: TIds, quantidade: number) {
    return fetcherRpc("estoqueIncrement", { id, quantidade });
  },
};
