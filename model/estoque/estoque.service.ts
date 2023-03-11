import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TEstoqueRpc } from "./estoque.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
//#endregion

export const estoqueService = deepmerge(rpcFactory("estoque"), {
  //#region service
  mutation: {
    async increment(args) {
      return fetcherRpc.mutation("estoqueIncrement", args);
    },
  },
  //#endregion
} as TEstoqueRpc);

//#region other
//#endregion
