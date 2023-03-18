import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { agenda_telefone } from "./agenda-telefone.table";
import type { TAgendaTelefoneModel } from "./agenda-telefone.type";
//#region import
//#endregion

export function agendaTelefoneModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TAgendaTelefoneModel {
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
    agenda_telefone,
    help: {
      clear: `Clear
      Retorna um registro com valores default`,
    },
  } as TAgendaTelefoneModel;

  return model;
}

//#region other
//#endregion
