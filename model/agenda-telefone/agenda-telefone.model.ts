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
      ...crud.query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    table: agenda_telefone,
    help: {
      clear: `Retorna um registro com valores default`,
    },
  } as TAgendaTelefoneModel;

  return model;
}
