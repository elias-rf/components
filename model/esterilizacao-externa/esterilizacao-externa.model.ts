import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { esterilizacao_externa } from "./esterilizacao-externa.table";
import type { TEsterilizacaoExternaModel } from "./esterilizacao-externa.type";
//#region import
import { esterilizacaoExternaMethods } from "./model-methods";

//#endregion

export function esterilizacaoExternaModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TEsterilizacaoExternaModel {
  const connection = connections[esterilizacao_externa.database];
  const crud = crudFactory(connection, esterilizacao_externa);
  const methods = esterilizacaoExternaMethods(connection);

  const model = {
    connection,
    esterilizacao_externa,
    query: { ...crud.query, ...methods.query },
    mutation: { ...crud.mutation, ...methods.mutation },
  };

  return model;
}
