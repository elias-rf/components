
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { produto } from "./produto.table";
import type { TProdutoModel } from "./produto.type";
//#region import
//#endregion

export function produtoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TProdutoModel {

  const connection = connections[produto.database]
  const crud = crudFactory(
    connection,
    produto
  );

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
    produto,
  } as TProdutoModel;

  return model
}

//#region other
//#endregion
