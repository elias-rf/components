import { crudFactory } from "@mono/utils/crud/crud.factory";
import { TConnections } from "../connections";
import { group_subject } from "./group-subject.table";
import type { TGroupSubjectModel } from "./group-subject.type";
import { groupSubjectMethods } from "./model.methods";

export function groupSubjectModelFactory({
  connections,
}: {
  connections: TConnections;
}): TGroupSubjectModel {
  const connection = connections[group_subject.database];
  const crud = crudFactory(connection, group_subject);

  const model = {
    query: {
      ...crud.query,
      ...groupSubjectMethods({ connection, table: group_subject }).query,
    },
    mutation: {
      ...crud.mutation,
    },
    connection,
    table: group_subject,
  } as TGroupSubjectModel;

  return model;
}
