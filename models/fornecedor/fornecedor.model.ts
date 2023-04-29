import { crudFactory } from "@mono/utils/crud/crud.factory";
import { TConnections } from "../connections";
import { fornecedor } from "./fornecedor.table";
import type { TFornecedorModel } from "./fornecedor.type";
//#region import
//#endregion

export function fornecedorModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TFornecedorModel {
  const connection = connections[fornecedor.database];
  const crud = crudFactory(connection, fornecedor);

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
    fornecedor,
  } as TFornecedorModel;

  return model;
}

//#region other
//#endregion
