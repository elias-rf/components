import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { nf_entrada_controle } from "./nf-entrada-controle.table";

export function nfEntradaControleModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[nf_entrada_controle.database];
  const crud = crudFactory(connection, nf_entrada_controle);

  const model = {
    query: {
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    nf_entrada_controle,
  };

  return model;
}
