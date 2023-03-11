import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TPagarRpc } from "./pagar.type";
//#region import
//#endregion

export const pagarService = deepmerge(rpcFactory("pagar"), {
  //#region service
  //#endregion
} as TPagarRpc);

//#region other
//#endregion
