import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produto_plano } from "./produto-plano.table";
import type { TProdutoPlanoModel } from "./produto-plano.type";
//#region import
//#endregion

export function produtoPlanoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TProdutoPlanoModel {
  const connection = connections[produto_plano.database];
  const crud = crudFactory(connection, produto_plano);

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
    produto_plano,
  } as TProdutoPlanoModel;

  return model;
}

//#region other
//#endregion
