import deepmerge from "ts-deepmerge";
import { TProdutoItemRpc } from "./produto-item.type";
//#region import
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
//#endregion

export const produtoItemService = deepmerge(rpcFactory("produtoitem"), {
  //#region service
  query: {
    async produtoPlano(args) {
      const rsp = cache.fetch({
        key: "produtoItemProdutoPlano",
        callback: fetcherRpc.query,
        args: ["produtoItemProdutoPlano", args],
      });
      return rsp;
    },
  },
  //#endregion
} as TProdutoItemRpc);

//#region other
//#endregion
