import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TProdutoControleRpc } from "./produto-controle.type";
//#region import
//#endregion

export const produtoControleService = deepmerge(rpcFactory("produtoControle"), {
  //#region service
  //#endregion
} as TProdutoControleRpc);

//#region other
//#endregion
