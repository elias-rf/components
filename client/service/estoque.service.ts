import { TEstoqueRpc } from "../../types/estoque.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { deepmerge } from "../../utils/object/deepmerge";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "estoque";

export const estoqueService: TEstoqueRpc = deepmerge(
  rpcFactory<TEstoqueRpc>(SERVICE),
  {
    mutation: {
      async increment(args) {
        return fetcherRpc.mutation("estoqueIncrement", args);
      },
    },
  } as TEstoqueRpc
);
