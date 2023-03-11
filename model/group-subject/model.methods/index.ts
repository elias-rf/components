//--
import { Knex } from "knex";
import { TTable } from "../../../types";
import { canFactory } from "./can";

export function groupSubjectMethods({
  connection,
  table,
}: {
  connection: Knex;
  table: TTable;
}) {
  return {
    query: {
      can: canFactory({ connection, table }),
    },
  };
}
