import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TNfEntradaRpc } from "./nf-entrada.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
//#endregion

export const nfEntradaService = deepmerge(rpcFactory("nfEntrada"), {
  //#region service
  mutation: {
    async transferenciaCreate(args) {
      return cache.fetch({
        key: "nfEntradaTransferenciaCreate",
        callback: fetcherRpc.mutation,
        args: ["nfEntradaTransferenciaCreate", args],
      });
    },
  },
  //#endregion
} as TNfEntradaRpc);

//#region other
//#endregion
