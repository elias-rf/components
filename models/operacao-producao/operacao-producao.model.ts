
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { operacao_producao } from "./operacao-producao.table";
import type { TOperacaoProducaoModel } from "./operacao-producao.type";
//#region import
//#endregion

export function operacaoProducaoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TOperacaoProducaoModel {

  const connection = connections[operacao_producao.database]
  const crud = crudFactory(
    connection,
    operacao_producao
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
    operacao_producao,
  } as TOperacaoProducaoModel;

  return model
}

//#region other
//#endregion
