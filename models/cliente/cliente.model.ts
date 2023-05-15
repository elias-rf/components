import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { cliente } from "./cliente.table";

import { TPeriodo, TPeriodoCliente } from "@/models/cliente/cliente.type";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { TNfSaidaRpc } from "../nf-saida/nf-saida.type";
import { clienteMethods } from "./methods";

export function clienteModelFactory({
  connections,
  nfSaidaModel,
}: {
  connections: TConnections;
  nfSaidaModel: TNfSaidaRpc;
}) {
  const connection = connections[cliente.database];
  const crud = crudFactory(connection, cliente);
  const methods = clienteMethods({ nfSaidaModel });

  const model = {
    connection,
    table: cliente,
    query: {
      list: (args: TListArgs) => crud.query.list(args),
      read: (args: TReadArgs) => crud.query.read(args),
      vendaMensalQuantidadeSchema: (args: TPeriodo) =>
        methods.query.vendaMensalQuantidadeSchema(args),
      vendaMensalValorSchema: (args: TPeriodo) =>
        methods.query.vendaMensalValorSchema(args),
      vendaMensalValorMedioSchema: (args: TPeriodo) =>
        methods.query.vendaMensalValorMedioSchema(args),
      vendaMensalQuantidade: (args: TPeriodoCliente) =>
        methods.query.vendaMensalQuantidade(args),
      vendaMensalValor: (args: TPeriodoCliente) =>
        methods.query.vendaMensalValor(args),
      vendaMensalValorMedio: (args: TPeriodoCliente) =>
        methods.query.vendaMensalValorMedio(args),
    },
    mutation: {
      create: (args: TCreateArgs) => crud.mutation.create(args),
      update: (args: TUpdateArgs) => crud.mutation.update(args),
      del: (args: TDelArgs) => crud.mutation.del(args),
    },
  };

  return model;
}
