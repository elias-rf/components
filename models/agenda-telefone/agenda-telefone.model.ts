import type { TConnections } from "@/config/connections";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { crudFactory } from "@/utils/crud/crud.factory";
import { agenda_telefone } from "./agenda-telefone.table";

export function agendaTelefoneModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[agenda_telefone.database];
  const crud = crudFactory(connection, agenda_telefone);

  const model = {
    connection,
    table: agenda_telefone,
    query: {
      list: (args: TListArgs) => crud.query.list(args),
      read: (args: TReadArgs) => crud.query.read(args),
    },
    mutation: {
      create: (args: TCreateArgs) => crud.mutation.create(args),
      update: (args: TUpdateArgs) => crud.mutation.update(args),
      del: (args: TDelArgs) => crud.mutation.del(args),
    },
  };
  return model;
}
