import { TEstoqueRecord } from "@er/server/src/model/plano/estoque.model";
import type { Id } from "@er/types";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

export const estoqueService = {
  ...rpcFactory<TEstoqueRecord>("estoque"),
  async increment(id: Id, quantidade: number) {
    return fetcherRpc("estoqueIncrement", { id, quantidade });
  },
};
