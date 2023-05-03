//--
import { TTableDef } from "@/types";
import { Knex } from "knex";
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
