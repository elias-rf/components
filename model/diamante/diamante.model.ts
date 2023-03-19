import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { diamante } from "./diamante.table";
import type { TDiamanteModel } from "./diamante.type";

export function diamanteModelFactory({
  connections,
}: {
  connections: TConnections;
}): TDiamanteModel {
  const connection = connections[diamante.database];
  const crud = crudFactory(connection, diamante);

  const model = {
    connection,
    diamante,
    query: { ...crud.query },
    mutation: { ...crud.mutation },
  };
  return model;
}
