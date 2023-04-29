import { crudFactory } from "@mono/utils/crud/crud.factory";
import type { TConnections } from "../connections";
import { produto_categoria } from "./produto-categoria.table";
import type { TProdutoCategoriaModel } from "./produto-categoria.type";
//#region import
//#endregion

export function produtoCategoriaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TProdutoCategoriaModel {
  const connection = connections[produto_categoria.database];
  const crud = crudFactory(connection, produto_categoria);

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
    produto_categoria,
  } as TProdutoCategoriaModel;

  return model;
}

//#region other
//#endregion
