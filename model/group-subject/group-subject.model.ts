
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { group_subject } from "./group-subject.table";
import type { TGroupSubjectModel } from "./group-subject.type";
//#region import
import { groupSubjectMethods } from "./model.methods";
//#endregion

export function groupSubjectModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TGroupSubjectModel {

  const connection = connections[group_subject.database]
  const crud = crudFactory(
    connection,
    group_subject
  );

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      ...groupSubjectMethods({ connection, table: group_subject }).query,

      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    group_subject,
  } as TGroupSubjectModel;

  return model
}

//#region other
//#endregion
