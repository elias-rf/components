import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { operacao_producao } from "./operacao-producao.table";
import type { TOperacaoProducaoModel } from "./operacao-producao.type";
//#region import
//#endregion

export function operacaoProducaoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TOperacaoProducaoModel {
  const connection = connections[operacao_producao.database];
  const crud = crudFactory(connection, operacao_producao);

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
    operacao_producao,
  } as TOperacaoProducaoModel;

  return model;
}

//#region other
//#endregion
