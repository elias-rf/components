//--
import { Knex } from "knex";
import { TTableDef } from "../../../types";
import { canFactory } from "./can";

export function groupSubjectMethods({
  connection,
  table,
}: {
  connection: Knex;
  table: TTableDef;
}) {
  return {
    query: {
      can: canFactory({ connection, table }),
    },
  };
}
