import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { agenda_telefone } from "./agenda-telefone.table";
import type { TAgendaTelefoneModel } from "./agenda-telefone.type";

export function agendaTelefoneModelFactory({
  connections,
}: {
  connections: TConnections;
}): TAgendaTelefoneModel {
  const connection = connections[agenda_telefone.database];
  const crud = crudFactory(connection, agenda_telefone);

  const model = {
    query: {
      list(args) {
        return crud.query.list(args);
      },
      read(args) {
        return crud.query.read(args);
      },
    },
    mutation: {
      create(args) {
        return crud.mutation.create(args);
      },
      update(args) {
        return crud.mutation.update(args);
      },
      del(args) {
        return crud.mutation.del(args);
      },
    },
    connection,
    table: agenda_telefone,
    help: {
      clear: `Retorna um registro com valores default`,
    },
  } as TAgendaTelefoneModel;
  return model;
}
