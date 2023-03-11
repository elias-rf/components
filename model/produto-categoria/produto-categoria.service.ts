import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TProdutoCategoriaRpc } from "./produto-categoria.type";
//#region import
//#endregion

export const produtoCategoriaService = deepmerge(
  rpcFactory("produtoCategoria"),
  {
    //#region service
    //#endregion
  } as TProdutoCategoriaRpc
);

//#region other
//#endregion
