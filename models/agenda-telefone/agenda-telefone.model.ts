import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { agenda_telefone } from "./agenda-telefone.table";
import type { TAgendaTelefoneModel } from "./agenda-telefone.type";

export function agendaTelefoneModelFactory({
  connections,
}: {
  connections: TConnections;
}): TAgendaTelefoneModel {
  const connection = connections[agenda_telefone.database];
  const crud = crudFactory(connection, agenda_telefone);

  const model: TAgendaTelefoneModel = {
    connection,
    table: agenda_telefone,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };
  return model;
}
