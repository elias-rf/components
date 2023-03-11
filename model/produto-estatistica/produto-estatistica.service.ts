import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TProdutoEstatisticaRpc } from "./produto-estatistica.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
//#endregion

export const produtoEstatisticaService = deepmerge(
  rpcFactory("produtoEstatistica"),
  {
    //#region service
    mutation: {
      async increment(args) {
        return fetcherRpc.mutation("produtoEstatisticaIncrement", args);
      },
    },
    //#endregion
  } as TProdutoEstatisticaRpc
);
