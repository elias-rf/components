import type { Id } from "@vt/types";
import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

type EstoqueRecord = {
  CdEmpresa?: string;
  CdProduto?: string;
  EstAtual?: string;
};

export const estoqueService = {
  ...rpcFactory("estoque"),
  async increment(id: Id, quantidade: number) {
    return fetcherRpc("estoqueIncrement", { id, quantidade });
  },
};
