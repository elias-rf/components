import { crudFactory } from "@mono/utils/crud/crud.factory";
import type { TConnections } from "../connections";
import { produto_controle } from "./produto-controle.table";
import type { TProdutoControleModel } from "./produto-controle.type";
//#region import
//#endregion

export function produtoControleModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TProdutoControleModel {
  const connection = connections[produto_controle.database];
  const crud = crudFactory(connection, produto_controle);

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    produto_controle,
  } as TProdutoControleModel;

  return model;
}

//#region other
//#endregion
