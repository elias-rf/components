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

  const model: TClienteModel = {
    connection,
    table: cliente,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      vendaMensalQuantidadeSchema: (args) =>
        methods.query.vendaMensalQuantidadeSchema(args),
      vendaMensalValorSchema: (args) =>
        methods.query.vendaMensalValorSchema(args),
      vendaMensalValorMedioSchema: (args) =>
        methods.query.vendaMensalValorMedioSchema(args),
      vendaMensalQuantidade: (args) =>
        methods.query.vendaMensalQuantidade(args),
      vendaMensalValor: (args) => methods.query.vendaMensalValor(args),
      vendaMensalValorMedio: (args) =>
        methods.query.vendaMensalValorMedio(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}
