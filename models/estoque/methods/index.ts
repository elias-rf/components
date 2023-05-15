import type { Knex } from "knex";
//--
import { TTableDef } from "@/types";
import { incrementFactory } from "./increment";

export function estoqueMethods(connection: Knex, table: TTableDef) {
  return {
    mutation: {
      increment: incrementFactory(connection, table),
    },
  };
}
