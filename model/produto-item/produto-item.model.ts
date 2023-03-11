
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { produto_item } from "./produto-item.table";
import type { TProdutoItemModel } from "./produto-item.type";
//#region import
import { TProdutoPlanoRpc } from "../produto-plano/produto-plano.type";
import { produtoItemMethods } from "./model.methods";
//#endregion

export function produtoItemModelFactory(
  //#region inject
  {
    connections,
    produtoPlanoModel,
  }: {
    connections: TConnections;
    produtoPlanoModel: TProdutoPlanoRpc;
  }
): //#endregion
TProdutoItemModel {

  const connection = connections[produto_item.database]
  const crud = crudFactory(
    connection,
    produto_item
  );

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      ...produtoItemMethods({
        produtoPlanoModel,
        produtoItemCrud: crud,
        produto_item,
      }).query,
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    produto_item,
  } as TProdutoItemModel;

  return model
}

//#region other
//#endregion
