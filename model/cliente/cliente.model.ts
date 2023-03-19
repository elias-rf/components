import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { cliente } from "./cliente.table";
import type { TClienteModel } from "./cliente.type";

import { TNfSaidaRpc } from "../nf-saida/nf-saida.type";
import { clienteMethods } from "./model-methods";

export function clienteModelFactory({
  connections,
  nfSaidaModel,
}: {
  connections: TConnections;
  nfSaidaModel: TNfSaidaRpc;
}): TClienteModel {
  const connection = connections[cliente.database];
  const crud = crudFactory(connection, cliente);
  const methods = clienteMethods({ nfSaidaModel });
  const model = {
    connection,
    table: cliente,
    help: {},
    query: { ...crud.query, ...methods.query },
    mutation: { ...crud.mutation, ...methods.mutation },
  };

  return model;
}
