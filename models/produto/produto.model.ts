import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produto } from "./produto.table";

export function produtoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[produto.database];
  const crud = crudFactory(connection, produto);

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    produto,
  };

  return model;
}
